import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { placeHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function AwarenessPage() {
  const coverImage = placeHolderImages.find(img => img.id === 'awareness-cover');

  const resources = [
    {
      value: "item-1",
      title: "Understanding Ovarian Cancer",
      content:
        "Ovarian cancer is a type of cancer that begins in the ovaries. The female reproductive system contains two ovaries, one on each side of the uterus. The ovaries — each about the size of an almond — produce eggs (ova) as well as the hormones estrogen and progesterone. Often, there are no symptoms in the early stages. Later stages are associated with symptoms, but they can be non-specific, such as loss of appetite and weight loss.",
    },
    {
      value: "item-2",
      title: "Common Symptoms to Watch For",
      content:
        "Early-stage ovarian cancer rarely causes any symptoms. Advanced-stage ovarian cancer may cause a few nonspecific symptoms that are often mistaken for more common benign conditions. Signs and symptoms of ovarian cancer may include: Abdominal bloating or swelling, quickly feeling full when eating, weight loss, discomfort in the pelvis area, changes in bowel habits, such as constipation, and a frequent need to urinate.",
    },
    {
      value: "item-3",
      title: "Key Risk Factors",
      content:
        "Factors that can increase the risk of ovarian cancer include: older age, inherited gene mutations (like BRCA1 and BRCA2), a family history of ovarian cancer, estrogen hormone replacement therapy, and starting menstruation at an early age or starting menopause at a later age. Having one or more risk factors does not mean you will get ovarian cancer, but it's important to be aware and discuss them with your doctor.",
    },
    {
      value: "item-4",
      title: "Prevention & Early Detection Strategies",
      content:
        "There's no sure way to prevent ovarian cancer. But some things may lower your chances of getting it. These include taking birth control pills, having given birth, and breastfeeding. For high-risk individuals, procedures like having your ovaries removed can greatly reduce risk. For early detection, regular women's health exams are important. Pay attention to your body and know what is normal for you. Report any changes to your doctor without delay.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                Ovarian Cancer Awareness
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Knowledge is power. Learn about the signs, symptoms, and risk factors of ovarian cancer.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid md:grid-cols-2 gap-12 px-4 md:px-6">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4 font-headline">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {resources.map((resource) => (
                  <AccordionItem key={resource.value} value={resource.value}>
                    <AccordionTrigger className="text-lg text-left">{resource.title}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {resource.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex items-center justify-center">
                {coverImage && (
                    <Image 
                        src={coverImage.imageUrl}
                        alt={coverImage.description}
                        width={500}
                        height={400}
                        className="rounded-xl shadow-lg"
                        data-ai-hint={coverImage.imageHint}
                    />
                )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
