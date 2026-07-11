import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const repoUrl = "https://github.com/Timmy1236/Website/commit";
const markerStart = "<!-- commits:start -->";
const markerEnd = "<!-- commits:end -->";

const groups = [
  ["feat", { title: "Añadidos", card: "new", prefixes: ["feat"] }],
  ["fix", { title: "Arreglos", card: "fix", prefixes: ["fix"] }],
  ["change", { title: "Cambios", card: "change", prefixes: ["refactor", "perf", "style"] }],
  ["other", { title: "Otros", card: "info", prefixes: [] }],
];

const options = parseArgs(process.argv.slice(2));

if (options.help) {
  printHelp();
  process.exit(0);
}

if (options.tags) {
  console.log(runGit(["tag", "--sort=-creatordate"]));
  process.exit(0);
}

const range = resolveRange(options);
const commits = getCommits(range);
const groupedCommits = groupCommits(commits);
const html = renderHtml(groupedCommits);

if (options.write) {
  if (!options.file) {
    exitWithError("Falta --file para usar --write.");
  }

  writeGeneratedBlock(options.file, html);
  console.log(`Changelog actualizado: ${options.file}`);
  console.log(`Rango: ${range.label}`);
  console.log(`Commits: ${commits.length}`);
} else {
  console.log(`<!-- Rango: ${range.label} | Commits: ${commits.length} -->`);
  console.log(html);
}

function parseArgs(args) {
  const parsed = {
    from: undefined,
    to: "HEAD",
    since: undefined,
    file: undefined,
    write: false,
    lastTag: false,
    tags: false,
    help: false,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--write") parsed.write = true;
    else if (arg === "--last-tag") parsed.lastTag = true;
    else if (arg === "--tags") parsed.tags = true;
    else if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg === "--from") parsed.from = readValue(args, index += 1, arg);
    else if (arg === "--to") parsed.to = readValue(args, index += 1, arg);
    else if (arg === "--since") parsed.since = readValue(args, index += 1, arg);
    else if (arg === "--file") parsed.file = readValue(args, index += 1, arg);
    else if (!parsed.file && arg.endsWith(".md")) parsed.file = arg;
    else exitWithError(`Opción desconocida: ${arg}`);
  }

  return parsed;
}

function readValue(args, index, name) {
  const value = args[index];
  if (!value || value.startsWith("--")) exitWithError(`Falta valor para ${name}.`);
  return value;
}

function resolveRange({ from, to, since, lastTag }) {
  if (since) {
    return {
      args: [`--since=${since}`],
      label: `desde ${since} hasta ${to}`,
    };
  }

  const start = from ?? (lastTag ? getLatestTag() : undefined);

  if (!start) {
    return {
      args: [],
      label: `todo el historial hasta ${to}`,
    };
  }

  return {
    args: [`${start}..${to}`],
    label: `${start}..${to}`,
  };
}

function getLatestTag() {
  const tags = runGit(["tag", "--sort=-creatordate"])
    .split("\n")
    .map((tag) => tag.trim())
    .filter(Boolean);

  if (tags.length === 0) {
    exitWithError("No hay tags. Usá --from <commit|tag|fecha> o creá un tag.");
  }

  return tags[0];
}

function getCommits(range) {
  const format = "%H%x1f%h%x1f%s%x1e";
  const raw = runGit(["log", ...range.args, "--reverse", `--pretty=format:${format}`]);

  return raw
    .split("\x1e")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [fullHash, shortHash, subject] = entry.split("\x1f");
      const parsed = parseSubject(subject);
      return { fullHash, shortHash, subject, ...parsed };
    });
}

function parseSubject(subject) {
  const match = subject.match(/^([a-z]+)(?:\(([^)]+)\))?!?:\s*(.+)$/i);

  if (!match) {
    return {
      prefix: "other",
      scope: undefined,
      message: subject,
    };
  }

  return {
    prefix: match[1].toLowerCase(),
    scope: match[2],
    message: match[3],
  };
}

function groupCommits(commits) {
  const result = new Map(groups.map(([key]) => [key, []]));

  for (const commit of commits) {
    const group = groups.find(([, config]) => config.prefixes.includes(commit.prefix));
    const key = group?.[0] ?? "other";
    result.get(key).push(commit);
  }

  return result;
}

function renderHtml(groupedCommits) {
  const cards = [];

  for (const [key, config] of groups) {
    const commits = groupedCommits.get(key);
    if (!commits || commits.length === 0) continue;

    cards.push(`<div class="changelog-card ${config.card}">
  <h1>${config.title}</h1>
  <div class="changelog-card-content">
    <ul>
${commits.map(renderCommit).join("\n")}
    </ul>
  </div>
</div>`);
  }

  if (cards.length === 0) return "<p>No hay commits en este rango.</p>";

  return cards.join("\n\n");
}

function renderCommit(commit) {
  return `      <li><a class="git-hash" href="${repoUrl}/${commit.fullHash}">${commit.shortHash}</a> ${escapeHtml(commit.subject)}</li>`;
}

function writeGeneratedBlock(file, html) {
  if (!existsSync(file)) exitWithError(`No existe archivo: ${file}`);

  const content = readFileSync(file, "utf8");
  const block = `${markerStart}\n${html}\n${markerEnd}`;

  if (content.includes(markerStart) && content.includes(markerEnd)) {
    const nextContent = content.replace(
      new RegExp(`${escapeRegExp(markerStart)}[\\s\\S]*?${escapeRegExp(markerEnd)}`),
      block,
    );
    writeFileSync(file, nextContent);
    return;
  }

  const suffix = content.endsWith("\n") ? "" : "\n";
  writeFileSync(file, `${content}${suffix}\n${block}\n`);
}

function runGit(args) {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim();
  } catch (error) {
    const detail = error.stderr?.toString().trim() || error.message;
    exitWithError(`Git falló: ${detail}`);
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function exitWithError(message) {
  console.error(message);
  process.exit(1);
}

function printHelp() {
  console.log(`Uso:
  node test.mjs --last-tag
  node test.mjs --from v2.0.0 --to HEAD
  node test.mjs --since 2026-04-11
  node test.mjs --from v2.0.0 --file src/eleventy/es/changelog/update-18.md --write

Opciones:
  --from <tag|commit>   Inicio del rango. Ej: v2.0.0
  --to <tag|commit>     Final del rango. Default: HEAD
  --last-tag            Usa el último tag como inicio
  --since <fecha>       Usa git log --since. Ej: 2026-04-11
  --file <archivo.md>   Changelog donde escribir
  --write               Inserta/reemplaza bloque editable entre markers
  --tags                Lista tags disponibles
  --help                Muestra esta ayuda`);
}
