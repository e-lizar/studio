"use server";

import { summarizeMedicalRecords, SummarizeMedicalRecordsOutput } from "@/ai/flows/summarize-medical-records";

type FormState = {
    success: boolean;
    data?: SummarizeMedicalRecordsOutput;
    error?: string;
} | null;


export async function summarizeSymptoms(
  prevState: FormState,
  formData: { medicalRecords: string }
): Promise<FormState> {
  const { medicalRecords } = formData;
  if (!medicalRecords || medicalRecords.trim().length < 10) {
    return { success: false, error: "Please provide a more detailed description of your symptoms." };
  }

  try {
    const result = await summarizeMedicalRecords({ medicalRecords });
    return { success: true, data: result };
  } catch (e: any) {
    console.error(e);
    return { success: false, error: e.message || "Failed to analyze symptoms due to a server error." };
  }
}
