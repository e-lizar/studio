import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { placeHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Heart, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
  const founders = [
    {
      name: "Dr. Aisha Patel",
      role: "Founder & CEO",
      image: placeHolderImages.find((img) => img.id === "team-member-1"),
      bio: "A leading oncologist with a passion for public health, Dr. Patel founded ShujaaCare after seeing the need for better early detection tools."
    },
    {
      name: "Ken Omondi",
      role: "Co-Founder & CTO",
      image: placeHolderImages.find((img) => img.id === "team-member-2"),
      bio: "A software architect with expertise in AI and mobile health, Ken leads the technological development of the ShujaaCare platform."
    },
    {
      name: "Maria Hernandez",
      role: "Co-Founder & Chief Design Officer",
      image: placeHolderImages.find((img) => img.id === "team-member-3"),
      bio: "Maria's background in user experience design ensures that ShujaaCare is not only powerful but also accessible and easy to use for everyone."
    },
  ];

  const coreValues = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Empathy",
      description: "We lead with compassion, striving to understand and support the journey of every user."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We are committed to leveraging cutting-edge technology to create effective and accessible health solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "We believe in the power of a supportive network to foster resilience and share knowledge."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Awareness",
      description: "We are dedicated to educating the public and demystifying ovarian cancer to drive early detection."
    }
  ]

  const aboutImage = placeHolderImages.find((img) => img.id === "about-what-is-ovarian-cancer");

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* About ShujaaCare Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                About ShujaaCare
              </h1>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Shujaa, meaning 'hero' in Swahili, honors the courage of every woman. We are dedicated to fighting ovarian cancer through technology, awareness, and community.
              </p>
            </div>
          </div>
        </section>

        {/* What Is Ovarian Cancer Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">What Is Ovarian Cancer?</h2>
                <p className="mt-4 text-muted-foreground">
                  Ovarian cancer is a disease where malignant cells form in the ovaries. Often called a 'silent killer,' its early symptoms can be subtle and easily mistaken for other conditions, leading to late-stage diagnoses.
                </p>
                <p className="mt-4 text-muted-foreground">
                  The most common symptoms include persistent bloating, pelvic or abdominal pain, difficulty eating or feeling full quickly, and urinary urgency. When these symptoms are new and occur frequently, consulting a healthcare professional is crucial. ShujaaCare was created to help individuals recognize these early signs and seek timely medical advice.
                </p>
              </div>
              <div className="flex justify-center">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    width={550}
                    height={310}
                    className="rounded-xl shadow-lg"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission and Vision */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Mission</h2>
                <p className="text-muted-foreground md:text-lg">
                    To leverage technology to foster early detection and raise awareness about ovarian cancer, empowering individuals with knowledge and accessible tools to save lives and improve health outcomes for women everywhere.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Vision</h2>
                <p className="text-muted-foreground md:text-lg">
                    A world where no woman's life is cut short by ovarian cancer due to a late diagnosis. We envision a future where early detection is the norm, and every person has the support and information they need to manage their health proactively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Core Values</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                The principles that guide our work and define our commitment to our users.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 mt-12">
              {coreValues.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center space-y-3">
                  {value.icon}
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter font-headline">Meet the Founders</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                The passionate individuals driving ShujaaCare's mission forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {founders.map((founder) => (
                <Card key={founder.name} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Avatar className="h-24 w-24 mb-4">
                    {founder.image && <AvatarImage src={founder.image.imageUrl} alt={founder.name} data-ai-hint={founder.image.imageHint} />}
                    <AvatarFallback>{founder.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <p className="text-primary font-semibold">{founder.role}</p>
                  <p className="text-muted-foreground mt-2 text-sm">{founder.bio}</p>
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