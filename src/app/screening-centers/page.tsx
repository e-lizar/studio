
"use client";

import React, { useState } from 'react';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const centers = [
    {
        id: "nwh",
        name: "Nairobi Women's Hospital",
        location: "Nairobi, Hurlingham",
        contact: "+254 709 667000",
        services: ["Screening", "Consultation", "Treatment"],
        mapImage: "https://picsum.photos/seed/nwh-map/600/400"
    },
    {
        id: "aku",
        name: "Aga Khan University Hospital",
        location: "Nairobi, Parklands",
        contact: "+254 20 3662000",
        services: ["Screening", "Advanced Diagnostics", "Oncology"],
        mapImage: "https://picsum.photos/seed/aku-map/600/400"
    },
    {
        id: "mtrh",
        name: "Moi Teaching & Referral Hospital",
        location: "Eldoret",
        contact: "+254 722 209955",
        services: ["Screening", "Referral Services", "Public Awareness"],
        mapImage: "https://picsum.photos/seed/mtrh-map/600/400"
    },
    {
        id: "cgh",
        name: "Coast General Teaching & Referral Hospital",
        location: "Mombasa",
        contact: "+254 722 208766",
        services: ["Screening", "Consultation", "Surgical Oncology"],
        mapImage: "https://picsum.photos/seed/cgh-map/600/400"
    },
    {
        id: "jootrh",
        name: "Jaramogi Oginga Odinga Teaching & Referral Hospital",
        location: "Kisumu",
        contact: "+254 57 2021089",
        services: ["Screening", "Gynecologic Oncology", "Patient Support"],
        mapImage: "https://picsum.photos/seed/jootrh-map/600/400"
    },
    {
        id: "gcrh",
        name: "Garissa County Referral Hospital",
        location: "Garissa",
        contact: "+254 724 543210",
        services: ["Screening", "Community Outreach", "Consultation"],
        mapImage: "https://picsum.photos/seed/gcrh-map/600/400"
    }
];

type Center = typeof centers[0];

export default function ScreeningCentersPage() {
  const [selectedCenter, setSelectedCenter] = useState<Center | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                Find a Screening Center
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Locate ovarian cancer screening and treatment centers across Kenya.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {centers.map((center) => (
                        <Card key={center.name} className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="font-headline">{center.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col">
                                <div className="space-y-2 flex-grow">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        <span>{center.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span>{center.contact}</span>
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-semibold mb-1">Services:</h4>
                                        <ul className="list-disc list-inside text-muted-foreground text-sm">
                                            {center.services.map(service => <li key={service}>{service}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <Dialog onOpenChange={(open) => !open && setSelectedCenter(null)}>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" className="mt-4 w-full" onClick={() => setSelectedCenter(center)}>
                                        View Details
                                    </Button>
                                  </DialogTrigger>
                                  {selectedCenter && selectedCenter.id === center.id && (
                                    <DialogContent className="sm:max-w-[625px]">
                                        <DialogHeader>
                                            <DialogTitle className='font-headline'>{selectedCenter.name}</DialogTitle>
                                            <DialogDescription>
                                                Details for {selectedCenter.name}.
                                            </DialogDescription>
                                            <div className="flex items-center gap-2 text-muted-foreground pt-2">
                                                <MapPin className="h-4 w-4" />
                                                <span>{selectedCenter.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Phone className="h-4 w-4" />
                                                <span>{selectedCenter.contact}</span>
                                            </div>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div>
                                                <h4 className="font-semibold mb-2">Services Offered</h4>
                                                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                                    {selectedCenter.services.map(service => <li key={service}>{service}</li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Location Map</h4>
                                                <div className="aspect-video w-full rounded-lg overflow-hidden border">
                                                    <Image src={selectedCenter.mapImage} alt={`Map for ${selectedCenter.name}`} width={600} height={400} className="w-full h-full object-cover" data-ai-hint="street map" />
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                  )}
                                </Dialog>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
