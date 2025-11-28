import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { placeHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BookOpen, MapPin, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = placeHolderImages.find((img) => img.id === 'hero');

  const features = [
    {
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      title: 'AI Symptom Checker',
      description:
        'Our AI-powered tool analyzes your symptoms to provide an early risk assessment for ovarian cancer.',
      link: '/dashboard/symptom-checker',
      linkText: 'Check Symptoms',
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'Awareness Resources',
      description:
        'Access a wealth of information about ovarian cancer, including symptoms, risk factors, and prevention.',
      link: '/awareness',
      linkText: 'Learn More',
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: 'Screening Centers',
      description:
        'Easily locate ovarian cancer screening centers near you anywhere in Kenya.',
      link: '/screening-centers',
      linkText: 'Find a Center',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-primary/10 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Your Partner in Early Ovarian Cancer Detection
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    ShujaaCare provides AI-powered tools and resources to empower you with knowledge and support for early detection and awareness.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="shadow-lg">
                    <Link href="/signup">
                      Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Comprehensive Support for Your Health Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From intelligent symptom analysis to finding expert care, ShujaaCare is with you every step of the way.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              {features.map((feature) => (
                <Card key={feature.title} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center text-center">
                    {feature.icon}
                    <CardTitle className="mt-4 text-2xl font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{feature.description}</p>
                    <Button asChild variant="link" className="mt-4">
                      <Link href={feature.link}>
                        {feature.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Take Control of Your Health Today</h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Join ShujaaCare and gain access to tools and resources that can make a difference. Early detection saves lives.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button asChild size="lg" className="w-full shadow-lg">
                        <Link href="/signup">Sign Up for Free</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
