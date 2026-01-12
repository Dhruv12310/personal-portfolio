// src/data/project-details/projects/aws-reco.ts

import type { ProjectDetails } from "../types";

export const awsReco: ProjectDetails = {
  id: "aws-reco",

  overview:
    "Cloud-native, event-driven inventory & order management system built on AWS. Orders are ingested asynchronously via SQS, processed by a stateless Lambda worker, and persisted into DynamoDB—while an EC2-hosted browser dashboard (Flask + HTML + Chart.js) visualizes live activity with filtering and near real-time updates.",

  challenge:
    "Traditional CRUD inventory apps tend to couple the UI directly to database writes, making them fragile under bursty traffic and harder to operate reliably. The system needed to accept orders quickly, remain resilient to spikes and retries, provide observability for debugging, and avoid always-on backend infrastructure costs.",

  solution:
    "Designed a serverless, decoupled pipeline where the frontend submits orders to Amazon SQS, a Lambda consumer validates and processes messages idempotently, and DynamoDB stores durable order records. CloudWatch logs provide execution visibility and failure tracing, while IAM least-privilege roles restrict access across services. The dashboard surfaces orders in near real-time and supports filtering for operational workflows.",

  keyInsight:
    "Queues change reliability: decoupling ingestion from persistence with SQS makes the system naturally burst-tolerant and operationally safer—Lambda can scale independently while DynamoDB remains the source of truth.",

  keyFeatures: [
    "Event-driven architecture: SQS decouples order intake from processing and persistence",
    "Serverless compute: Lambda handles scalable, pay-per-use processing with zero server management",
    "Real-time dashboard UX: browser-based UI with live updates and operational filtering",
    "Fault-tolerant ingestion: message retries + defensive validation for malformed inputs",
    "Idempotent Lambda processing to safely handle replays without duplicating writes",
    "Operational observability: CloudWatch logs for monitoring, debugging, and execution tracing",
    "DynamoDB persistence model storing order_id, item_id, quantity (extensible for inventory)",
    "IAM least-privilege roles to restrict access between Lambda, SQS, DynamoDB, and logging",
    "Modular deployment posture (CDK/CLI-friendly) to evolve toward S3/CloudFront hosting",
  ],

  useCases: [
    "Real-time order tracking for e-commerce fulfillment workflows",
    "Warehouse dashboard for stock movement visibility and operational monitoring",
    "Reference architecture for event-driven systems (SQS + Lambda + DynamoDB)",
    "Internal tools demonstrating fault tolerance, retries, and observability in AWS",
    "Interview-ready system design example for AWS / backend / cloud roles",
  ],

  role: "Cloud / Serverless Engineer (system design + AWS primitives + dashboard UX)",

  impact: [
    "Reduced infrastructure overhead by using serverless compute for ingestion and processing",
    "Enabled burst-tolerant order intake via queue-based decoupling and async processing",
    "Achieved near real-time visibility from order entry → persistence → dashboard display",
    "Improved reliability using validation, retries, and idempotent processing semantics",
    "Implemented least-privilege IAM access controls and CloudWatch-based observability",
  ],

  techStack: [
    "AWS Lambda",
    "Amazon SQS",
    "DynamoDB",
    "EC2",
    "CloudWatch",
    "Flask",
    "HTML",
    "Chart.js",
    "IAM",
  ],

  architecture: {
    heading: "Event-Driven Order Ingestion Pipeline",
    subheading:
      "Browser order entry → SQS queue → Lambda processor → DynamoDB storage → live dashboard",
    steps: [
      { title: "Order Entry", subtitle: "HTML/JS dashboard submits orders" },
      { title: "Queue", subtitle: "SQS buffers + decouples ingestion" },
      { title: "Process", subtitle: "Lambda validates + writes idempotently" },
      { title: "Store + View", subtitle: "DynamoDB persistence + dashboard updates" },
    ],
    metrics: [
      { label: "Latency", value: "Sub-second order visibility (target)" },
      { label: "Scalability", value: "Auto-scales with burst traffic" },
    ],
  },

  // Optional - leaving empty to match your current page.tsx behavior
  performanceByFeature: [],

  links: [],
};
