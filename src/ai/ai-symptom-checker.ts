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
});
export type AISymptomCheckerInput = z.infer<typeof AISymptomCheckerInputSchema>;

const AISymptomCheckerOutputSchema = z.object({
  preliminaryAnalysis: z
    .string()
    .describe(
      "A deep and detailed explanation of the user's symptoms in relation to ovarian cancer. This should be a well-explained analysis covering potential connections, commonality of symptoms, and other factors, while clearly stating this is not a diagnosis."
    ),
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
  prompt: `You are an AI assistant for ShujaaCare, specializing in providing preliminary, educational information about ovarian cancer based on user-reported symptoms. Your response must be detailed, empathetic, and cautious, heavily emphasizing that you are not a medical professional and your analysis is not a diagnosis.

  Analyze the following information provided by the user:

  Symptoms: {{{symptoms}}}

  Based on this information, provide a detailed analysis and assessment.

  1.  **Preliminary Analysis**: This is the most important section. Provide a deep, detailed, and well-explained analysis.
      -   Acknowledge the user's symptoms empathetically.
      -   Explain which of the reported symptoms are commonly associated with ovarian cancer (e.g., persistent bloating, pelvic pain, feeling full quickly).
      -   Explain why these symptoms are concerning, especially if they are persistent and a change from the norm.
      -   Also, discuss why these symptoms could be related to other, less serious conditions. This provides a balanced perspective.
      -   Your tone should be informative and supportive, not alarming. Use phrases like "It's understandable to be concerned about..." or "While symptoms like bloating can be caused by many things...".
      -   **Crucially, include a strong disclaimer that this is NOT a medical diagnosis.**

  2.  **Risk Assessment**: Based on the analysis, categorize the potential risk level. Use "Low," "Medium," or "High."

  3.  **Next Steps**: Provide clear, actionable, and personalized advice.
      -   Strongly recommend consulting a healthcare professional for a proper diagnosis, regardless of the risk level.
      -   Suggest keeping a symptom diary to track frequency and severity.
      -   Mention preparing questions for the doctor's visit.

  4.  **Confidence Level**: Indicate your confidence in the assessment (Low, Medium, High) based on the quality and specificity of the provided symptom description.

  Ensure your entire response adheres to the output schema.`,
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
