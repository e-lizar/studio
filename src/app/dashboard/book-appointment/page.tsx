
"use client";

import { useActionState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { bookAppointment } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import type { Doctor } from "@/types";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function BookAppointmentPage() {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(bookAppointment, null);
  const firestore = useFirestore();

  const doctorsQuery = useMemoFirebase(() => query(collection(firestore, "doctors")), [firestore]);
  const { data: doctors, isLoading: doctorsLoading } = useCollection<Doctor>(doctorsQuery);

  const [date, setDate] = React.useState<Date>();

  useEffect(() => {
    if (state) {
      toast({
        title: state.success ? "Success" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <form action={formAction}>
          <CardHeader>
            <CardTitle className="font-headline">Book an Appointment</CardTitle>
            <CardDescription>
              Schedule a new appointment with one of our doctors.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="doctor">Doctor</Label>
              <Select name="doctorId" required>
                <SelectTrigger id="doctor">
                  <SelectValue placeholder="Select a doctor" />
                </SelectTrigger>
                <SelectContent>
                  {doctorsLoading && <SelectItem value="loading" disabled>Loading doctors...</SelectItem>}
                  {doctors && doctors.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      Dr. {doctor.firstName} {doctor.lastName} ({doctor.specialization})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="appointmentDate">Appointment Date</Label>
               <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
               <Input type="hidden" name="appointmentDate" value={date?.toISOString()}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Reason for Appointment</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Briefly describe the reason for your visit..."
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Book Appointment
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
