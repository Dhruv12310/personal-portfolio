// src/data/skills.ts

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: [
      "GPT-4 / OpenAI API",
      "Google Gemini API",
      "RAG (Retrieval-Augmented Generation)",
      "FAISS Vector Stores",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "YOLOv8",
      "RetinaFace",
      "DeepFace",
      "ClinicalBERT",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "FastAPI",
      "Flask",
      "Python",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    skills: [
      "Swift",
      "SwiftUI",
      "iOS Development",
      "MVVM Architecture",
      "CoreLocation",
      "Flutter",
    ],
  },
  {
    id: "db-cloud",
    title: "Database & Cloud",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Firestore",
      "MongoDB",
      "Redis",
      "Google Cloud Platform",
      "AWS",
      "Vercel",
    ],
  },
  {
    id: "aws-arch",
    title: "AWS & Cloud Architecture",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "S3 (static assets & files)",
      "DynamoDB",
      "RDS (PostgreSQL)",
      "EC2",
      "ECS / Fargate",
      "SQS",
      "EventBridge",
      "CloudFront",
      "VPC & Subnets",
      "IAM (roles & policies)",
      "CloudWatch",
      "AWS CDK / IaC",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Kubernetes (basics)",
      "Git & GitHub",
      "CI/CD Pipelines",
      "GitHub Actions",
      "WebSockets",
      "Logging & Monitoring",
      "Testing / Linting",
    ],
  },
  {
    id: "ui-ux",
    title: "UI / UX",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
      "Recharts / Data Viz",
      "Design Systems",
      "Accessibility",
      "Good UX Writing",
    ],
  },
  {
    id: "quant",
    title: "Quantitative Research",
    skills: [
      "Time-Series Analysis",
      "Volatility Estimators",
      "Event-Driven Studies",
      "Backtesting Pipelines",
      "Risk Metrics (VaR, CVaR)",
      "Factor Models",
      "Monte Carlo Simulation",
      "Options Greeks (Δ, Γ, vega)",
    ],
  },
  {
    id: "fin-modeling",
    title: "Financial Modeling",
    skills: [
      "Three-Statement Modeling",
      "DCF Valuation",
      "Comparable Company Analysis",
      "Scenario & Sensitivity Analysis",
      "Capital Budgeting",
      "Excel / Sheets Modeling",
      "Dashboarding & Reporting",
    ],
  },
];
