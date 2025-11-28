"use server";

import { initializeFirebase } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { getAuth } from "firebase/auth";

type FormState = {
  success: boolean;
  message?: string;
} | null;

export async function bookAppointment(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const { firestore, auth } = initializeFirebase();
  const user = auth.currentUser;
  
  if (!user) {
    return { success: false, message: "You must be logged in to book an appointment." };
  }

  const doctorId = formData.get("doctorId") as string;
  const appointmentDate = formData.get("appointmentDate") as string;
  const notes = formData.get("notes") as string;

  if (!doctorId || !appointmentDate) {
    return { success: false, message: "Please select a doctor and an appointment date." };
  }
  
  try {
    const appointmentData = {
      patientId: user.uid,
      doctorId: doctorId,
      appointmentDate: new Date(appointmentDate),
      notes: notes,
    };
    
    const appointmentsRef = collection(firestore, "patients", user.uid, "appointments");
    await addDoc(appointmentsRef, appointmentData);

    revalidatePath("/dashboard/patient");
    return { success: true, message: "Appointment booked successfully!" };
  } catch (e: any) {
    return { success: false, message: e.message || "Failed to book appointment." };
  }
}
