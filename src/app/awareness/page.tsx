import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { placeHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function AwarenessPage() {
  const coverImage = placeHolderImages.find(img => img.id === 'awareness-cover');

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
          <div className="container grid md:grid-cols-3 gap-12 px-4 md:px-6">
            <div className="md:col-span-2 prose prose-lg max-w-none dark:prose-invert">
                <h2 className="font-headline">Understanding Ovarian Cancer</h2>
                <p>
                    Ovarian cancer is a disease that originates in the ovaries, the female reproductive glands responsible for producing eggs (ova) and the hormones estrogen and progesterone. The human body has two ovaries, one on each side of the uterus. Sometimes, cells in an ovary can grow abnormally and form tumors. These tumors can be benign (non-cancerous) or malignant (cancerous). When a tumor is malignant, it is classified as ovarian cancer.
                </p>
                <p>
                    This cancer is often called a "silent killer" because its early symptoms are frequently subtle, non-specific, and can be mistaken for other, more common conditions. This can lead to a delayed diagnosis, often at a stage when the cancer has spread beyond the ovaries, making it more difficult to treat effectively.
                </p>
                <p>
                    There are several types of ovarian cancer, categorized by the type of cell from which they originate:
                </p>
                <ul>
                    <li><strong>Epithelial tumors:</strong> These are the most common, accounting for about 85-90% of all ovarian cancers. They start from the cells that cover the outer surface of the ovary.</li>
                    <li><strong>Germ cell tumors:</strong> These develop from the cells that produce eggs. They are rare and tend to occur in younger women and teenagers.</li>
                    <li><strong>Stromal tumors:</strong> These originate in the structural tissue cells that hold the ovary together and produce hormones. They are also quite rare.</li>
                </ul>
                
                <h2 className="font-headline mt-12">Recognizing the Symptoms</h2>
                <p>
                    While early ovarian cancer may not cause obvious symptoms, as the tumor grows, it can create pressure on surrounding organs like the bladder and bowel. The key is to be aware of symptoms that are persistent and represent a change from what is normal for your body. If you experience the following symptoms almost daily for more than a few weeks, it is crucial to see a doctor, preferably a gynecologist:
                </p>
                <ul>
                    <li><strong>Abdominal Bloating or Swelling:</strong> Persistent bloating that doesn't go away, making your clothes feel tighter around your waist.</li>
                    <li><strong>Pelvic or Abdominal Pain:</strong> A constant discomfort or pain in your lower abdomen or pelvic area.</li>
                    <li><strong>Trouble Eating or Feeling Full Quickly:</strong> A noticeable loss of appetite or feeling full after eating only a small amount of food.</li>
                    <li><strong>Urinary Symptoms:</strong> Needing to urinate more frequently or feeling a sense of urgency to urinate.</li>
                </ul>
                <p>
                    Other symptoms that can also be associated with ovarian cancer include:
                </p>
                <ul>
                    <li>Fatigue or extreme tiredness</li>
                    <li>Upset stomach or heartburn</li>
                    <li>Back pain</li>
                    <li>Pain during intercourse</li>
                    <li>Constipation</li>
                    <li>Changes in your menstrual cycle, such as irregular bleeding or bleeding after menopause</li>
                    <li>Unexplained weight loss</li>
                </ul>
                <p>
                    It's important to remember that these symptoms can also be caused by many other less serious conditions. However, the persistence and combination of these symptoms are the warning signs that should prompt a medical consultation.
                </p>

                <h2 className="font-headline mt-12">Key Risk Factors</h2>
                <p>
                    While the exact cause of ovarian cancer is unknown, several factors can increase a woman's risk. Being aware of these risks is an important part of proactive health management.
                </p>
                <ul>
                    <li><strong>Age:</strong> The risk increases with age. Ovarian cancer is most common in women who have gone through menopause, with about half of all cases diagnosed in women over 60.</li>
                    <li><strong>Genetic Mutations:</strong> Inheriting specific gene mutations is the most significant risk factor. The most well-known are the BRCA1 and BRCA2 genes, which are also linked to breast cancer. Mutations in genes associated with Lynch syndrome (a hereditary colorectal cancer syndrome) also increase the risk.</li>
                    <li><strong>Family History:</strong> Having a close relative (mother, sister, daughter) with ovarian, breast, or colorectal cancer increases your risk.</li>
                    <li><strong>Personal History of Cancer:</strong> A previous diagnosis of breast, uterine, or colorectal cancer can also increase the risk.</li>
                    <li><strong>Hormone Replacement Therapy:</strong> Using estrogen-only hormone therapy after menopause for an extended period (5-10 years) has been linked to a higher risk.</li>
                    <li><strong>Endometriosis:</strong> A condition where tissue similar to the lining inside the uterus grows outside the uterus.</li>
                    <li><strong>Reproductive History:</strong> Women who have never been pregnant or had their first full-term pregnancy after age 35 may have a slightly higher risk.</li>
                </ul>

                <h2 className="font-headline mt-12">Prevention and Early Detection</h2>
                <p>
                    Although there is no guaranteed way to prevent ovarian cancer, some actions may lower the risk. These include taking oral contraceptives (birth control pills) for several years, having a full-term pregnancy, and breastfeeding. For individuals at very high risk due to genetic mutations, preventive surgery to remove the ovaries and fallopian tubes (a risk-reducing salpingo-oophorectomy) can significantly reduce the risk and is an option to discuss with a healthcare provider.
                </p>
                <p>
                    Currently, there is no single reliable screening test for ovarian cancer for women who are at average risk and have no symptoms. However, for early detection, the most effective strategy is to listen to your body. Pay close attention to any new or persistent symptoms. Keep a record of what you're feeling and for how long. Do not dismiss your concerns. When you see a doctor, be specific about your symptoms and ask directly, "Could my symptoms be related to ovarian cancer?"
                </p>
                <p>
                    Regular pelvic exams, while important for overall gynecological health, are not always effective in detecting early-stage ovarian tumors. If you are at high risk, your doctor may recommend more frequent check-ups and possibly a combination of a transvaginal ultrasound and a CA-125 blood test. While not perfect, these tools can aid in monitoring and early detection for high-risk populations.
                </p>
            </div>
            <div className="flex flex-col items-center space-y-8">
                {coverImage && (
                    <Image 
                        src={coverImage.imageUrl}
                        alt={coverImage.description}
                        width={350}
                        height={250}
                        className="rounded-xl shadow-lg sticky top-24"
                        data-ai-hint={coverImage.imageHint}
                    />
                )}
                 <div className="p-6 rounded-lg bg-secondary sticky top-[350px]">
                    <h3 className="font-headline text-xl mb-3">Key Takeaways</h3>
                    <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                        <li>Listen to your body; persistent symptoms are a key warning sign.</li>
                        <li>Know your family history and discuss it with your doctor.</li>
                        <li>Regular check-ups are important, especially for those at high risk.</li>
                        <li>Advocate for your health and ask direct questions.</li>
                    </ul>
                </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
