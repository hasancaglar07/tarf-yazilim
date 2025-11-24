"use client";

import { caseStudies } from "@/content/data";
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
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export default function CasesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const lower = query.toLowerCase();
    return caseStudies.filter(
      (item) =>
        item.company.toLowerCase().includes(lower) ||
        item.sector.toLowerCase().includes(lower) ||
        item.title.toLowerCase().includes(lower),
    );
  }, [query]);

  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Başarı Hikayeleri"
          title="Ölçülebilir çıktılar"
          description="Gerçek müşteri örnekleri; problem, çözüm ve sonuç metrikleri."
        />
        <div className="mt-6 max-w-sm">
          <Input
            placeholder="Sektör, müşteri veya başlık ara"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((item) => (
            <Card
              key={item.company}
              className="bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-3">
                  <Badge variant="muted">{item.sector}</Badge>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.metric}
                  </span>
                </div>
                <CardTitle>{item.company}</CardTitle>
                <CardDescription>{item.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Problem: {item.problem}</p>
                <p>Çözüm: {item.solution}</p>
                <p>Sonuç: {item.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
