"use client";

import { useActionState } from "react";
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
import { analyzeSymptoms } from "./actions";
import { AlertCircle, Bot, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SymptomCheckerPage() {
  const [state, formAction, isPending] = useActionState(analyzeSymptoms, null);

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-lg">
        <form action={formAction}>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Bot className="h-6 w-6 text-primary"/> AI Symptom Analysis</CardTitle>
            <CardDescription>
              Describe your symptoms and relevant medical history below. Our AI will provide a preliminary analysis to help you understand potential concerns. This is not a medical diagnosis.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="symptoms">Symptoms</Label>
                <Textarea
                  id="symptoms"
                  name="symptoms"
                  placeholder="e.g., For the past 2 weeks, I've had persistent bloating and feel full quickly..."
                  rows={6}
                  required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="e.g., I also have a history of endometriosis."
                    rows={3}
                />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isPending}>
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
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Risk Assessment</h3>
                  <p className="text-muted-foreground">{state.data.riskAssessment}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Recommended Next Steps</h3>
                  <p className="text-muted-foreground">{state.data.nextSteps}</p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg">Confidence Level</h3>
                  <p className="text-muted-foreground">{state.data.confidenceLevel}</p>
                </div>
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
