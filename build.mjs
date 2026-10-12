// Menggabungkan src/index.template.html + src/partials/* menjadi index.html
// Jalankan: node build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "src");
const tpl = readFileSync(join(src, "index.template.html"), "utf8");
const out = tpl.replace(/<!--\s*@include\s+(\S+)\s*-->/g, (_, p) =>
  readFileSync(join(src, p), "utf8").trimEnd()
);
writeFileSync(join(root, "index.html"), out);
console.log("index.html berhasil dibuat");
