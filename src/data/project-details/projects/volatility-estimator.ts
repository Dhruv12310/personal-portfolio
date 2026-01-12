// src/data/project-details/projects/volatility-estimator.ts

import type { ProjectDetails } from "../types";

export const volatilityEstimator: ProjectDetails = {
  id: "volatility-estimator",

  overview:
    "Research-grade volatility analysis toolkit that treats volatility as a dynamic risk process—not a single static statistic. Computes and compares multiple industry-standard estimators, then runs macro event studies (CPI, FOMC) to measure how market risk responds across short-, medium-, and long-horizon regimes.",

  challenge:
    "Traditional volatility reporting collapses risk into one number with little context. In practice, risk is time-varying and estimator-dependent: some measures react quickly to information shocks while others are smoother and more stable. Without a structured framework, it’s hard to compare estimators, quantify event-driven risk shifts, or produce reproducible outputs for downstream research.",

  solution:
    "Built a modular, CLI-driven volatility research workflow with clean separations between data ingestion, volatility estimation, event study logic, and reporting. The system computes rolling annualized volatility for multiple estimators across 20/60/120-day windows, aligns macro event dates to trading days, and quantifies pre- vs post-event volatility changes with deterministic CSV exports and plots.",

  keyInsight:
    "Estimator choice changes the story: close-to-close captures repricing risk strongly, while OHLC estimators (range-based, drift-robust) produce smoother signals with different sensitivity profiles—especially around regime-uncertainty events like FOMC.",

  keyFeatures: [
    "Implements multiple volatility estimators: Close-to-Close (log returns), Parkinson (High–Low), Garman–Klass (OHLC), Rogers–Satchell (drift-robust OHLC)",
    "Rolling, annualized volatility across 20 / 60 / 120 trading-day windows for regime comparison",
    "Macro event study framework (CPI, FOMC) with trading-day alignment and windowed analysis",
    "Pre-event (−20d) vs post-event (+20d) comparisons with absolute and % change metrics",
    "Estimator sensitivity ranking by reaction magnitude + frequency of post-event increases",
    "Reproducible CLI workflow for repeatable experiments and parameterized runs",
    "Deterministic CSV panels + chart outputs designed for dashboards / BI / further quant research",
    "Clean, modular architecture to extend into forecasting, regime classification, or cross-asset studies",
  ],

  useCases: [
    "Risk management: quantify volatility shocks and compare risk signals across estimators",
    "Stress testing: measure pre/post event risk jumps around CPI and FOMC dates",
    "Volatility regime analysis across short-, medium-, and long-horizon windows",
    "Macro-driven portfolio risk assessment (shock vs trend separation)",
    "Research benchmarking to select estimators for forecasting or strategy pipelines",
    "Foundations for volatility forecasting, anomaly detection, and regime modeling",
  ],

  role: "Quant Research Engineer (volatility modeling + event study + reporting pipeline)",

  impact: [
    "Implemented a research framework to compare volatility estimators across multiple horizons and market regimes",
    "Built an event-study methodology that quantifies macro shock sensitivity (absolute/% change + reaction ranking)",
    "Delivered reproducible CLI runs with deterministic CSV + figure outputs for downstream analysis and dashboards",
    "Produced actionable insights: short-window volatility reacts fastest; FOMC drives stronger responses than CPI",
  ],

  techStack: ["Python", "Pandas", "Matplotlib", "CLI tooling"],

  architecture: {
    heading: "Volatility Event Study Pipeline",
    subheading: "From OHLC market data → multi-estimator volatility → macro event impact reporting",
    steps: [
      { title: "Ingest OHLC", subtitle: "Fetch + validate market data" },
      { title: "Estimate Vol", subtitle: "Rolling estimators (20/60/120d)" },
      { title: "Event Study", subtitle: "Pre/post windows around CPI/FOMC" },
      { title: "Report", subtitle: "CSV panels + plots for research" },
    ],
    metrics: [
      { label: "Estimators", value: "4 industry-standard measures" },
      { label: "Windows", value: "20 / 60 / 120 trading days" },
    ],
  },

  // Optional section for charts; leaving empty for now to match your current page.tsx behavior.
  performanceByFeature: [],

  links: [
  {
    label: "Project Repo Link",
    href: "https://github.com/Dhruv12310/volatility-lab",
  },
],
};
