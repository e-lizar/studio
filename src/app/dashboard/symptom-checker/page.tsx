"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { summarizeSymptoms } from "./actions";
import { AlertCircle, Bot, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SymptomCheckerPage() {
  const [state, formAction, isPending] = useActionState(summarizeSymptoms, null);
  const [medicalRecords, setMedicalRecords] = useState('');

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-lg">
        <form action={() => formAction({ medicalRecords })}>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Bot className="h-6 w-6 text-primary"/> AI Symptom Analysis</CardTitle>
            <CardDescription>
              Describe your symptoms and relevant medical history below. Our AI will provide a preliminary analysis to help you understand potential concerns. This is not a medical diagnosis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="e.g., For the past 2 weeks, I've had persistent bloating and feel full quickly. I have a family history of breast cancer..."
              rows={8}
              value={medicalRecords}
              onChange={(e) => setMedicalRecords(e.target.value)}
              required
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isPending || !medicalRecords.trim()}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analyze Symptoms
            </Button>
          </CardFooter>
        </form>
      </Card>

      {isPending && (
         <Card className="mt-6">
            <CardHeader>
                <CardTitle>Analyzing...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p>Our AI is reviewing the information you provided. Please wait a moment.</p>
                </div>
            </CardContent>
         </Card>
      )}

      {state && (
        <div className="mt-6">
          {state.success && state.data ? (
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Preliminary Analysis</CardTitle>
                <CardDescription>
                  Based on the information provided, here is a summary of key points.
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-blue max-w-none dark:prose-invert">
                <p>{state.data.summary}</p>
              </CardContent>
              <CardFooter>
                <Alert variant="default" className="bg-primary/10 border-primary/20">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle className="font-bold">Important</AlertTitle>
                  <AlertDescription>
                    This summary is for informational purposes only and is not a substitute for professional medical advice. Please consult a healthcare provider for an accurate diagnosis.
                  </AlertDescription>
                </Alert>
              </CardFooter>
            </Card>
          ) : (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {state.error || "An unexpected error occurred. Please try again."}
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}
    </div>
  );
}
