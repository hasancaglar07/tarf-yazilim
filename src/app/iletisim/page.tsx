import { contactInfo } from "@/content/data";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="İletişim"
          title="Projeni birlikte şekillendirelim"
          description="İhtiyaçlarınızı dinleyelim, doğru çözümü birlikte kuralım. 30 dakikalık bir görüşme ile yol haritası çıkaralım."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <Card className="bg-card/80 shadow-sm">
            <CardHeader>
              <CardTitle>İletişim formu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Ad</Label>
                  <Input placeholder="Adınız" />
                </div>
                <div className="space-y-2">
                  <Label>Soyad</Label>
                  <Input placeholder="Soyadınız" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Şirket</Label>
                  <Input placeholder="Şirket adı" />
                </div>
                <div className="space-y-2">
                  <Label>Telefon</Label>
                  <Input placeholder="+90" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>E-posta</Label>
                  <Input type="email" placeholder="ornek@eposta.com" />
                </div>
                <div className="space-y-2">
                  <Label>İlgi alanı</Label>
                  <Input placeholder="Hizmet/Ürün" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Bütçe aralığı</Label>
                <Input placeholder="Örn: 100k - 250k ₺" />
              </div>
              <div className="space-y-2">
                <Label>Mesaj</Label>
                <Textarea placeholder="Hedefler, zamanlama, beklentiler" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="kvkk" />
                <Label htmlFor="kvkk" className="text-sm">
                  Formu göndererek KVKK metnini okuduğunuzu kabul edersiniz.
                </Label>
              </div>
              <Button className="w-full">Gönder</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="bg-card/80 shadow-sm">
              <CardHeader>
                <CardTitle>İletişim bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Adres: {contactInfo.address}</p>
                <p>Telefon: {contactInfo.phone}</p>
                <p>E-posta: {contactInfo.email}</p>
              </CardContent>
            </Card>
            <div className="overflow-hidden rounded-2xl border border-border/80">
              <iframe
                title="Ofis konumu"
                src={contactInfo.mapEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
