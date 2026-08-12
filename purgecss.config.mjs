const mithrilExtractor = (content) => {
  const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
  const selectorMatches = [];
  const mithrilSelectorPattern = /m\(\s*["'`]([^"'`]+)["'`]/g;
  let match;

  while ((match = mithrilSelectorPattern.exec(content)) !== null) {
    selectorMatches.push(
      ...match[1]
        .split(/(?=[.#])/)
        .map(selector => selector.replace(/^[.#]/, ""))
        .filter(Boolean)
    );
  }

  return [...broadMatches, ...selectorMatches];
};

export default {
  content: [
    "src/main/app/**/*.{ts,js}",
    "src/library/eleventy/**/*.{html,njk,md,json}",
    "public/{index,main,not_found}.html"
  ],
  css: [
    "src/main/css/**/*.css",
    "src/library/css/**/*.css"
  ],
  rejected: true,
  defaultExtractor: mithrilExtractor,
  safelist: {
    standard: [
      "app-loaded",
      "collapsed",
      "visible",
      "hiding",
      "active",
      "info",
      "achievement",
      "error",
      "affirmative",
      "change",
      "new",
      "fix",
      "del"
    ],
    deep: [
      /^theme-/,
      /^toast/,
      /^panel/,
      /^changelog-card/,
      /^bbcode-/,
      /^hljs/
    ],
    greedy: [
      /purple/,
      /blue/,
      /dark/,
      /darkspace/,
      /data-type/,
      /data-color/,
      /data-theme/,
      /data-panel-action/
    ]
  }
};
