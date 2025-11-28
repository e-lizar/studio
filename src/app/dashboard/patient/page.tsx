"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Calendar, FileText, Plus } from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const symptomData = [
  { date: "May 1", severity: 2 },
  { date: "May 2", severity: 3 },
  { date: "May 3", severity: 2 },
  { date: "May 4", severity: 4 },
  { date: "May 5", severity: 3 },
  { date: "May 6", severity: 5 },
  { date: "May 7", severity: 4 },
];

const appointments = [
  { id: 1, doctor: "Dr. Evelyn Reed", date: "2024-06-15", time: "10:30 AM", type: "Follow-up" },
  { id: 2, doctor: "Dr. Ben Carter", date: "2024-07-02", time: "02:00 PM", type: "Screening" },
];

const medicalRecords = [
  { id: 1, title: "Lab Results - May 2024", date: "2024-05-20" },
  { id: 2, title: "Consultation Notes - Dr. Reed", date: "2024-05-15" },
  { id: 3, title: "Initial Screening Report", date: "2024-04-10" },
];

export default function PatientDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight font-headline">Welcome back, Jane!</h2>
          <p className="text-muted-foreground">Here's a summary of your health journey.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/symptom-checker">
            <Plus className="mr-2 h-4 w-4" /> Check Symptoms
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle className="font-headline">Symptom Severity Tracker</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              severity: {
                label: 'Severity',
                color: 'hsl(var(--primary))',
              },
            }} className="h-[250px] w-full">
              <BarChart accessibilityLayer data={symptomData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis hide/>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="severity" fill="var(--color-severity)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><FileText className="h-5 w-5" /> Medical Records</CardTitle>
            <CardDescription>Your recent health documents.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {medicalRecords.map(record => (
                <li key={record.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">{record.title}</p>
                    <p className="text-muted-foreground">{record.date}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-4 w-4"/>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><Calendar className="h-5 w-5" /> Upcoming Appointments</CardTitle>
          <CardDescription>Manage your scheduled visits.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map(appt => (
                <TableRow key={appt.id}>
                  <TableCell className="font-medium">{appt.doctor}</TableCell>
                  <TableCell>{appt.date}</TableCell>
                  <TableCell>{appt.time}</TableCell>
                  <TableCell>{appt.type}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Reschedule</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
