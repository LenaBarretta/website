// ─────────────────────────────────────────────────────────────────────────────
// Site-wide content (home, projects, writing). The CV page has its own file,
// src/data/cv.ts, which mirrors the PDF CV.
// Optional fields (href, year, tags …) can be omitted.
// ─────────────────────────────────────────────────────────────────────────────

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  summary: string;
  /** Short bullet points with concrete outcomes. */
  highlights?: string[];
  role?: string;
  year?: string;
  tags?: string[];
  href?: string;
  /** Link to a published client case study (shown as "Case study ↗"). */
  caseStudy?: string;
  /** Square image for the /projects page (path inside /public). */
  image?: string;
  /** Install command shown on the /projects card, e.g. "pip install tidyenv". */
  install?: string;
  /** Extra links shown on the /projects card. */
  links?: Link[];
};

export type ExternalItem = {
  title: string;
  href?: string;
  /** Where it was published / presented. */
  venue?: string;
  date?: string;
  summary?: string;
};

export const profile = {
  name: "Elena Raikova",
  shortName: "Lena",
  role: "Senior AI/ML & Research Engineer",
  /** Home page: what I work on (a field, not a job title). */
  field: "AI & Machine Learning · Serious research & occasional mischief",
  location: "Buenos Aires, Argentina",
  email: "lenabarretta@gmail.com",
  /** Home page: a couple of sentences, no more. */
  homeIntro:
    "I design and ship machine-learning systems, from problem framing to production: LLM evaluation, agents, forecasting.",
  /** CV page summary. */
  cvIntro:
    "13 years in production software engineering, including 5 years building end-to-end AI and ML systems: LLM/RAG evaluation, agentic automation, demand forecasting with causal pricing, and classical and deep learning. I own architecture from problem framing to deployment, and I back decisions with experiments.",
  focus: ["LLM & RAG evaluation", "Agentic AI", "Forecasting & causal inference", "Deep learning"],
  /**
   * Path to the PDF CV inside /public (e.g. "/Elena_Raikova_CV.pdf").
   * Leave empty while the PDF isn't ready — the button shows as a placeholder.
   */
  cvPdf: "/Elena_Raikova_CV.pdf",
};

/** Links shown in the header/footer and the contact section. Empty href = hidden. */
export const links: Link[] = [
  { label: "Email", href: "mailto:lenabarretta@gmail.com" },
  { label: "lenatriestounderstand", href: "https://lenatriestounderstand.com" },
  { label: "LinkedIn", href: "" }, // TODO: add profile URL
  { label: "GitHub", href: "" }, // TODO: add profile URL
];

/** Personal research-and-writing site, shown on /projects. */
export const lenatriestounderstand: Project = {
  title: "lenatriestounderstand",
  summary:
    "An independent ML research-and-writing site: long-form notes with runnable experiments and interactive visualizations, from LLM post-training and mechanistic interpretability to GPU internals and causal inference.",
  role: "Author & engineer",
  year: "2026 – now",
  tags: ["LLMs", "Interpretability", "ML systems", "Writing"],
  href: "https://lenatriestounderstand.com",
  image: "/projects/lenatriestounderstand.webp",
};

/** The /projects page: personal projects only (work cases stay on the CV). */
export const personalProjects: Project[] = [
  lenatriestounderstand,
  {
    title: "Sharada",
    summary:
      "A small encoder that makes typed decisions about text in one forward pass: the options come with the request, and what comes back is a calibrated probability for each of them. Nothing is generated or parsed, and the model answers questions it has never seen.",
    tags: ["NLP", "Calibration", "Open source"],
    href: "https://github.com/LenaBarretta/sharada",
    image: "/projects/sharada.webp",
    install: "pip install sharada",
    links: [
      { label: "GitHub", href: "https://github.com/LenaBarretta/sharada" },
      { label: "PyPI", href: "https://pypi.org/project/sharada/" },
      { label: "HF Base", href: "https://huggingface.co/LenaBarretta/sharada-base" },
      { label: "HF Large", href: "https://huggingface.co/LenaBarretta/sharada-large" },
      { label: "Write-up", href: "https://lenatriestounderstand.com/notes/llm/024-rlcr/" },
    ],
  },
  {
    title: "tidyenv",
    summary:
      "Typed environment variables with friendly errors for Python. Built-in .env support, zero dependencies: one line per variable, and every error names the variable and says what is wrong with it.",
    tags: ["Python", "Open source", "PyPI"],
    href: "https://github.com/LenaBarretta/tidyenv",
    image: "/projects/tidyenv.webp",
    install: "pip install tidyenv",
    links: [
      { label: "GitHub", href: "https://github.com/LenaBarretta/tidyenv" },
      { label: "PyPI", href: "https://pypi.org/project/tidyenv/" },
    ],
  },
];

/** Articles published elsewhere. Posts written on this site come from src/content/writing. */
export const externalWriting: ExternalItem[] = [];
