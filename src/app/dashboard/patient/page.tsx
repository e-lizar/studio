
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Calendar, CheckCircle, HeartPulse, Pilcrow, Plus, ThumbsDown, ThumbsUp, XCircle } from "lucide-react";
import Link from "next/link";

const healthStatus = {
    riskLevel: 'Low',
    lastCheckup: '2024-05-15',
    doctorNotes: 'Patient is stable. Continue monitoring symptoms and follow prescribed medication plan.'
};

const pastAppointments = [
  { id: 1, doctor: "Dr. Evelyn Reed", date: "2024-05-15", time: "10:30 AM", type: "Follow-up", notes: "Discussed lab results. Stable." },
  { id: 2, doctor: "Dr. Ben Carter", date: "2024-02-10", time: "02:00 PM", type: "Screening", notes: "Initial screening. No abnormalities." },
];

const medications = [
    { id: 1, name: 'Vitamin D3', dosage: '2000 IU', frequency: 'Once Daily' },
    { id: 2, name: 'Calcium', dosage: '500 mg', frequency: 'Twice Daily' },
];

const dos = [
    "Engage in light to moderate exercise 3-4 times a week.",
    "Follow a balanced diet rich in fruits, vegetables, and lean protein.",
    "Attend all scheduled follow-up appointments.",
    "Practice stress-reduction techniques like meditation or yoga."
];

const donts = [
    "Do not miss any doses of your prescribed medications.",
    "Avoid smoking and excessive alcohol consumption.",
    "Do not ignore new or worsening symptoms; report them promptly.",
    "Avoid processed foods high in sugar and unhealthy fats."
];


export default function PatientDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight font-headline">Welcome back, Jane!</h2>
          <p className="text-muted-foreground">Here's a summary of your health journey.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/dashboard/symptom-checker">
              <Plus className="mr-2 h-4 w-4" /> Check Symptoms
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/book-appointment">
              <Calendar className="mr-2 h-4 w-4" /> Book an Appointment
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1 shadow-sm">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><HeartPulse className="h-5 w-5 text-primary" /> Current Health Status</CardTitle>
                <CardDescription>An overview of your current health.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold">Risk Level</h4>
                    <p className="text-muted-foreground">{healthStatus.riskLevel}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Last Check-up</h4>
                    <p className="text-muted-foreground">{healthStatus.lastCheckup}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Doctor's Notes</h4>
                    <p className="text-muted-foreground text-sm">{healthStatus.doctorNotes}</p>
                </div>
            </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-sm">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Pilcrow className="h-5 w-5 text-primary" /> Medications</CardTitle>
                <CardDescription>Your prescribed medications.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Medication</TableHead>
                            <TableHead>Dosage</TableHead>
                            <TableHead>Frequency</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {medications.map(med => (
                            <TableRow key={med.id}>
                                <TableCell className="font-medium">{med.name}</TableCell>
                                <TableCell>{med.dosage}</TableCell>
                                <TableCell>{med.frequency}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><Calendar className="h-5 w-5" /> Past Appointments</CardTitle>
          <CardDescription>Your appointment history.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pastAppointments.map(appt => (
                <TableRow key={appt.id}>
                  <TableCell className="font-medium">{appt.doctor}</TableCell>
                  <TableCell>{appt.date}</TableCell>
                  <TableCell>{appt.type}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{appt.notes}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4"/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
            <CardTitle className="font-headline">Health Dos & Don'ts</CardTitle>
            <CardDescription>Guidelines for maintaining your well-being.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
                <h3 className="font-semibold flex items-center gap-2 text-green-600 mb-2"><ThumbsUp className="h-5 w-5" /> Dos</h3>
                <ul className="space-y-2">
                    {dos.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-1 shrink-0" /> 
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold flex items-center gap-2 text-destructive mb-2"><ThumbsDown className="h-5 w-5" /> Don'ts</h3>
                 <ul className="space-y-2">
                    {donts.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </CardContent>
      </Card>

    </div>
  );
}
