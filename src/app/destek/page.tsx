import { slaPlans } from "@/content/data";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function SupportPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Destek"
          title="SLA paketleri ve talep yönetimi"
          description="SLA güvenceli destek, olay yönetimi ve izleme ile operasyonunuzu güvene alın."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr,1.1fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {slaPlans.map((plan) => (
              <Card
                key={plan.name}
                className="bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    <Badge variant="muted">{plan.response}</Badge>
                  </div>
                  <CardDescription>Önerilen kapsam</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <p>{feat}</p>
                    </div>
                  ))}
                  <Button variant="ghost" className="mt-2">
                    Görüşelim
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/80 shadow-sm">
            <CardHeader>
              <CardTitle>Destek talebi oluştur</CardTitle>
              <CardDescription>
                Öncelik, konu ve dosya ekleme ile hızlıca talep oluşturun.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Konu</Label>
                <Input placeholder="Örn: Canlı ortam hata" />
              </div>
              <div className="space-y-2">
                <Label>E-posta</Label>
                <Input type="email" placeholder="destek@ornek.com" />
              </div>
              <div className="space-y-2">
                <Label>Öncelik</Label>
                <Input placeholder="Düşük / Orta / Yüksek" />
              </div>
              <div className="space-y-2">
                <Label>Detay</Label>
                <Textarea placeholder="Beklenen davranış, tekrarlama adımları" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="sla" />
                <Label htmlFor="sla">SLA paketim hakkında bilgi ver</Label>
              </div>
              <Button className="w-full">Talep Gönder</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
