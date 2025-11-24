import { sectors } from "@/content/data";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SectorsPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Sektörler"
          title="Her sektör için odaklı çözümler"
          description="Problem → çözüm → sonuç metriğiyle sektör odaklı paketler."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <Card
              key={sector.id}
              id={sector.id}
              className="bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="space-y-3">
                <CardTitle>{sector.title}</CardTitle>
                <CardDescription>
                  Problem: {sector.problem}
                  <br />
                  Çözüm: {sector.solution}
                  <br />
                  Sonuç: {sector.outcome}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild>
                  <a href={`/iletisim?sektor=${sector.id}`}>Sektörünüze uygulayalım</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
