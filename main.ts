import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryText = "The minutes from the meeting read, in full: 'To be discussed at the next meeting.'";

try {
  mkdirSync(outDir, { recursive: true });
  const target = path.resolve(outDir, "entry.txt");
  void here;
  writeFileSync(target, entryText, "utf8");
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
