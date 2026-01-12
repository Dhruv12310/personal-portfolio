// src/data/project-details/projects/asu-lost-found.ts

import type { ProjectDetails } from "../types";

export const asuLostFound: ProjectDetails = {
  id: "asu-lost-found",

  overview:
    "Staff-only Lost & Found portal for ASU to log, search, and archive items with image support and streamlined intake. Built with security-first thinking and optimized for iPad + desktop workflows. Note: Showcasing Unavailable being an ASU project",

  challenge:
    "Lost & found operations are slow when intake is inconsistent and search is limited. Staff needs an iPad-friendly flow to capture details quickly, store images safely, and retrieve items fast—while following ASU SDLC + OWASP expectations.",

  solution:
    "Built an operational web app with structured item intake, fast search/filtering, a detailed item view flow, and an archive lifecycle (including pickup handling). Designed to support secure image storage patterns and future ASU SSO integration.",

  keyInsight:
    "Speed comes from standardizing intake and making the ‘view → action’ workflow one click—so staff stays in flow instead of fighting the system.",

  keyFeatures: [
    "Staff-facing item intake with structured fields + internal notes",
    "Image upload support with a clean item preview and detail view layout",
    "Fast search + filters for category/status/date and common workflows",
    "Archive lifecycle with pickup handling (move item to archived state)",
    "Auto-archiving concept for aging items (reduces dashboard clutter)",
    "Admin/staff role separation designed for controlled access",
    "Security-minded design aligned with ASU SDLC & OWASP practices",
  ],

  useCases: [
    "Front desk staff logging found items in under a minute",
    "Quick retrieval during claimant conversations using filters + search",
    "Auditable handling of pickup outcomes (claimed vs archived)",
    "Consistent item records across staff shifts and locations",
  ],

  role: "Full-Stack Developer (iPad-first UX + data model + workflows)",

  impact: [
    "Improved item lookup speed with a structured data model and workflow-driven UI",
    "Designed a staff UX optimized for iPad and desktop usage",
    "Built with security and maintainability in mind for eventual ASU production adoption",
  ],

  techStack: ["Next.js", "TypeScript", "Tailwind", "Firestore/AWS S3"],

  architecture: {
    heading: "Lost & Found Workflow",
    subheading: "From intake → searchable dashboard → lifecycle actions",
    steps: [
      { title: "Staff Intake", subtitle: "Create item + upload image" },
      { title: "Store", subtitle: "DB record + image reference" },
      { title: "Search", subtitle: "Filter + view details" },
      { title: "Archive", subtitle: "Pickup / expiry workflows" },
    ],
    metrics: [
      { label: "Lookup Time", value: "≈ 60% faster item retrieval" },
      { label: "Staff UX", value: "Optimized for iPad + desktop" },
    ],
  },

  performanceByFeature: [],

  links: [],
};
