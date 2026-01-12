// src/data/projects.ts

export type ImpactStat = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  name: string;
  badge: string;           // short tag like "Full-Stack AI"
  tagline: string;         // short title line
  description: string;     // one-sentence description
  tech: string[];          // tech stack badges/text
  impacts: ImpactStat[];   // 1–3 impact metrics
};

export const projects: Project[] = [
    {
    id: "accounting-ai-companion",
    name: "Accounting AI Companion",
    badge: "Full-Stack AI",
    tagline: "Enterprise accounting without the complexity.",
    description:
      "AI-powered accounting assistant that automates data extraction, classification, and reconciliation using OCR and LLMs, reducing manual bookkeeping for businesses.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "OCR", "LLMs"],
    impacts: [
      { label: "Efficiency", value: "80% manual entry reduction" },
      { label: "Accuracy", value: "90%+ OCR accuracy" },
      { label: "Use Case", value: "SMB & enterprise finance workflows" },
    ],
  },
    {
    id: "asu-info-bot",
    name: "ASU Info Bot (RAG LLM)",
    badge: "RAG Chatbot",
    tagline: "LLM assistant over ASU-specific knowledge.",
    description:
      "Retrieval-augmented chatbot that answers questions about ASU courses, policies, and workflows by indexing markdown docs and querying them with LLMs.",
    tech: ["FastAPI", "OpenAI", "FAISS", "Markdown ingestion"],
    impacts: [
      { label: "Docs", value: "Indexes curated ASU knowledge base" },
      { label: "Latency", value: "Sub-second answers for common queries" },
      { label: "Extensibility", value: "Plug-and-play new document sources" },
    ],
  },
  {
    id: "asu-lost-found",
    name: "ASU Lost & Found Portal",
    badge: "Campus Systems",
    tagline: "Staff-only portal for managing lost items at ASU.",
    description:
      "Operational web app for ASU staff to log, search, and archive lost items with images, auto-archiving, and AI-assisted descriptions, designed for ASU SDLC & security guidelines.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Firestore/AWS S3"],
    impacts: [
      { label: "Lookup Time", value: "≈ 60% faster item retrieval" },
      { label: "Data Safety", value: "Aligned with ASU SDLC & OWASP" },
      { label: "Staff UX", value: "Optimized for iPad + desktop flows" },
    ],
  },
  {
    id: "volatility-estimator",
    name: "Volatility Estimator",
    badge: "Quant Research",
    tagline: "Event-driven volatility analysis toolkit.",
    description:
      "CLI tool and research workflow that computes baseline vs. event-window volatility around macro announcements using multiple estimators and exports plots & CSVs.",
    tech: ["Python", "Pandas", "Matplotlib", "CLI tooling"],
    impacts: [
      { label: "Estimators", value: "Supports 5+ volatility estimators" },
      { label: "Reporting", value: "Auto-exports panels & figures" },
      { label: "Use Case", value: "Quant research on CPI / FOMC events" },
    ],
  },
  {
    id: "github-pr-review",
    name: "GitHub App PR Review Checker",
    badge: "Dev Tools",
    tagline: "AI-assisted code review for pull requests.",
    description:
      "GitHub App that watches PRs, summarizes changes, and flags risky areas using LLMs so reviewers can focus on architecture instead of boilerplate diffs.",
    tech: ["GitHub App", "TypeScript", "Node.js", "OpenAI"],
    impacts: [
      { label: "Review Time", value: "Cuts manual review overhead" },
      { label: "Coverage", value: "Flags missing tests & edge cases" },
      { label: "Integration", value: "Inline comments directly in PRs" },
    ],
  },
  {
    id: "smart-career-coach",
    name: "Success Career Coach",
    badge: "Educational AI",
    tagline: "AI career copilot for resumes & job fit.",
    description:
      "Web platform that compares resumes with job descriptions, generates tailored bullet points, and suggests concrete upskilling actions using LLMs.",
    tech: ["Next.js", "Flask", "OpenAI", "PostgreSQL"],
    impacts: [
      { label: "Resume Time", value: "≈ 70% faster tailoring" },
      { label: "Match Score", value: "0-100 match score per job" },
      { label: "Artifacts", value: "Generates resumes, cover letters, emails" },
    ],
  },
    {
    id: "aws-reco",
    name: "AWS Recommendation System",
    badge: "Full-Stack AI",
    tagline: "Real-time personalized product recommendations.",
    description:
      "Serverless e-commerce recommendation engine that streams click events, builds user profiles, and returns ranked product suggestions via low-latency APIs.",
    tech: ["AWS Lambda", "Kinesis", "DynamoDB", "S3", "Amazon Personalize"],
    impacts: [
      { label: "Latency", value: "< 250 ms median response" },
      { label: "Scalability", value: "Auto-scales with traffic peaks" },
      { label: "Cost Model", value: "Pay-per-request, no always-on servers" },
    ],
  },
];
