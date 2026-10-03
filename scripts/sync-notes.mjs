// Pulls the article list from the lenatriestounderstand repo into this site.
//
//   npm run sync-notes
//
// Reads notes/<part>/<chapter>/index.qmd front matter, keeps only notes whose
// status is "Published" or "Ready to Publish", writes src/data/notes.json and
// small square thumbnails of each card.* image (not hero.*) to public/notes/. Commit both outputs:
// the build itself never needs the other repo.

import { promises as fs } from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const NOTES_DIR = path.resolve(process.env.NOTES_DIR ?? path.join(ROOT, "../lenatriestounderstand/notes"));
const SITE_URL = "https://lenatriestounderstand.com";
const OUT_JSON = path.join(ROOT, "src/data/notes.json");
const OUT_IMG = path.join(ROOT, "public/notes");
const VISIBLE = new Set(["published", "ready to publish"]);
const IMAGE_EXTS = ["webp", "png", "jpg", "jpeg", "avif"];

function frontMatter(text) {
  const lines = text.split("\n");
  if (lines[0].trim() !== "---") return {};
  const end = lines.indexOf("---", 1);
  return end > 0 ? (yaml.load(lines.slice(1, end).join("\n")) ?? {}) : {};
}

async function findCard(dir) {
  for (const ext of IMAGE_EXTS) {
    const p = path.join(dir, `card.${ext}`);
    try {
      await fs.access(p);
      return p;
    } catch {}
  }
  return null;
}

const toISO = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d) : "");

await fs.rm(OUT_IMG, { recursive: true, force: true });
await fs.mkdir(OUT_IMG, { recursive: true });

const notes = [];
for (const part of await fs.readdir(NOTES_DIR, { withFileTypes: true })) {
  if (!part.isDirectory()) continue;
  for (const chapter of await fs.readdir(path.join(NOTES_DIR, part.name), { withFileTypes: true })) {
    if (!chapter.isDirectory()) continue;
    const dir = path.join(NOTES_DIR, part.name, chapter.name);
    let fm;
    try {
      fm = frontMatter(await fs.readFile(path.join(dir, "index.qmd"), "utf8"));
    } catch {
      continue;
    }
    if (!VISIBLE.has(String(fm.status ?? "").toLowerCase())) continue;

    let image = "";
    const card = await findCard(dir);
    if (card) {
      const file = `${part.name}--${chapter.name}.webp`;
      await sharp(card).resize(480, 480, { fit: "cover" }).webp({ quality: 80 }).toFile(path.join(OUT_IMG, file));
      image = `/notes/${file}`;
    }

    notes.push({
      title: fm.title ?? chapter.name,
      description: fm.description ?? "",
      date: toISO(fm.date),
      updated: toISO(fm.lastUpdated),
      track: fm.track ?? part.name,
      tags: fm.tags ?? [],
      short: part.name === "shorts",
      href: `${SITE_URL}/notes/${part.name}/${chapter.name}/`,
      image,
    });
  }
}

notes.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
await fs.writeFile(OUT_JSON, `${JSON.stringify(notes, null, 2)}\n`);
console.log(`Synced ${notes.length} notes (${notes.filter((n) => n.image).length} with images) from ${NOTES_DIR}`);
