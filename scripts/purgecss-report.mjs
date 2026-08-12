import { PurgeCSS } from "purgecss";
import config from "../purgecss.config.mjs";

const results = await new PurgeCSS().purge(config);
let total = 0;

for (const result of results) {
  const rejected = result.rejected ?? [];

  if (rejected.length === 0) {
    continue;
  }

  total += rejected.length;
  console.log(`\n${result.file}`);

  for (const selector of rejected) {
    console.log(`  ${selector}`);
  }
}

if (total === 0) {
  console.log("PurgeCSS: no unused selectors found.");
}
else {
  console.log(`\nPurgeCSS: ${total} unused selector candidates found.`);
  console.log("Review before deleting; dynamic classes may need safelist.");
}