// src/data/project-details/types.ts

export type KV = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ShowcaseImage = {
  src: string; // e.g. "/accountingai.png" (must be in /public)
  alt: string;
};

export type ArchitectureStep = {
  title: string;
  subtitle: string;
};

export type ArchitectureBlock = {
  heading: string;
  subheading?: string;
  steps: ArchitectureStep[];
  metrics?: KV[];
};

export type ProjectDetails = {
  id: string;

  overview: string;
  challenge: string;
  solution: string;

  keyInsight?: string;

  keyFeatures?: string[];
  useCases?: string[];

  role?: string;
  impact?: string[];

  techStack?: string[];
  links?: ProjectLink[];

  // NEW (optional)
  showcaseImage?: ShowcaseImage;
  architecture?: ArchitectureBlock;
  performanceByFeature?: KV[];
};
