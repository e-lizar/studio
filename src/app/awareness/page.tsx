import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, ShieldCheck, Stethoscope, Utensils } from "lucide-react";

export default function AwarenessPage() {
  const awarenessTopics = [
    {
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      title: "What Is Ovarian Cancer?",
      content: "Ovarian cancer is a disease in which malignant (cancerous) cells are found in the ovaries, the two small, almond-shaped organs on each side of the uterus that produce eggs and female hormones. It is often termed a 'silent killer' because its early symptoms are frequently vague and can be easily attributed to more common, less serious conditions. This subtlety often leads to a diagnosis in later stages, when the cancer is more difficult to treat. There are several types of ovarian cancer, classified by the type of cell from which they originate: Epithelial tumors, which begin on the outer surface of the ovaries and account for about 90% of cases; Germ cell tumors, which start from the cells that produce eggs; and Stromal tumors, which arise from the connective tissue cells that hold the ovary together and produce female hormones."
    },
    {
      icon: <ListChecks className="h-10 w-10 text-primary" />,
      title: "Symptoms & Early Detection",
      content: "Recognizing the symptoms of ovarian cancer is your first line of defense. The most common signs are often persistent and represent a change from normal. They include: persistent abdominal bloating or swelling, quickly feeling full when eating, unexplained weight loss, discomfort or pain in the pelvis area, and a frequent or urgent need to urinate. If these symptoms occur more than 12 times a month, it is crucial to consult a healthcare professional. For early detection, there is no single reliable screening test for women at average risk. However, a combination of a CA-125 blood test (which measures a protein that can be elevated in ovarian cancer) and a transvaginal ultrasound may be used for women at high risk or for diagnostic follow-up if symptoms are present. Regularly tracking your symptoms and advocating for yourself in a clinical setting are paramount."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Risk Factors & Prevention",
      content: "Several factors can increase a woman's risk of developing ovarian cancer. The most significant is inheriting a gene mutation, such as BRCA1 or BRCA2, which are also linked to breast cancer. Other factors include a personal or family history of ovarian, breast, or colorectal cancer; increasing age (it's most common in women over 50); and having never given birth or having difficulty getting pregnant. While it's not possible to prevent ovarian cancer entirely, some factors are associated with a lower risk. These include having used oral contraceptives for five or more years, having had a full-term pregnancy, and breastfeeding. For individuals at very high risk due to genetic mutations, preventive surgeries like removing the ovaries and fallopian tubes (salpingo-oophorectomy) may be an option to discuss with a doctor."
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Treatment & Nutrition",
      content: "Treatment for ovarian cancer typically depends on the type, stage, and extent of the cancer. The primary treatment is usually a combination of surgery and chemotherapy. The goal of surgery (often called debulking) is to remove as much of the tumor as possible. This is followed by chemotherapy to eliminate any remaining cancer cells. In recent years, targeted therapies have become an important part of treatment. These drugs, such as PARP inhibitors, work by targeting specific weaknesses in cancer cells and are often used as maintenance therapy to prevent recurrence. Throughout treatment, nutrition plays a vital role. A balanced, nutrient-dense diet can help manage side effects, support the immune system, and improve overall quality of life. Focus on a diet rich in fruits, vegetables, lean proteins, and whole grains. It's highly recommended to work with a registered dietitian specializing in oncology to create a personalized nutrition plan."
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
                <Card key={topic.title} className="shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {topic.icon}
                    <div className="grid gap-1">
                      <CardTitle className="font-headline">{topic.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
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
