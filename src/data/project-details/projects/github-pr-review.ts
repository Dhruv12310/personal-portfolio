// src/data/project-details/projects/github-pr-review.ts

import type { ProjectDetails } from "../types";

export const githubPrReview: ProjectDetails = {
  id: "github-pr-review",

  overview:
    "GitHub App that watches pull requests, summarizes code changes, and flags risky areas so reviewers focus on architecture and correctness—not boilerplate diffs.",

  challenge:
    "Manual code review is time-consuming and inconsistent. Reviewers often miss edge cases, test gaps, and risky changes—especially when PRs are large or noisy.",

  solution:
    "Built an event-driven PR review assistant: on PR open/update it fetches diffs, chunks changes, analyzes risk patterns, generates a high-signal summary, and posts actionable review notes directly on the PR.",

  keyInsight:
    "The best AI reviewer behaves like a senior engineer with a checklist—prioritizing risk, tests, and edge cases instead of rewriting code.",

  keyFeatures: [
    "Webhook-driven GitHub App workflow (open/sync/reopen)",
    "Diff + file change summarization optimized for reviewer scan speed",
    "Risk signals: auth/security changes, complex logic, API contract shifts",
    "Test awareness: detects missing/insufficient tests for touched areas",
    "Inline PR comments + top-level summary for fast triage",
    "Configurable rules so teams can match their review standards",
  ],

  useCases: [
    "Teams that want consistent review quality across engineers",
    "Startups moving fast and needing automated risk checks",
    "Open-source maintainers triaging community PRs",
    "Student teams wanting better feedback loops on PRs",
  ],

  role: "Builder / Engineer (Integrations + review logic + automation)",

  impact: [
    "Cuts manual review overhead by producing a structured PR summary and checklist",
    "Flags missing tests and edge cases before issues reach production",
    "Improves review consistency by standardizing what reviewers look for",
  ],

  techStack: ["GitHub App", "TypeScript", "Node.js", "OpenAI"],

  architecture: {
    heading: "PR Review Pipeline",
    subheading: "From PR event → analysis → actionable review comments",
    steps: [
      { title: "PR Event", subtitle: "Open / update triggers" },
      { title: "Fetch Diff", subtitle: "Files + patches" },
      { title: "Analyze", subtitle: "Risk + tests + summary" },
      { title: "Comment", subtitle: "Post notes on PR" },
    ],
    metrics: [
      { label: "Review Time", value: "Cuts manual review overhead" },
      { label: "Coverage", value: "Flags missing tests & edge cases" },
    ],
  },

  performanceByFeature: [],

  links: [
  {
    label: "Project Repo Link",
    href: "https://github.com/Dhruv12310/Github-pr-review-bot",
  },
],

};
