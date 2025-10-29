
'use server';

import { generateComplianceRecommendations, GenerateComplianceRecommendationsInput, GenerateComplianceRecommendationsOutput } from '@/ai/flows/generate-compliance-recommendations';
import { generateComplianceReports, GenerateComplianceReportsOutput } from '@/ai/flows/generate-compliance-reports';

export async function getComplianceRecommendations(input: GenerateComplianceRecommendationsInput): Promise<GenerateComplianceRecommendationsOutput> {
  try {
    const result = await generateComplianceRecommendations(input);
    return result;
  } catch (error) {
    console.error("Error generating compliance recommendations:", error);
    throw new Error("Failed to get compliance recommendations. Please try again.");
  }
}

export async function getComplianceReport(): Promise<GenerateComplianceReportsOutput> {
  try {
    const result = await generateComplianceReports();
    return result;
  } catch (error) {
    console.error("Error generating compliance report:", error);
    throw new Error("Failed to generate compliance report. Please try again.");
  }
}
