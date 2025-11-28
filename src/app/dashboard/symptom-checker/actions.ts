"use server";

import { aiSymptomChecker, AISymptomCheckerInput, AISymptomCheckerOutput } from "@/ai/ai-symptom-checker";

type FormState = {
    success: boolean;
    data?: AISymptomCheckerOutput;
    error?: string;
} | null;


export async function analyzeSymptoms(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const symptoms = formData.get('symptoms') as string;
  const additionalInfo = formData.get('additionalInfo') as string;

  if (!symptoms || symptoms.trim().length < 10) {
    return { success: false, error: "Please provide a more detailed description of your symptoms." };
  }

  try {
    const input: AISymptomCheckerInput = {
        symptoms,
        additionalInfo
    };
    const result = await aiSymptomChecker(input);
    return { success: true, data: result };
  } catch (e: any) {
    console.error(e);
    return { success: false, error: e.message || "Failed to analyze symptoms due to a server error." };
  }
}
