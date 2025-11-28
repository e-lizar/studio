"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const patients = [
  { id: "1", name: "Jane Doe", age: 34, risk: "Medium" },
  { id: "2", name: "Maryanne Odira", age: 42, risk: "High" },
  { id: "3", name: "Susan Smith", age: 28, risk: "Low" },
];

const patientData: { [key: string]: any } = {
  "1": {
    vitals: [
      { month: "Jan", ca125: 30 }, { month: "Feb", ca125: 32 }, { month: "Mar", ca125: 28 }, { month: "Apr", ca125: 35 }, { month: "May", ca125: 40 },
    ],
    appointments: [{ date: "2024-05-15", reason: "Follow-up", notes: "Patient reports mild bloating." }],
    alerts: ["CA-125 levels show slight upward trend."]
  },
  "2": {
    vitals: [
      { month: "Jan", ca125: 80 }, { month: "Feb", ca125: 95 }, { month: "Mar", ca125: 110 }, { month: "Apr", ca125: 105 }, { month: "May", ca125: 120 },
    ],
    appointments: [{ date: "2024-05-20", reason: "Urgent Consultation", notes: "Significant increase in abdominal discomfort." }],
    alerts: ["High CA-125 levels require immediate investigation.", "Scheduled for ultrasound."]
  },
  "3": {
    vitals: [
      { month: "Jan", ca125: 15 }, { month: "Feb", ca125: 12 }, { month: "Mar", ca125: 14 }, { month: "Apr", ca125: 16 }, { month: "May", ca125: 15 },
    ],
    appointments: [{ date: "2024-04-28", reason: "Annual Checkup", notes: "No issues reported. Stable." }],
    alerts: []
  },
};

export default function DoctorDashboardPage() {
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>("2");

  const selectedPatient = patients.find(p => p.id === selectedPatientId);
  const data = selectedPatientId ? patientData[selectedPatientId] : null;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Select a Patient</CardTitle>
          <Select onValueChange={setSelectedPatientId} defaultValue={selectedPatientId || ""}>
            <SelectTrigger className="w-full md:w-[300px]">
              <SelectValue placeholder="Select a patient..." />
            </SelectTrigger>
            <SelectContent>
              {patients.map(p => (
                <SelectItem key={p.id} value={p.id}>{p.name} - Risk: {p.risk}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardHeader>
      </Card>

      {selectedPatient && data && (
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`https://picsum.photos/seed/${selectedPatient.id}/100/100`} data-ai-hint="person portrait" />
                <AvatarFallback>{selectedPatient.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-headline text-2xl">{selectedPatient.name}</CardTitle>
                <CardDescription>Age: {selectedPatient.age} &bull; Risk Level: <Badge variant={data.alerts.length > 0 ? "destructive" : "secondary"}>{selectedPatient.risk}</Badge></CardDescription>
              </div>
            </CardHeader>
            {data.alerts.length > 0 && 
                <CardContent>
                    <div className='p-4 bg-destructive/10 border border-destructive/20 rounded-lg'>
                        <h4 className='font-bold text-destructive mb-2'>Active Alerts</h4>
                        <ul className='list-disc list-inside text-destructive/90'>
                            {data.alerts.map((alert: string, i: number) => <li key={i}>{alert}</li>)}
                        </ul>
                    </div>
                </CardContent>
            }
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">CA-125 Levels Trend</CardTitle>
                <CardDescription>Tumor marker levels over the past 5 months.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{ ca125: { label: 'CA-125', color: 'hsl(var(--primary))' }}} className="h-[250px] w-full">
                  <LineChart data={data.vitals} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="ca125" stroke="var(--color-ca125)" strokeWidth={2} dot={{r:4, fill: "var(--color-ca125)"}} activeDot={{ r: 6 }} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Recent Appointments</CardTitle>
                <CardDescription>History of patient consultations.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Reason</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.appointments.map((appt: any, i: number) => (
                            <TableRow key={i}>
                                <TableCell>{appt.date}</TableCell>
                                <TableCell>{appt.reason}</TableCell>
                                <TableCell className="max-w-[200px] truncate">{appt.notes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button className='w-full mt-4'>Add New Note</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
