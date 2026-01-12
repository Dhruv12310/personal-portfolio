// src/data/project-details/projects/accounting-ai-companion.ts

import type { ProjectDetails } from "../types";

export const accountingAICompanion: ProjectDetails = {
  id: "accounting-ai-companion",

  overview:
    "AI-powered bookkeeping platform for small businesses. QuickBooks-level double-entry rigor with simplified UX. 80% manual entry reduction, 9.4 hours saved weekly. Note: Showcasing Unavailable cause a signed NDA",

  challenge:
    "Small business owners spend 9+ hours weekly on bookkeeping. QuickBooks is powerful but overwhelming.",

  solution:
    "Built EasyOCR + GPT-4 pipeline achieving 90%+ accuracy on crumpled receipts and faded thermal paper.",

  keyInsight:
    'Stopped thinking "accounting app," started thinking "financial anxiety reduction tool."',

  keyFeatures: [
    "16-table PostgreSQL schema for double-entry bookkeeping",
    "EasyOCR + GPT-4 receipt parsing pipeline",
    "Multi-tenant architecture with Row-Level Security",
    "20+ RESTful API endpoints",
    "RBAC for team access control",
  ],

  useCases: [
    "Solo founders & freelancers who hate bookkeeping",
    "Small shop owners managing multiple locations",
    "Non-technical operators needing simple financial answers",
    "Growing teams without formal finance departments",
  ],

  role: "Tech Lead & Scrum Master (5-person team)",

  impact: [
    "Led 5-person team maintaining 18-point sprint velocity across 4 sprints",
    "Architected entire system end-to-end from DB schema to frontend",
    "Achieved 90%+ receipt extraction accuracy",
  ],

  techStack: [
    "Next.js",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "Supabase",
    "EasyOCR",
    "OpenAI API",
    "Docker",
  ],

  architecture: {
    heading: "Accounting AI Pipeline",
    subheading: "End-to-end receipt processing and financial insights",
    steps: [
      { title: "Receipt Upload", subtitle: "Image capture" },
      { title: "EasyOCR", subtitle: "Text extraction" },
      { title: "GPT-4", subtitle: "Semantic parsing" },
      { title: "PostgreSQL", subtitle: "Double-entry ledger" },
    ],
    metrics: [
      { label: "OCR Accuracy", value: "90%+" },
      { label: "Processing Time", value: "<3s" },
    ],
  },

  performanceByFeature: [
    { label: "Receipt Scanning", value: "3.6 hrs / week" },
    { label: "Auto Categorization", value: "2.7 hrs / week" },
    { label: "Journal Entries", value: "1.8 hrs / week" },
    { label: "Reporting", value: "1.3 hrs / week" },
  ],

  // You said this image already exists in /public as accountingai.png
  showcaseImage: {
    src: "/accountingai.png",
    alt: "Accounting AI Companion dashboard preview",
  },

  links: [],
};
