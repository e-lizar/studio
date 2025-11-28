'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing patient medical records.
 *
 * - summarizeMedicalRecords - An asynchronous function that takes patient medical records as input and returns a summarized report.
 * - SummarizeMedicalRecordsInput - The input type for the summarizeMedicalRecords function, containing the medical records.
 * - SummarizeMedicalRecordsOutput - The output type for the summarizeMedicalRecords function, containing the summarized report.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMedicalRecordsInputSchema = z.object({
  medicalRecords: z.string().describe('The full medical records of the patient.'),
});
export type SummarizeMedicalRecordsInput = z.infer<typeof SummarizeMedicalRecordsInputSchema>;

const SummarizeMedicalRecordsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the patient medical records.'),
});
export type SummarizeMedicalRecordsOutput = z.infer<typeof SummarizeMedicalRecordsOutputSchema>;

export async function summarizeMedicalRecords(input: SummarizeMedicalRecordsInput): Promise<SummarizeMedicalRecordsOutput> {
  return summarizeMedicalRecordsFlow(input);
}

const summarizeMedicalRecordsPrompt = ai.definePrompt({
  name: 'summarizeMedicalRecordsPrompt',
  input: {schema: SummarizeMedicalRecordsInputSchema},
  output: {schema: SummarizeMedicalRecordsOutputSchema},
  prompt: `You are an AI assistant that specializes in summarizing medical records for doctors.

  Given the following medical records, create a concise and informative summary that highlights key information, diagnoses, treatments, and progress.

  Medical Records: {{{medicalRecords}}}
  `,
});

const summarizeMedicalRecordsFlow = ai.defineFlow(
  {
    name: 'summarizeMedicalRecordsFlow',
    inputSchema: SummarizeMedicalRecordsInputSchema,
    outputSchema: SummarizeMedicalRecordsOutputSchema,
  },
  async input => {
    const {output} = await summarizeMedicalRecordsPrompt(input);
    return output!;
  }
);
