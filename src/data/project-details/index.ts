// src/data/project-details/index.ts

import type { ProjectDetails } from "./types";

import { accountingAICompanion } from "./projects/accounting-ai-companion";
import { asuInfoBot } from "./projects/asu-info-bot";
import { asuLostFound } from "./projects/asu-lost-found";
import { volatilityEstimator } from "./projects/volatility-estimator";
import { githubPrReview } from "./projects/github-pr-review";
import { smartCareerCoach } from "./projects/smart-career-coach";
import { awsReco } from "./projects/aws-reco";

export const projectDetailsById: Record<string, ProjectDetails> = {
  [accountingAICompanion.id]: accountingAICompanion,
  [asuInfoBot.id]: asuInfoBot,
  [asuLostFound.id]: asuLostFound,
  [volatilityEstimator.id]: volatilityEstimator,
  [githubPrReview.id]: githubPrReview,
  [smartCareerCoach.id]: smartCareerCoach,
  [awsReco.id]: awsReco,
};

export const projectDetailsList = Object.values(projectDetailsById);
