'use server';
/**
 * @fileOverview An AI-powered compliance advisor tool that analyzes a company's profile and compliance requirements,
 * suggests relevant recommendations and compliance training programs, and tracks compliance efforts.
 *
 * - generateComplianceRecommendations - A function that handles the generation of compliance recommendations.
 * - GenerateComplianceRecommendationsInput - The input type for the generateComplianceRecommendations function.
 * - GenerateComplianceRecommendationsOutput - The return type for the generateComplianceRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateComplianceRecommendationsInputSchema = z.object({
  companyProfile: z
    .string()
    .describe('A description of the company, including its industry, size, and activities.'),
  complianceRequirements: z
    .string()
    .describe('A description of the compliance requirements the company faces, including relevant laws and regulations.'),
  existingComplianceEfforts: z
    .string()
    .optional()
    .describe('A description of the company\'s existing compliance efforts, if any.'),
});
export type GenerateComplianceRecommendationsInput = z.infer<typeof GenerateComplianceRecommendationsInputSchema>;

const GenerateComplianceRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of recommendations for the company to improve its compliance program.'),
  trainingPrograms:
  z
    .string()
    .describe('A list of recommended compliance training programs for the company.'),
  trackingSuggestions: z
    .string()
    .describe('Suggestions for how the company can track its compliance efforts.'),
});
export type GenerateComplianceRecommendationsOutput = z.infer<typeof GenerateComplianceRecommendationsOutputSchema>;

export async function generateComplianceRecommendations(input: GenerateComplianceRecommendationsInput): Promise<GenerateComplianceRecommendationsOutput> {
  return generateComplianceRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateComplianceRecommendationsPrompt',
  input: {schema: GenerateComplianceRecommendationsInputSchema},
  output: {schema: GenerateComplianceRecommendationsOutputSchema},
  prompt: `You are an AI-powered compliance advisor. You will analyze the company's profile and compliance requirements, suggest relevant recommendations and compliance training programs, and provide suggestions for tracking compliance efforts.

Company Profile: {{{companyProfile}}}
Compliance Requirements: {{{complianceRequirements}}}
Existing Compliance Efforts: {{{existingComplianceEfforts}}}

Recommendations:
Training Programs:
Tracking Suggestions: `,
});

const generateComplianceRecommendationsFlow = ai.defineFlow(
  {
    name: 'generateComplianceRecommendationsFlow',
    inputSchema: GenerateComplianceRecommendationsInputSchema,
    outputSchema: GenerateComplianceRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
