// ─────────────────────────────────────────────────────────────────────────────
// Content of the /cv page. Mirrors the PDF CV (public/Elena_Raikova_CV.pdf)
// one to one — when the PDF changes, update this file to match.
//
// `icon` values are simple-icons slugs (https://simpleicons.org), shown as
// small monochrome logos; leave them out where no logo exists.
// ─────────────────────────────────────────────────────────────────────────────

export type CvProject = {
  title: string;
  bullets: string[];
  caseStudy?: { href: string; image: string };
};

export const header = {
  name: "Elena Raikova",
  title: "Senior AI and Machine Learning Engineer / Technical Lead",
  location: "Buenos Aires, Argentina",
  email: "lenabarretta@gmail.com",
  linkedin: "", // TODO: add profile URL
  website: { label: "lenatriestounderstand.com", href: "https://lenatriestounderstand.com" },
  summary: [
    "13 years in production software engineering, including 5 years in end-to-end AI and ML systems.",
    "Classical ML, deep learning, LLM/RAG evaluation, demand forecasting, agentic AI.",
  ],
};

export const job = {
  company: "DataArt",
  title: "Senior AI/ML Engineer / Technical Lead",
  period: "2013 – Present",
  location: "Remote / Buenos Aires",
  projectsLabel: "Most recent projects",
  projects: [
    {
      title: "Failure-attribution evaluation for RAG & agents",
      bullets: [
        "Reusable evaluation framework that turns a pass/fail score into a diagnosis — pinpointing which stage failed with transition matrices across runs",
        "Scored semantic quality with an LLM judge calibrated against human labels",
        "Verified diagnoses causally by perturbing the suspected component and checking whether the failure changed as expected",
      ],
    },
    {
      title: "Demand forecasting + causal price optimization",
      bullets: [
        "Forecasted demand across 140+ parking facilities × 4 targets; benchmarked Chronos-2, Chronos + LightGBM, Prophet, LSTM, DeepAR, TFT. Reduced MAPE from ~50% to < 15% on a 30-day horizon",
        "Calendar/event features, lag/rolling features, cross-facility features, booking curves, missing-data handling, leakage-safe time splits",
        "Multivariate, global training across facilities and targets, with transfer to cold-start markets",
        "Price elasticity under endogeneity via IV/2SLS, regression discontinuity, control function, and panel fixed effects",
        "Revenue-maximizing price from a monotone-constrained LightGBM demand model pinned to the causal elasticity; served via FastAPI over reproducible DVC pipelines.",
      ],
      caseStudy: {
        href: "https://www.dataart.com/clients/case-studies/the-parking-spot-ai-demand-forecasting",
        image: "https://www.dataart.com/media/pxfeh0xy/ai-demand-forecasting-meta.webp",
      },
    },
    {
      title: "Agentic AI workflow automation",
      bullets: [
        "Agentic workflow automation for a manual royalty-approval process (20k requests/year): LLM-assisted agents embedded in a Power Automate workflow to extract, normalize, and validate Excel/PDF requests, with decision traces shown in Teams adaptive cards.",
        "Separated deterministic business rules from LLM-assisted decisions, with confidence-based abstention, human approval, sanctions checks, subscription/price-book validation, idempotent processing, malformed-document handling, and full audit trails",
      ],
    },
    {
      title: "Enterprise helpdesk Teams chatbot",
      bullets: [
        "MS Teams chatbot for a 6k-user corporate knowledge base: answered user questions and routed requests to the correct helpdesk category using classification methods",
        "Built a one-pass ModernBERT decision classifier that scores arbitrary answer sets as parallel isolated branches; redesigned the attention mask to prevent cross-option leakage, improving accuracy from ~55% to ~85%.",
        "Hybrid RAG over ~54K multilingual Confluence docs indexed in Qdrant, GLiNER entity scoping",
        "Jira Service Management integration: opens tickets from chat, syncs status/comments to the Teams thread",
      ],
      caseStudy: {
        href: "https://www.dataart.com/clients/case-studies/helpdesk-ai-chatbot",
        image: "https://www.dataart.com/media/kptfnowq/helpdesk-ai-chatbot-meta.webp",
      },
    },
    {
      title: "Sensor-data lakehouse with real-time ML",
      bullets: [
        "Implemented and evaluated anomaly-detection and forecasting models on sensor data within a Kafka/Dagster/Dremio/S3/MinIO platform",
        "Benchmarked Chronos-2 against linear and Random Forest baselines",
      ],
    },
  ] as CvProject[],
  earlier: {
    label: "Earlier engineering (2013–2022).",
    text: "NLP for trading-form automation and CV parsing/matching; a carrier-grade Ethernet test & diagnostics platform with a Java engine and Python device connector over SSH/TL1/SOAP; Django CRM and an Open edX LMS. Stack spanned Python, Java, JavaScript, Scala, SQL, Docker, Kubernetes.",
  },
};

