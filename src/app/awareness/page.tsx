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
                <h2 className="font-headline">What Is Ovarian Cancer?</h2>
                <p>
                    Ovarian cancer is a disease that originates in the ovaries, the female reproductive glands responsible for producing eggs (ova) and the hormones estrogen and progesterone. The human body has two ovaries, one on each side of the uterus. Sometimes, cells in an ovary can grow abnormally and form tumors. These tumors can be benign (non-cancerous) or malignant (cancerous). When a tumor is malignant, it is classified as ovarian cancer. This cancer is often called a "silent killer" because its early symptoms are frequently subtle, non-specific, and can be mistaken for other, more common conditions. This can lead to a delayed diagnosis, often at a stage when the cancer has spread beyond the ovaries, making it more difficult to treat effectively.
                </p>
                <p>
                    There are several types of ovarian cancer, categorized by the type of cell from which they originate:
                </p>
                <ul>
                    <li><strong>Epithelial tumors:</strong> These are the most common, accounting for about 85-90% of all ovarian cancers. They start from the cells that cover the outer surface of the ovary.</li>
                    <li><strong>Germ cell tumors:</strong> These develop from the cells that produce eggs. They are rare and tend to occur in younger women and teenagers.</li>
                    <li><strong>Stromal tumors:</strong> These originate in the structural tissue cells that hold the ovary together and produce hormones. They are also quite rare.</li>
                </ul>
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
                    Other symptoms can include fatigue, back pain, pain during intercourse, constipation, and changes in your menstrual cycle. It's important to remember that these symptoms can also be caused by many other less serious conditions. However, the persistence and combination of these symptoms are the warning signs that should prompt a medical consultation.
                </p>

                <h2 className="font-headline mt-12">Treatment Options</h2>
                <p>
                  Treatment for ovarian cancer depends on several factors, including the type and stage of the cancer, the patient's overall health, and her personal preferences. The primary treatments are surgery and chemotherapy, often used in combination.
                </p>
                <ul>
                  <li><strong>Surgery:</strong> The main goal of surgery is to stage the cancer (determine how far it has spread) and to debulk it (remove as much of the tumor as possible). For early-stage cancer, the procedure might involve removing one or both ovaries and fallopian tubes. In more advanced cases, a total hysterectomy (removal of the uterus) along with nearby lymph nodes and parts of other affected organs might be necessary.</li>
                  <li><strong>Chemotherapy:</strong> This involves using powerful drugs to kill cancer cells throughout the body. It is typically administered intravenously (IV) or, in some cases, directly into the abdominal cavity (intraperitoneal chemotherapy). Chemotherapy is often given after surgery to eliminate any remaining cancer cells and may also be used before surgery to shrink tumors.</li>
                  <li><strong>Targeted Therapy:</strong> These are newer drugs that focus on specific abnormalities within cancer cells. For example, PARP inhibitors are a class of targeted drugs that can be highly effective for women with BRCA gene mutations. They work by blocking a protein that helps repair DNA in cancer cells, causing them to die.</li>
                  <li><strong>Hormone Therapy:</strong> Some ovarian tumors use hormones to grow. Hormone therapy drugs can block these hormones or lower their levels. This treatment is more commonly used for stromal tumors.</li>
                  <li><strong>Radiation Therapy:</strong> This uses high-energy rays to kill cancer cells. It is not frequently used as a primary treatment for ovarian cancer but may be used to treat areas where the cancer has spread.</li>
                </ul>
                <p>
                  Clinical trials are also an important option, offering access to new and experimental treatments. Patients should discuss all available treatment paths with their oncology team to create a personalized plan.
                </p>

                <h2 className="font-headline mt-12">Prevention and Early Detection</h2>
                <p>
                    While there is no guaranteed way to prevent ovarian cancer, certain factors can lower your risk. Being aware of these and taking proactive steps is crucial for your health.
                </p>
                <ul>
                    <li><strong>Genetic Counseling and Testing:</strong> A strong family history of ovarian, breast, or colorectal cancer is a major risk factor. Inherited mutations in genes like BRCA1 and BRCA2 significantly increase risk. If you have a concerning family history, speak to your doctor about genetic counseling to assess your personal risk and discuss options for testing.</li>
                    <li><strong>Lifestyle Choices:</strong> Maintaining a healthy weight, regular physical activity, and a balanced diet can contribute to lowering overall cancer risk.</li>
                    <li><strong>Oral Contraceptives:</strong> Using birth control pills for five years or more has been shown to reduce the risk of developing ovarian cancer by as much as 50%.</li>
                    <li><strong>Pregnancy and Breastfeeding:</strong> Women who have had a full-term pregnancy or have breastfed may have a reduced risk.</li>
                    <li><strong>Preventive Surgery:</strong> For women at very high risk (e.g., those with a BRCA mutation), a risk-reducing salpingo-oophorectomy (removal of the ovaries and fallopian tubes) can drastically lower the risk. This is a significant decision with lifelong consequences and must be discussed thoroughly with a healthcare provider.</li>
                </ul>
                <p>
                    Currently, there is no single reliable screening test for ovarian cancer for women at average risk. The most effective strategy for early detection is to listen to your body. Pay close attention to any new or persistent symptoms, keep a detailed record, and advocate for your health by asking your doctor directly about the possibility of ovarian cancer.
                </p>

                <h2 className="font-headline mt-12">The Role of Nutrition</h2>
                <p>
                  Nutrition plays a vital role in both cancer prevention and in supporting the body during and after treatment. While no single food can prevent ovarian cancer, a healthy, balanced diet can lower your overall risk and improve your well-being.
                </p>
                <ul>
                  <li><strong>Focus on a Plant-Based Diet:</strong> A diet rich in fruits, vegetables, whole grains, and legumes provides essential vitamins, minerals, and antioxidants. Antioxidants help protect your cells from damage that can lead to cancer. Aim to fill your plate with a variety of colorful produce.</li>
                  <li><strong>Limit Processed Foods and Red Meat:</strong> Diets high in processed foods, red meats, and sugary drinks have been linked to an increased risk of several cancers. Try to choose lean proteins like fish and poultry, and whole, unprocessed foods whenever possible.</li>
                  <li><strong>Maintain a Healthy Weight:</strong> Obesity is a known risk factor for ovarian cancer. A balanced diet, combined with regular physical activity, is the best way to maintain a healthy weight.</li>
                  <li><strong>During Treatment:</strong> Good nutrition is especially important when undergoing cancer treatment. Chemotherapy and other treatments can cause side effects like nausea, loss of appetite, and fatigue. It is crucial to consume enough calories and protein to maintain strength, rebuild tissues, and support your immune system. A registered dietitian can provide personalized advice to help manage these side effects and ensure your nutritional needs are met.</li>
                  <li><strong>Hydration:</strong> Staying well-hydrated by drinking plenty of water is essential for overall health and can help manage treatment side effects like fatigue and constipation.</li>
                </ul>
                <p>
                  Always consult with your healthcare team or a registered dietitian before making significant changes to your diet, especially during cancer treatment.
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
