'use server';

/**
 * @fileOverview This file defines the Genkit flow for the AI Symptom Checker feature of the ShujaaCare app.
 *
 * The flow takes user-reported symptoms as input and provides an early risk assessment for potential ovarian cancer.
 * It also offers personalized advice on next steps.
 *
 * @exports aiSymptomChecker - The main function to initiate the symptom check.
 * @exports AISymptomCheckerInput - The input type for the aiSymptomChecker function.
 * @exports AISymptomCheckerOutput - The output type for the aiSymptomChecker function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISymptomCheckerInputSchema = z.object({
  symptoms: z
    .string()
    .describe("A comma-separated list of symptoms the user is experiencing."),
  additionalInfo: z
    .string()
    .optional()
    .describe(
      'Any additional information the user wants to provide about their health or concerns.'
    ),
});
export type AISymptomCheckerInput = z.infer<typeof AISymptomCheckerInputSchema>;

const AISymptomCheckerOutputSchema = z.object({
  riskAssessment: z
    .string()
    .describe(
      'An assessment of the user\'s risk of having ovarian cancer, based on the provided symptoms and information.'
    ),
  nextSteps: z
    .string()
    .describe(
      'Personalized advice on next steps the user should take, such as consulting a doctor or undergoing further testing.'
    ),
  confidenceLevel: z
    .string()
    .describe('Confidence level of the assessment (Low, Medium, High).'),
});
export type AISymptomCheckerOutput = z.infer<typeof AISymptomCheckerOutputSchema>;

export async function aiSymptomChecker(input: AISymptomCheckerInput): Promise<AISymptomCheckerOutput> {
  return aiSymptomCheckerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSymptomCheckerPrompt',
  input: {schema: AISymptomCheckerInputSchema},
  output: {schema: AISymptomCheckerOutputSchema},
  prompt: `You are an AI assistant designed to provide early risk assessments for potential ovarian cancer based on user-reported symptoms and information.

  Analyze the following information provided by the user:

  Symptoms: {{{symptoms}}}
  Additional Information: {{{additionalInfo}}}

  Based on this information, provide a risk assessment, personalized advice on next steps, and a confidence level for the assessment.
  Risk Assessment: Assess the user's risk of having ovarian cancer (Low, Medium, High).
  Next Steps: Provide personalized advice on what the user should do next (e.g., consult a doctor, undergo further testing).
  Confidence Level: Indicate the confidence level of the assessment (Low, Medium, High).

  Ensure that the risk assessment and next steps are tailored to the individual user's situation and concerns.
  Follow the output schema provided. Focus on being informative and supportive.`,
});

const aiSymptomCheckerFlow = ai.defineFlow(
  {
    name: 'aiSymptomCheckerFlow',
    inputSchema: AISymptomCheckerInputSchema,
    outputSchema: AISymptomCheckerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