export const research = {
  title: "lenatriestounderstand.com",
  href: "https://lenatriestounderstand.com",
  image: "/projects/lenatriestounderstand.webp",
  period: "2026 – Present",
  subtitle: "ML notes with runnable experiments and interactive visualizations",
  areas: [
    {
      area: "LLMs",
      text: "rule induction and LLM-guided program search; calibrated decisions with RL (RLCR); post-training with SFT, LoRA/QLoRA, RLHF/RLAIF, DPO, GRPO; attention variants (MQA, GQA, MLA); agent architectures and temporal grounding",
    },
    {
      area: "Deep learning",
      text: "mechanistic interpretability of GPT-2 small (sparse autoencoders, activation patching, induction heads, steering); knowledge distillation on CIFAR-10; an AlphaZero-style Go player from scratch",
    },
    {
      area: "ML systems",
      text: "how GPUs run ML and matrix multiplication; LLM inference on a T4 GPU (prefill vs decode); from a PyTorch call to a CUDA kernel",
    },
    {
      area: "Retrieval",
      text: "embeddings from LSA and word2vec to BERT, E5 and BGE-M3; chunking strategies; text clustering with UMAP and HDBSCAN",
    },
    {
      area: "Forecasting & causal inference",
      text: "ARIMA/SARIMAX, LSTM, TCN, anomaly detection; endogeneity, IV/2SLS, regression discontinuity, panel fixed effects, pricing elasticity",
    },
  ],
};

/** Personal projects: name + a few words each. */
export const personalProjects = [
  {
    name: "Sharada",
    blurb: "typed decisions about text in one forward pass",
    note: "pip install sharada",
    href: "https://github.com/LenaBarretta/sharada",
    image: "/projects/sharada.webp",
  },
  {
    name: "tidyenv",
    blurb: "typed environment variables for Python",
    note: "pip install tidyenv",
    href: "https://github.com/LenaBarretta/tidyenv",
    image: "/projects/tidyenv.webp",
  },
];

/** Skills exactly as in the PDF; `icon` adds a small logo where one exists. */
export const skills: { group: string; items: { name: string; icon?: string }[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "openjdk" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Scala", icon: "scala" },
      { name: "SQL" },
    ],
  },
  {
    group: "ML / DL",
    items: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "deep learning" },
      { name: "classical ML" },
      { name: "model evaluation" },
      { name: "hyperparameter optimization" },
      { name: "mechanistic interpretability (SAEs, activation patching)" },
      { name: "knowledge distillation" },
    ],
  },
  {
    group: "LLM / GenAI",
    items: [
      { name: "RAG" },
      { name: "agents" },
      { name: "LLM-as-a-judge" },
      { name: "fine-tuning" },
      { name: "LoRA SFT (MLX)" },
      { name: "rejection-sampling fine-tuning" },
      { name: "test-time training" },
      { name: "RL with calibration rewards" },
      { name: "program synthesis" },
    ],
  },
  {
    group: "NLP",
    items: [
      { name: "spaCy", icon: "spacy" },
      { name: "GLiNER" },
      { name: "NLTK" },
      { name: "entity extraction" },
      { name: "classification" },
      { name: "document intelligence" },
    ],
  },
  {
    group: "Forecasting",
    items: [
      { name: "Chronos/Chronos-2" },
      { name: "LSTM" },
      { name: "DeepAR" },
      { name: "quantile forecasting" },
      { name: "booking curves" },
      { name: "price optimization" },
      { name: "what-if" },
    ],
  },
  {
    group: "Environment",
    items: [
      { name: "Power Automate" },
      { name: "Dynamics 365" },
      { name: "Dataverse" },
      { name: "Azure AI Document Intelligence / AI Search" },
      { name: "MS Teams" },
      { name: "Jira Service Management", icon: "jira" },
      { name: "Confluence", icon: "confluence" },
      { name: "Kafka", icon: "apachekafka" },
      { name: "Dagster/Airflow", icon: "apacheairflow" },
      { name: "Dremio" },
      { name: "DVC", icon: "dvc" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Qdrant", icon: "qdrant" },
      { name: "Snowflake", icon: "snowflake" },
      { name: "Redis", icon: "redis" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Streamlit", icon: "streamlit" },
      { name: "Docker/Podman", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "MinIO", icon: "minio" },
      { name: "Terraform", icon: "terraform" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Sentry", icon: "sentry" },
      { name: "GPU/CUDA", icon: "nvidia" },
      { name: "Kaggle", icon: "kaggle" },
    ],
  },
  { group: "Cloud", items: [{ name: "Azure" }, { name: "AWS" }] },
];

export const education = [
  {
    degree: "M.Sc., Applied Mathematics, Informatics and Mechanics",
    school: "Voronezh State University, Russia",
  },
];
