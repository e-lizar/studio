import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, ShieldCheck, Stethoscope, Utensils } from "lucide-react";

export default function AwarenessPage() {
  const awarenessTopics = [
    {
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      title: "What Is Ovarian Cancer?",
      content: "Ovarian cancer originates in the ovaries, the female reproductive glands. Often called a 'silent killer,' its early symptoms can be subtle and mistaken for other conditions, leading to late diagnosis. It is crucial to understand the different types—Epithelial, Germ Cell, and Stromal tumors—to appreciate the complexity of the disease."
    },
    {
      icon: <ListChecks className="h-10 w-10 text-primary" />,
      title: "Symptoms & Early Detection",
      content: "Listen to your body. Persistent symptoms like abdominal bloating, pelvic pain, difficulty eating, and urinary urgency are key warning signs. While there's no single screening test for average-risk women, tracking symptoms and having open conversations with your doctor are the most effective strategies for early detection."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Risk Factors & Prevention",
      content: "A family history of ovarian or breast cancer (BRCA1/BRCA2 genes) is a major risk factor. Lifestyle choices, such as maintaining a healthy weight, and factors like oral contraceptive use can lower your risk. High-risk individuals may consider genetic counseling and preventive surgery after thorough medical consultation."
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Treatment & Nutrition",
      content: "Treatment typically involves surgery to remove the tumor and chemotherapy. Newer targeted therapies and hormone therapies are also used. Good nutrition is vital, both for prevention and to support your body during treatment. A diet rich in plants and low in processed foods can improve well-being and strength."
    }
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
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Knowledge is power. Empower yourself with in-depth information about the signs, symptoms, and risk factors of ovarian cancer.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {awarenessTopics.map((topic) => (
                <Card key={topic.title} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {topic.icon}
                    <div className="grid gap-1">
                      <CardTitle className="font-headline">{topic.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{topic.content}</p>
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
