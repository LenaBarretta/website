import { getCollection } from "astro:content";

/** Published posts, newest first. */
export async function getPosts() {
  const posts = await getCollection("writing", (p) => !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
