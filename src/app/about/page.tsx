import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { placeHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Aisha Patel",
      role: "Founder & CEO",
      image: placeHolderImages.find((img) => img.id === "team-member-1"),
    },
    {
      name: "Ken Omondi",
      role: "Lead Developer",
      image: placeHolderImages.find((img) => img.id === "team-member-2"),
    },
    {
      name: "Maria Hernandez",
      role: "UX/UI Designer",
      image: placeHolderImages.find((img) => img.id === "team-member-3"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                Our Mission
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                At ShujaaCare, we are dedicated to leveraging technology to foster early detection and raise awareness about ovarian cancer. We believe that empowering individuals with knowledge and accessible tools is the key to saving lives and improving health outcomes for women across Kenya and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">The ShujaaCare Story</h2>
                <p className="mt-4 text-muted-foreground">
                  Shujaa, meaning 'hero' in Swahili, was chosen to honor the strength and courage of every woman facing a health challenge. ShujaaCare was born from a personal journey and a desire to make a tangible difference. After witnessing the devastating impact of late-stage ovarian cancer diagnosis on a loved one, our founder was moved to create a solution that was accessible, informative, and supportive.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We started as a small team of passionate developers, designers, and healthcare advocates, united by a common goal: to build an application that could bridge the information gap and provide a first line of defense through early symptom analysis. Today, ShujaaCare is a growing platform committed to community, education, and proactive health management.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/seed/about-story/550/310"
                  alt="Group of diverse people collaborating"
                  data-ai-hint="people working"
                  width={550}
                  height={310}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter font-headline">Meet the Team</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                The passionate individuals driving ShujaaCare's mission forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    {member.image && <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint} />}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
