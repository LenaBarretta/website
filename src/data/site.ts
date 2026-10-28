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
  /** Where it was published / presented, e.g. "arXiv". */
  venue?: string;
  /** ISO date, e.g. "2026-10-23". */
  date?: string;
  summary?: string;
  /** Square thumbnail (path inside /public). */
  image?: string;
};

export const profile = {
  name: "Elena Raikova",
  shortName: "Lena",
  /** Home page: what I work on (a field, not a job title). */
  field: "AI & Machine Learning · Serious research & occasional mischief",
  location: "Buenos Aires, Argentina",
  email: "lenabarretta@gmail.com",
  /** Home page text; also the site's meta description. */
  intro:
    "I'm interested in what lies underneath AI, machine learning and the systems that run them: why models behave the way they do, where they quietly fail, and when their answers can be trusted.",
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/elena-raikova-775478110" },
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
    title: "torchisotonic",
    summary:
      "Batched isotonic regression for PyTorch tensors, fast on the GPU. Fits every row of a tensor at once, on CPU or with CUDA kernels, with the same results as scikit-learn: calibrating classifiers and monotone fits inside models, from a few elements per row to a hundred million.",
    tags: ["PyTorch", "GPU", "Calibration"],
    href: "https://github.com/LenaBarretta/torchisotonic",
    image: "/projects/torchisotonic.webp",
    install: "pip install torchisotonic",
    links: [
      { label: "GitHub", href: "https://github.com/LenaBarretta/torchisotonic" },
      { label: "PyPI", href: "https://pypi.org/project/torchisotonic/" },
    ],
  },
  {
    title: "sharada",
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
    title: "torchrolling",
    summary:
      "Pandas-style rolling and exponentially weighted statistics for PyTorch tensors, fast on GPU. O(1) work per element for any window, fused Triton kernels on CUDA, autograd and torch.compile support, and the same numbers as pandas.",
    tags: ["PyTorch", "GPU", "Open source"],
    href: "https://github.com/LenaBarretta/torchrolling",
    image: "/projects/torchrolling.webp",
    install: "pip install torchrolling",
    links: [
      { label: "GitHub", href: "https://github.com/LenaBarretta/torchrolling" },
      { label: "PyPI", href: "https://pypi.org/project/torchrolling/" },
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
export const externalWriting: ExternalItem[] = [
  {
    title: "Merge Hulls Without Copying Vertices: GPU Isotonic Regression",
    href: "https://arxiv.org/abs/2610.24038",
    venue: "arXiv",
    date: "2026-10-23",
    summary:
      "A parallel isotonic regression that merges convex hulls as lists of segments instead of copying vertices. On dense hulls the merge phase is 17 to 276 times faster on four NVIDIA GPUs, and a differentiable soft rank built on it trains 1.5 to 40 times faster. The algorithm behind torchisotonic.",
    image: "/writing/arxiv-2610.24038.webp",
  },
];
