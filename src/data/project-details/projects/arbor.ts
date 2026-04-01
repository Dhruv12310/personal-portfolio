// src/data/project-details/projects/arbor.ts

import type { ProjectDetails } from "../types";

export const arbor: ProjectDetails = {
  id: "arbor",

  overview:
    "Arbor is an open-source document intelligence system that replaces traditional vector database retrieval with LLM-driven hierarchical tree navigation. Instead of embedding documents and running cosine similarity search, Arbor parses any PDF into a structured JSON tree and navigates it level-by-level to find answers — no vector database required. The project involved building two custom fine-tuned models from scratch, diagnosing and fixing a critical training regression that dropped accuracy by 54%, and ultimately achieving F1 = 0.851 and Exact Match = 80.9% on a held-out evaluation set.",

  challenge:
    "Traditional RAG pipelines chunk documents into fixed-size windows, embed them, and run similarity search — losing document structure and adding infrastructure overhead. PageIndex proved a better approach exists but was OpenAI-only, cost $2–10 per document, took 3–15 minutes per 200-page document, and required 20+ sequential LLM calls. The goal: reproduce and improve this with open-source fine-tuned models that run locally at near-zero cost.",

  solution:
    "Built a two-model pipeline: TreeGen (Qwen2.5-7B fine-tune) converts a raw PDF into a hierarchical JSON tree, and TreeSearch (Qwen2.5-3B fine-tune) navigates that tree level-by-level — examining only 10–20 nodes at a time — to find the relevant sections. Diagnosed a silent truncation regression (52% of training examples cut off mid-example) and fixed it by reformulating the task as multi-hop navigation, producing a 3.7× accuracy improvement over the best previous version.",

  keyInsight:
    "Task formulation matters more than model size. Switching from one-shot full-tree selection to multi-hop level-by-level navigation — same 3B model, same data volume — produced a 3.7× accuracy improvement. The architecture of the task is the lever, not scale.",

  keyFeatures: [
    "Two custom fine-tuned models: TreeGen (Qwen2.5-7B) + TreeSearch (Qwen2.5-3B)",
    "Multi-hop tree navigation — 10–20 nodes per call, zero context truncation risk",
    "End-to-end data generation pipeline using Gemini 2.5 Flash Lite (~$0.15 for 1,353 examples)",
    "QLoRA fine-tuning with Unsloth: 8 minutes on A100, 59.8M trainable params (1.9% of 3.1B)",
    "Runs fully locally via Ollama — near-zero inference cost per query",
    "Generalizes across arXiv research papers and FinanceBench 10-K filings",
  ],

  useCases: [
    "Precision document Q&A over long financial filings (10-K, 10-Q)",
    "Research paper navigation — find the exact section containing an answer",
    "Any domain requiring structured document retrieval without vector infrastructure",
    "Offline / air-gapped environments where cloud LLM APIs are unavailable",
  ],

  role: "Solo Researcher & Engineer",

  impact: [
    "Achieved F1 = 0.851 and Exact Match = 80.9% on 136 held-out evaluation examples",
    "3.7× improvement over previous best version (F1 0.23 → 0.851) by redesigning task formulation",
    "Diagnosed silent training truncation bug affecting 52% of examples — root cause of a 6-version regression",
    "Generated 1,353 high-quality training examples for ~$0.15 using Gemini 2.5 Flash Lite",
    "Full fine-tune in 8 minutes on a single A100; total cost under $5",
  ],

  techStack: [
    "Python 3.13",
    "Qwen2.5-3B-Instruct",
    "Qwen2.5-7B-Instruct",
    "QLoRA (Unsloth + TRL)",
    "Gemini 2.5 Flash Lite",
    "Ollama",
    "PyPDF2",
    "HuggingFace Hub",
    "Google Colab (A100)",
  ],

  architecture: {
    heading: "Arbor Two-Model Pipeline",
    subheading: "PDF → structured tree → level-by-level navigation → answer",
    steps: [
      { title: "PDF Input", subtitle: "PyPDF2 extraction" },
      { title: "TreeGen", subtitle: "Qwen2.5-7B fine-tune" },
      { title: "JSON Tree", subtitle: "Hierarchical node structure" },
      { title: "TreeSearch", subtitle: "Qwen2.5-3B multi-hop nav" },
    ],
    metrics: [
      { label: "F1 Score", value: "0.851" },
      { label: "Exact Match", value: "80.9%" },
      { label: "Training Time", value: "8 min (A100)" },
      { label: "Cost/Query", value: "~$0 (local)" },
    ],
  },

  showcaseImage: {
    src: "/arbor-eval.png",
    alt: "Arbor TreeSearch evaluation results — F1 0.851, Exact Match 80.9%, Status: PASS",
  },

  links: [
    {
      label: "GitHub Repo",
      href: "https://github.com/Dhruv12310/arbor",
    },
    {
      label: "HuggingFace Model",
      href: "https://huggingface.co/TStark12310",
    },
  ],
};
