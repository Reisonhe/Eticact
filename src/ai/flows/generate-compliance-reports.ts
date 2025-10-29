'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating compliance reports based on data stored in the app.
 *
 * The flow takes no input and returns a string representing the generated compliance report.
 * The report includes the status of different compliance efforts and identifies areas needing improvement.
 *
 * @interface GenerateComplianceReportsOutput The output of the generateComplianceReports flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateComplianceReportsOutputSchema = z.string().describe('A compliance report detailing the status of various compliance efforts and identifying areas for improvement.');
export type GenerateComplianceReportsOutput = z.infer<typeof GenerateComplianceReportsOutputSchema>;

export async function generateComplianceReports(): Promise<GenerateComplianceReportsOutput> {
  return generateComplianceReportsFlow({});
}

const generateComplianceReportsPrompt = ai.definePrompt({
  name: 'generateComplianceReportsPrompt',
  output: {schema: GenerateComplianceReportsOutputSchema},
  prompt: `You are an AI compliance assistant.  You will generate a report summarizing the status of compliance efforts, identifying areas where progress has been made and areas that need improvement. Use data available to you to populate the report. Focus on accuracy and clarity. The report should be comprehensive, covering all compliance areas that are relevant. If you do not have access to any data, explain that in the report.

Here's an example:

## Compliance Report

**Status Overview:**

This report provides an overview of the current status of the organization's compliance efforts across key areas.

**Key Achievements:**

*   Successfully implemented a new data privacy policy in accordance with GDPR.
*   Conducted comprehensive employee training on ethical conduct and compliance regulations.
*   Established a whistleblowing channel to encourage reporting of potential violations.

**Areas Needing Improvement:**

*   Further enhance cybersecurity measures to protect against data breaches.
*   Improve the monitoring and auditing processes to ensure ongoing compliance.
*   Develop a more robust risk assessment framework to identify and mitigate potential risks.

**Recommendations:**

*   Prioritize cybersecurity enhancements and conduct regular vulnerability assessments.
*   Implement automated monitoring tools to streamline compliance efforts.
*   Engage external experts to review and improve the risk assessment framework.`,
});

const generateComplianceReportsFlow = ai.defineFlow(
  {
    name: 'generateComplianceReportsFlow',
    outputSchema: GenerateComplianceReportsOutputSchema,
  },
  async () => {
    const {output} = await generateComplianceReportsPrompt({});
    return output!;
  }
);
