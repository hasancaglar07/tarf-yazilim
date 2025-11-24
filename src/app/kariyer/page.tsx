import { jobs } from "@/content/data";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CareerPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Kariyer"
          title="Ekiplerimizin yanında olun"
          description="Uzaktan/hibrit çalışma, öğrenme kültürü ve etkili projeler."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card
                key={job.title}
                className="bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="muted">{job.type}</Badge>
                    <span>{job.location}</span>
                  </div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription>{job.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost">Başvur</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/80 shadow-sm">
            <CardHeader>
              <CardTitle>Genel başvuru</CardTitle>
              <CardDescription>
                Pozisyonlar arasında kendinizi görmüyor musunuz? Genel başvuru yapın.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Ad Soyad</Label>
                <Input placeholder="Adınız Soyadınız" />
              </div>
              <div className="space-y-2">
                <Label>E-posta</Label>
                <Input type="email" placeholder="ornek@eposta.com" />
              </div>
              <div className="space-y-2">
                <Label>Mesaj</Label>
                <Textarea placeholder="Deneyiminizi ve ilginizi paylaşın" />
              </div>
              <Button className="w-full">Başvuruyu Gönder</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
