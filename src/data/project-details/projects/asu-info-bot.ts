// src/data/project-details/projects/asu-info-bot.ts

import type { ProjectDetails } from "../types";

export const asuInfoBot: ProjectDetails = {
  id: "asu-info-bot",

  overview:
    "Retrieval-augmented assistant over ASU-specific knowledge that answers common questions with grounded context. Designed for fast updates: add/refresh docs → re-index → instantly improved answers (no re-training).",

  challenge:
    "ASU policies, course info, and workflows are spread across pages and PDFs. People waste time hunting for the right source, and answers go stale when content changes.",

  solution:
    "Built a RAG pipeline that ingests curated ASU docs, chunks and embeds them, retrieves relevant context via FAISS, and generates responses with an LLM—optimized for low-latency and plug-and-play document expansion.",

  keyInsight:
    "For institutional knowledge that changes often, RAG beats fine-tuning: you update the source material and re-index instead of re-training a model.",

  keyFeatures: [
    "Markdown ingestion pipeline with chunking + metadata (source, section, tags)",
    "Vector search using FAISS for fast similarity retrieval",
    "LLM answer generation grounded on retrieved context (reduces hallucinations)",
    "Pluggable knowledge sources (add docs without changing core logic)",
    "Simple API surface for chat UI integration",
    "Extensible structure for citations, filters, and future re-ranking upgrades",
  ],

  useCases: [
    "Students asking about course prerequisites, timelines, and common policies",
    "Staff needing quick workflow answers without searching multiple portals",
    "New hires onboarding into ASU processes with a single entry point",
    "FAQ automation for recurring internal questions",
  ],

  role: "Full-Stack Developer (Ingestion + Retrieval + API integration)",

  impact: [
    "Built an end-to-end RAG pipeline from ingestion to retrieval to response formatting",
    "Enabled sub-second answers for common queries on a curated knowledge base",
    "Designed the system for easy expansion as new document sources are added",
  ],

  techStack: ["FastAPI", "OpenAI", "FAISS", "Markdown ingestion", "Python"],

  architecture: {
    heading: "RAG Answering Pipeline",
    subheading: "From ASU docs to grounded answers in a chat experience",
    steps: [
      { title: "Docs", subtitle: "Curated ASU sources" },
      { title: "Chunk + Embed", subtitle: "Text → vectors + metadata" },
      { title: "FAISS", subtitle: "Retrieve top matches" },
      { title: "LLM", subtitle: "Answer using context" },
    ],
    metrics: [
      { label: "Latency", value: "Sub-second for common queries" },
      { label: "Extensibility", value: "Add docs → re-index" },
    ],
  },

  performanceByFeature: [],

  links: [
  {
    label: "Project Repo Link",
    href: "https://github.com/Dhruv12310/asu-info-bot-prototype",
  },
],
};
