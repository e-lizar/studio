import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/componentsa/ui/card";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const centers = [
    {
        name: "Nairobi Women's Hospital",
        location: "Nairobi, Hurlingham",
        contact: "+254 709 667000",
        services: ["Screening", "Consultation", "Treatment"]
    },
    {
        name: "Aga Khan University Hospital",
        location: "Nairobi, Parklands",
        contact: "+254 20 3662000",
        services: ["Screening", "Advanced Diagnostics", "Oncology"]
    },
    {
        name: "Moi Teaching & Referral Hospital",
        location: "Eldoret",
        contact: "+254 722 209955",
        services: ["Screening", "Referral Services", "Public Awareness"]
    },
    {
        name: "Coast General Teaching & Referral Hospital",
        location: "Mombasa",
        contact: "+254 722 208766",
        services: ["Screening", "Consultation", "Surgical Oncology"]
    },
    {
        name: "Jaramogi Oginga Odinga Teaching & Referral Hospital",
        location: "Kisumu",
        contact: "+254 57 2021089",
        services: ["Screening", "Gynecologic Oncology", "Patient Support"]
    },
    {
        name: "Garissa County Referral Hospital",
        location: "Garissa",
        contact: "+254 724 543210",
        services: ["Screening", "Community Outreach", "Consultation"]
    }
];

export default function ScreeningCentersPage() {
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
                                <Button variant="outline" className="mt-4 w-full">
                                    View Details
                                </Button>
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
