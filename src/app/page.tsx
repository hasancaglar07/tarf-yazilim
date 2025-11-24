"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Check, Clock3, Shield, Sparkles } from "lucide-react";

import {
  blogPosts,
  caseStudies,
  heroCounters,
  processSteps,
  products,
  services,
  testimonials,
} from "@/content/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { DemoDialog } from "@/components/demo-dialog";
import { MatrixBackground } from "@/components/effects/matrix-background";

const heroBullets = [
  "Tarf Suite: ERP/CRM/POS modülleri, sektör şablonları, tek pano.",
  "API / Entegrasyon Platformu: 40+ SAP/Logo/Netsis/Shopify konektörü, gözlem ve güvenlik.",
  "Hizmet Stüdyosu: Özel Yazılım, Mobil, UI/UX, Bulut & DevOps, Veri & AI, IoT — tek SLA.",
];

const heroSignals = [
  { label: "Canlı", value: "6-10 hafta", note: "Suite + API" },
  { label: "SLA yanıt", value: "30 dk", note: "7/24 · RCA" },
  { label: "Konektör", value: "40+", note: "SAP, Logo, Netsis, Shopify, HubSpot" },
];

const focusAreas = [
  {
    title: "Ürün Paketi",
    detail: "TarfERP, TarfCRM, TarfPOS ve API / Entegrasyon Platformu modüler, hızlı kurulumlu.",
  },
  {
    title: "Uzmanlık Stüdyosu",
    detail: "Özel Yazılım, Mobil, Web Tasarım & UI/UX, Bulut & DevOps, Veri & AI, IoT & Endüstri 4.0 ile uyarlama ve büyütme.",
  },
  {
    title: "Teslimat & SLA",
    detail: "Keşif→canlı, tek pano, tek SLA; gözlem, uyarı ve release ritmi aynı akışta.",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Home() {
  const featuredCase = caseStudies[0];
  const otherCases = caseStudies.slice(1);
  const integrationProduct = products.find((p) => p.id === "api");
  const otherProducts = products.filter((p) => p.id !== integrationProduct?.id);

  return (
    <PageShell>
      <MatrixBackground textColor="#ec4899" backgroundColor="#ffffff" />
      <div className="relative z-10 space-y-20">
        <section className="container mx-auto px-6 pt-10 lg:pt-14">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Tarf Suite
                </span>
                <span className="rounded-full border border-border/80 bg-white/80 px-4 py-2 text-sm font-semibold text-foreground/80 shadow-sm backdrop-blur">
                  ERP/CRM/POS + API Platformu · 6 Hizmet Hattı · Tek SLA
                </span>
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  Dijital dönüşüm yolculuğunuzda
                  <span className="block text-primary">güvenilir yazılım ortağınız</span>
                </h1>
                <p className="max-w-3xl text-xl leading-relaxed text-foreground/80 sm:text-[22px]">
                  TarfERP/CRM/POS ve 40+ konektörlü API platformu 6-10 haftada kurulur. 6 hizmet hattı
                  tek SLA ile kurar, entegre eder, işletir.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="rounded-full px-7 text-base shadow-md shadow-primary/20">
                  <Link href="/iletisim">Teklif Al</Link>
                </Button>
                <DemoDialog size="lg" />
                <Button size="lg" variant="ghost" asChild className="rounded-full px-6 text-base">
                  <Link href="/destek">Destek Planları</Link>
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {heroBullets.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3.5 rounded-2xl border border-border/70 bg-white/75 p-4 shadow-md backdrop-blur"
                  >
                    <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-base leading-relaxed text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-3xl border border-border/70 bg-white/85 p-7 shadow-2xl backdrop-blur md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      Teslimat paneli
                    </p>
                    <p className="text-sm text-foreground/70">
                      Ürün + entegrasyon + destek aynı ritimde
                    </p>
                  </div>
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                    Canlı
                  </Badge>
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {heroSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-2xl border border-border/60 bg-background/75 p-4"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                        {signal.label}
                      </p>
                      <p className="font-display text-3xl font-semibold text-primary">{signal.value}</p>
                      <p className="text-sm text-foreground/70">{signal.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl border border-border/60 bg-background/80 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold text-foreground">Akış görünümü</p>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {["Keşif", "Geliştirme", "Canlı"].map((stage, idx) => (
                      <div key={stage} className="space-y-2">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{stage}</span>
                          <span className="font-semibold text-foreground">
                            {idx === 2 ? "Aktif" : "Tamam"}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                            style={{
                              width: idx === 0 ? "100%" : idx === 1 ? "78%" : "56%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                    <p className="text-base font-semibold text-foreground">Entegrasyon kapsaması</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                      {integrationProduct?.integrations.slice(0, 6).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-foreground/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/85 p-5">
                    <p className="text-base font-semibold text-foreground">Gözlem & destek</p>
                    <div className="mt-3 space-y-2 text-base text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <span>Güvenlik, audit ve erişim kontrolleri</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock3 className="h-5 w-5 text-primary" />
                        <span>Canlı uyarılar, RCA ve sürüm ritmi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 grid gap-4 rounded-3xl border border-border/70 bg-white/80 p-5 shadow-md backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {heroCounters.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/80 px-5 py-4 shadow-sm"
              >
                <div className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </div>
                <div className="font-display text-2xl font-semibold text-foreground">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <motion.section
          className="container mx-auto px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-3xl border border-primary/30 bg-white/80 p-8 shadow-lg backdrop-blur">
            <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">Yaklaşım</p>
                <h3 className="font-display text-3xl font-semibold leading-tight">
                  Suite + Studio, tek plan ve tek ritim
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  ERP/CRM/POS + API kurulumu ve 6 hizmet hattını tek sözleşme, tek yol haritasında
                  topluyoruz. KPI, entegrasyon sözleşmesi, design system ve devreye alma aynı dokümanda.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {focusAreas.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <section className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Hizmet Stüdyosu: 6 hat, tek ekip"
            description="6 hat (Özel Yazılım, Mobil, UI/UX, Bulut & DevOps, Veri & AI, IoT) suite’i şirketinize uyarlar."
          />
          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={cardVariants} whileHover={{ y: -10 }}>
                <Card
                  className="group h-full overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0px_16px_60px_-36px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1.5 hover:border-primary/40"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/10" />
                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
                  </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-primary/30 bg-primary/5 text-primary"
                    >
                      {service.title}
                    </Badge>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {service.process.length} adım
                    </span>
                  </div>
                  <CardTitle className="text-xl">{service.summary}</CardTitle>
                  <CardDescription className="leading-relaxed text-foreground/70">
                    {service.benefits[0]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3 text-sm text-muted-foreground">
                    {service.benefits.slice(1).map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-primary/10 p-1 text-primary">
                          <Check className="h-4 w-4" />
                        </div>
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Süreç</div>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step) => (
                      <span
                        key={step}
                        className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-semibold text-foreground/80"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Teknolojiler
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {service.tech.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" asChild>
                      <Link href={`/hizmetler#${service.id}`}>Detay</Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="/hizmetler">Tüm hizmetler</Link>
                    </Button>
                  </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          className="container mx-auto px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Ürün Paketi"
            title="Tarf Suite + API Platformu"
            description="TarfERP, TarfCRM, TarfPOS ve API / Entegrasyon Platformu: sektör şablonları, 40+ konektör, ortak gözlem ve güvenlik katmanı."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
            {integrationProduct ? (
              <Card className="relative overflow-hidden rounded-3xl border-primary/40 bg-gradient-to-br from-primary/12 via-card to-secondary/12 shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(242,116,67,0.12),transparent_40%),radial-gradient(circle_at_82%_8%,rgba(96,107,255,0.12),transparent_40%)]" />
                <div className="relative">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-primary/30 bg-background/80 text-primary">
                        Entegrasyon Platformu
                      </Badge>
                      <Badge variant="muted">{integrationProduct.title}</Badge>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {integrationProduct.result}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{integrationProduct.audience}</CardTitle>
                    <CardDescription className="leading-relaxed text-foreground/80">
                      {integrationProduct.highlights.join(" ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Kapsam
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                      {integrationProduct.integrations.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/60 bg-background/70 px-3 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <Link href={`/urunler/${integrationProduct.id}`}>Demo Talep Et</Link>
                      </Button>
                      <Button variant="ghost" asChild>
                        <Link href="/urunler">Tüm ürünler</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherProducts.map((product) => (
                <motion.div key={product.id} variants={cardVariants} whileHover={{ y: -8 }}>
                  <Card
                    className="h-full rounded-3xl border-border/70 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  >
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="muted">{product.title}</Badge>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {product.result}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{product.audience}</CardTitle>
                    <CardDescription>{product.highlights.join(" ")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Entegrasyonlar
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      {product.integrations.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-muted px-3 py-1 text-foreground/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" asChild>
                      <Link href={`/urunler/${product.id}`}>İncele</Link>
                    </Button>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Süreç ve SLA"
            title="Tek akış: keşif → kurulum → canlı"
            description="API sözleşmesi, design system, gözlem ve SLA raporları tek planda ilerler."
          />
          <motion.div
            className="mt-8 grid gap-4 rounded-3xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur md:grid-cols-4"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={cardVariants}
                className="relative flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/70 p-4 shadow-sm"
              >
                {idx < processSteps.length - 1 ? (
                  <span className="pointer-events-none absolute right-[-12px] top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent md:block" />
                ) : null}
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {idx + 1}
                  </span>
                  <Badge variant="outline" className="border-border/60 text-xs text-muted-foreground">
                    {idx === 0 ? "Keşif" : idx === processSteps.length - 1 ? "Canlı" : "Devam"}
                  </Badge>
                </div>
                <p className="text-base font-semibold text-foreground">{step.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          className="container mx-auto px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Başarı Kanıtları"
                title="ERP/CRM/POS + entegrasyonda kanıtlı etki"
                description="Gerçek hikayeler; Tarf Suite ve hizmet stüdyosunun KPI etkisi."
              />
              {featuredCase ? (
                <Card className="rounded-3xl border-primary/40 bg-white/80 shadow-sm">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                        {featuredCase.metric}
                      </span>
                      <span>
                        {featuredCase.company} · {featuredCase.sector}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{featuredCase.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-foreground/80">
                      Problem: {featuredCase.problem}
                      <br />
                      Çözüm: {featuredCase.solution}
                      <br />
                      Sonuç: {featuredCase.result}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ) : null}
              <div className="grid gap-4 md:grid-cols-2">
                {otherCases.map((item) => (
                  <motion.div key={item.company} variants={cardVariants} whileHover={{ y: -6 }}>
                    <Card className="rounded-2xl border border-border/60 bg-white/80 shadow-sm">
                    <CardHeader className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="muted">{item.sector}</Badge>
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                          {item.metric}
                        </span>
                      </div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <CardDescription>{item.result}</CardDescription>
                    </CardHeader>
                  </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading
                eyebrow="Müşteri yorumları"
                title="Ekipler ne diyor?"
                description="Operasyon, ürün ve teknoloji liderlerinden yorumlar."
              />
              <div className="grid gap-4">
                {testimonials.map((item) => (
                  <motion.div key={item.name} variants={cardVariants} whileHover={{ y: -6 }}>
                    <Card
                      className="rounded-2xl border border-border/60 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                    <CardHeader className="space-y-3">
                      <CardTitle className="text-base leading-relaxed">
                        “{item.quote}”
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {item.name} · {item.role} · {item.company}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="container mx-auto px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Blog ve Kaynaklar"
            title="ERP/CRM/POS ve entegrasyon notları"
            description="Suite kurulumu, entegrasyon, DevOps ve veri üzerine kısa rehberler."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={cardVariants} whileHover={{ y: -6 }}>
                <Card
                className="rounded-2xl border border-border/60 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-muted px-3 py-1">{post.category}</span>
                    <span>{post.readingTime} okuma</span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" asChild>
                    <Link href={`/blog/${post.slug}`}>Devamını oku</Link>
                  </Button>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="container mx-auto px-6 pb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/20 p-10 shadow-lg backdrop-blur">
            <div className="grid gap-6 lg:grid-cols-[2fr,1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.22em] text-primary">
                  Projenize birlikte başlayalım
                </p>
                <h3 className="font-display text-3xl font-semibold leading-tight">
                  30 dakikada ihtiyaçlarınızı netleştirelim
                </h3>
                <p className="text-base text-muted-foreground">
                  Hedeflerinizi dinleyelim; TarfERP/CRM/POS, API Platformu ve 6 hizmet hattından oluşan planı 30 dakikada netleştirelim.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link href="/iletisim">Teklif Al</Link>
                  </Button>
                  <DemoDialog size="lg" />
                  <Button size="lg" variant="ghost" asChild>
                    <Link href="/destek">Destek paketleri</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border border-white/30 bg-white/10 p-6 text-sm text-foreground shadow-inner backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Destek Taahhüdü</span>
                  <span className="rounded-full bg-background/80 px-3 py-1 text-xs">SLA</span>
                </div>
                <div className="my-4 h-px w-full bg-white/40" role="none" />
                <ul className="space-y-3 text-muted-foreground">
                  <li>· Öncelikli destek ve canlı geçiş planı</li>
                  <li>· Güvenlik, gözlemleme ve hata yakalama katmanı</li>
                  <li>· Tasarım sistemi ve komponent kütüphanesi teslimi</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </PageShell>
  );
}
