// src/data/project-details/projects/smart-career-coach.ts

import type { ProjectDetails } from "../types";

export const smartCareerCoach: ProjectDetails = {
  id: "smart-career-coach",

  overview:
    "Smart Career Coach is a production-ready, AI-assisted job search platform that streamlines resume generation and job application workflows. Users enter a target role, skills, and experience, and the system generates an ATS-friendly resume in real-time through a clean Next.js UI—backed by a Flask REST API that performs AI inference and returns structured resume sections.",

  challenge:
    "Job seekers waste hours rewriting resumes for every application, and most tools either feel generic, require too much manual formatting, or don’t work reliably across deployments. The core challenge was to deliver fast, high-quality, role-tailored resume output with a stable cloud deployment (frontend + backend separation), secure API key handling, and cross-domain connectivity without CORS headaches.",

  solution:
    "Built a split-architecture system: a Next.js + Tailwind frontend deployed on Vercel for a responsive UI, and a Flask backend deployed on Render exposing a POST /api/generate-resume endpoint. The backend uses prompt-engineered OpenAI GPT-3.5 inference to generate structured, ATS-friendly resume sections from a JSON payload (name, job title, skills, experience). Implemented secure .env key storage, CORS configuration using flask-cors for production domains, and DevOps-friendly auto-deploy pipelines.",

  keyInsight:
    "The win wasn’t “AI writes resumes.” The win was turning resume tailoring into a reliable API product: consistent structure, predictable latency, secure keys, and a deployment setup that works the same locally and in production.",

  keyFeatures: [
    "1-click AI resume generation with structured sections (Objective, Skills, Experience, Education)",
    "Prompt-engineered GPT-3.5 inference with dynamic inputs (role, skills, experience) for personalization",
    "Clean split architecture: Next.js (Vercel) frontend + Flask (Render) backend",
    "Production-grade CORS configuration to support cross-domain frontend/backend communication",
    "Responsive, modern UI built with Tailwind CSS (polished landing + generator flow)",
    "REST API design: predictable request/response contract for easy extension (JD analysis, match scoring)",
    "Secure secret handling: OpenAI key stored in .env and excluded via .gitignore",
    "Deployment reliability: auto-redeploy on commit and stable WSGI/Gunicorn pipeline on Render",
    "Tested API contract using curl + JSON payloads for reproducible validation",
  ],

  useCases: [
    "Students and new grads generating role-targeted resumes quickly",
    "Professionals tailoring resumes for each job description with minimal friction",
    "Career services / bootcamps generating standardized resumes at scale (future roadmap)",
    "Foundation for JD-to-resume match scoring and skill-gap recommendations",
    "Integration-ready workflow for application tracking and portfolio artifacts",
  ],

  role: "Full-Stack + AI/NLP Engineer (frontend UX + backend APIs + deployment + prompt engineering)",

  impact: [
    "Reduced resume tailoring time from hours to minutes using structured AI generation",
    "Delivered a production deployment with frontend/backend separation and stable cross-domain communication",
    "Created an extensible API layer suitable for future JD analysis, match scoring, and PDF export",
    "Implemented secure key management practices (.env + .gitignore) to prevent credential leakage",
    "Improved reliability by validating inputs, testing endpoints via curl, and hardening deployments",
  ],

  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Flask",
    "Python",
    "REST API",
    "OpenAI (GPT-3.5)",
    "flask-cors",
    "Vercel",
    "Render",
  ],

  architecture: {
    heading: "AI Resume Generation Flow",
    subheading:
      "User inputs → Next.js UI → Flask API → GPT-3.5 inference → structured resume output",
    steps: [
      { title: "Frontend", subtitle: "Next.js + Tailwind UI on Vercel" },
      { title: "API Call", subtitle: "POST /api/generate-resume (JSON payload)" },
      { title: "AI Inference", subtitle: "Prompt-engineered GPT-3.5 resume generation" },
      { title: "Response", subtitle: "Structured sections returned to UI" },
    ],
    metrics: [
      { label: "Deployment", value: "Vercel + Render split architecture" },
      { label: "Security", value: ".env secrets + CORS hardened" },
    ],
  },

  // optional
  performanceByFeature: [],
links: [
  {
    label: "Try it Out Repo",
    href: "https://smart-career-coach-frontend.vercel.app/",
  },
],
};
