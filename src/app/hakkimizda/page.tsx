"use client";

import { motion } from "framer-motion";

import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const values = [
  { title: "Güvenilirlik", desc: "Söz verdiğimiz teslim tarihlerine uyar, şeffaf raporlarız." },
  { title: "Şeffaflık", desc: "Süreç, risk ve kararları düzenli paylaşıyoruz." },
  { title: "Çeviklik", desc: "Kısa sprintler, hızlı geri bildirim döngüleri." },
  { title: "Sürekli Öğrenme", desc: "Ekip içi bilgi paylaşımı ve teknik borç azaltma kültürü." },
];

const milestones = [
  { year: "2019", event: "Tarf Yazılım kuruldu, ilk özel geliştirme projesi canlı." },
  { year: "2020", event: "İlk kurumsal entegrasyon platformu sürümü yayınlandı." },
  { year: "2022", event: "ERP/CRM ürünleri sektörlere özel paketlendi." },
  { year: "2023", event: "7/24 SLA destek masası ve gözlemleme katmanı eklendi." },
  { year: "2024", event: "Uluslararası proje ve yeni AI modülleri devreye alındı." },
];

const whyUs = [
  "SLA güvenceli destek ve olay sonrası kök neden analizi.",
  "Güvenlik: kimlik, loglama, şifreleme ve izleme katmanı.",
  "Ölçeklenebilir mimari: mikroservis ve bulut otomasyonu.",
  "UX disiplini: araştırma, prototip ve tasarım sistemi teslimi.",
  "Entegrasyon deneyimi: ERP/CRM/IoT ve sektör API’leri.",
];

export default function AboutPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Hakkımızda"
          title="Teknoloji ile değer üreten ekip"
          description="İş süreçlerini yazılım ile sadeleştiriyor, entegrasyon ve ürünlerimizi ölçülebilir çıktılarla teslim ediyoruz."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <Card className="bg-card/80 shadow-sm">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl">
                Misyon · Vizyon
              </CardTitle>
              <CardDescription className="text-base">
                Misyonumuz: İş süreçlerini yazılım ile sadeleştirmek.
                <br />
                Vizyonumuz: Bölgenin en güvenilir entegrasyon ortağı olmak.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Keşif, tasarım, geliştirme ve canlı destek süreçlerinde
                şeffaflığın; sürdürülebilir ürün ve entegrasyonların kalıcı
                değer oluşturacağına inanıyoruz.
              </p>
              <p>
                Kurumsal, ölçeklenebilir ve kullanımı kolay ürünler geliştirirken
                ekiplerinizle ortak hedefler koyar, riskleri erken yakalar ve
                ölçülebilir sonuçları raporlarız.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-card/70 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="space-y-2">
                  <Badge variant="muted">{value.title}</Badge>
                  <CardDescription>{value.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Neden Tarf Yazılım?"
              title="Kanıtlanmış yaklaşım"
              description="Güvenlik, ölçeklenebilirlik ve kullanıcı deneyimi odağında teslim."
            />
            <Card className="bg-card/80 shadow-sm">
              <CardContent className="space-y-3 p-6 text-muted-foreground">
                {whyUs.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <SectionHeading
              eyebrow="Zaman Çizelgesi"
              title="Önemli kilometre taşları"
            />
            <div className="relative border-l border-border/60">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative mb-6 pl-6"
                >
                  <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary" />
                  <p className="text-sm font-semibold text-foreground">
                    {item.year}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
