# Elena Raikova — personal site

Static site on [Astro](https://astro.build). Pages: `/` (home), `/cv/`, `/writing/`.

## Run locally

```bash
npm install      # once
npm run dev      # http://localhost:4321 (add --port 4330 if 4321 is busy)
npm run build    # static output in dist/
```

## Where content lives

| What | Where |
|---|---|
| Name, role, intros, PDF CV path | `src/data/site.ts` → `profile` |
| Selected work, research, articles elsewhere, talks, links, experience, skills | `src/data/site.ts` |
| Posts written on this site | `src/content/writing/*.md` |

An empty list (`[]`) hides its section automatically.

### Add a project

Open `src/data/site.ts` and add an object to `selectedWork` (or `research`):

```ts
{
  title: "My new project",
  summary: "One or two sentences about what it is and why it matters.",
  highlights: ["Concrete outcome with a number"], // optional
  role: "Architecture owner",                     // optional
  year: "2026",                                   // optional
  tags: ["LLMs", "Evaluation"],                   // optional
  href: "https://…",                              // optional
},
```

Articles published elsewhere go to `externalWriting`, talks to `talks`
(`{ title, href?, venue?, date?, summary? }`).

### Write a post

Copy `src/content/writing/example-post.md`, rename it (file name = URL), edit the
front matter and set `draft: false`.

### PDF CV

Put the file in `public/` (e.g. `public/Elena_Raikova_CV.pdf`) and set
`profile.cvPdf = "/Elena_Raikova_CV.pdf"`. Until then the button is shown disabled.

### Articles from lenatriestounderstand

`/writing/`, the home page and the CV list notes from `../lenatriestounderstand/notes`
whose status is **Published** or **Ready to Publish**. After publishing new notes run:

```bash
npm run sync-notes
```

It regenerates `src/data/notes.json` and thumbnails in `public/notes/` (commit both;
the build doesn't need the other repo). Point it elsewhere with `NOTES_DIR=/path/to/notes`.
