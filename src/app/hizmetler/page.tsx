import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, faqs } from "@/content/data";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Hizmetler"
          title="Uçtan uca hizmet, ölçülebilir sonuç"
          description="Analizden canlıya kadar şeffaf süreçler, SLA güvenceli destek ve tasarım sistemi teslimi."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              id={service.id}
              className="bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="muted">{service.title}</Badge>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {service.process.length} adım
                  </span>
                </div>
                <CardTitle>{service.summary}</CardTitle>
                <CardDescription>{service.benefits.join(" ")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Süreç
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {service.process.map((step) => (
                    <span
                      key={step}
                      className="rounded-full bg-muted px-3 py-1 text-foreground/80"
                    >
                      {step}
                    </span>
                  ))}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Teknolojiler
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="mt-2" asChild>
                  <Link href="/iletisim">Danış</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,1.1fr]">
          <Card className="bg-card/80 shadow-sm">
            <CardHeader>
              <CardTitle>SSS</CardTitle>
              <CardDescription>
                Süreç, maliyet, bakım, güvenlik ve lisans sorularınıza hızlı yanıt.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, index) => (
                  <AccordionItem key={item.question} value={`faq-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          <Card className="bg-card/80 shadow-sm">
            <CardHeader>
              <CardTitle>Danışmanlık ve keşif oturumu</CardTitle>
              <CardDescription>
                Hedeflerinizi dinleyelim, 30 dakikalık bir oturumda yol haritası çıkaralım.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>• Mevcut durum değerlendirmesi ve risk analizi.</p>
              <p>• Entegrasyon ve ürün önceliklendirmesi.</p>
              <p>• Tahmini süre ve ekip planlaması.</p>
              <Button className="mt-2" asChild>
                <Link href="/iletisim">Oturum planla</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
