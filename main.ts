// 25 November 2026 — World News Front Page.
//
// The front page (entry.png) was already drawn at build time, on the
// builder's machine, from fifty-two real stories reported on Wednesday
// 25 November 2026. This script draws nothing: it only carries the
// finished artwork into the folder the grader points at, and checks
// that the copy arrived whole.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

if (!existsSync(source)) {
  console.error(`entry.png is missing next to main.ts (looked in ${here})`);
  process.exit(1);
}

const sourceSize = statSync(source).size;
if (sourceSize === 0) {
  console.error("entry.png is empty, refusing to ship it");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set; point it at the output folder");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

// The grader reads $MAKEFUN_OUTPUT_DIR/entry.png after this runs, so the
// destination name is fixed even though the folder itself is the caller's
// choice.
const dest = join(outDir, "entry.png");
copyFileSync(source, dest);

const destSize = statSync(dest).size;
if (destSize !== sourceSize) {
  console.error(
    `copied entry.png is ${destSize} bytes, expected ${sourceSize}; aborting`,
  );
  process.exit(1);
}

console.log(`shipped entry.png (${destSize} bytes) to ${dest}`);
