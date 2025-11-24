import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/content/data";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const comparisonColumns = ["ERP", "CRM", "POS"];
const comparisonFeatures = [
  { label: "Rol bazlı güvenlik", values: { erp: true, crm: true, pos: true } },
  { label: "Stok / envanter", values: { erp: true, crm: false, pos: true } },
  { label: "Satış hunisi", values: { erp: false, crm: true, pos: false } },
  { label: "Kampanya / sadakat", values: { erp: true, crm: true, pos: true } },
  { label: "Raporlama ve dashboard", values: { erp: true, crm: true, pos: true } },
  { label: "Offline kullanım", values: { erp: false, crm: false, pos: true } },
];

export default function ProductsPage() {
  if (!products.length) {
    notFound();
  }

  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Ürünler"
          title="Hazır ürünler, hızlı değer"
          description="ERP, CRM, POS ve entegrasyon platformu; sektörünüze göre yapılandırılabilir modüller."
        />

        <Tabs defaultValue={products[0].id} className="mt-8">
          <TabsList className="w-full overflow-x-auto">
            {products.map((product) => (
              <TabsTrigger key={product.id} value={product.id}>
                {product.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {products.map((product) => (
            <TabsContent key={product.id} value={product.id}>
              <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <Card className="bg-card/80 shadow-sm">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="muted">{product.title}</Badge>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {product.result}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{product.audience}</CardTitle>
                    <CardDescription>{product.highlights.join(" ")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                    <div className="flex gap-3">
                      <Button asChild>
                        <Link href={`/urunler/${product.id}`}>Detay</Link>
                      </Button>
                      <Button variant="ghost" asChild>
                        <Link href="/iletisim">Demo Talep Et</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 shadow-sm">
                  <CardHeader>
                    <CardTitle>API / Entegrasyon Platformu</CardTitle>
                    <CardDescription>
                      Hazır konektörler ve güvenlik katmanı ile tüm ürünlerinizi entegre edin.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>• Konektörler: SAP, Logo, Netsis, Mikro, HubSpot, Shopify.</p>
                    <p>• Gözlem: throttle, logging, izleme, uyarılar.</p>
                    <p>• Güvenlik: OAuth2/JWT, anahtar rotasyonu, IP allow-list.</p>
                    <Button variant="secondary" asChild>
                      <Link href="/urunler/api">API Dokümanı</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Karşılaştırma"
            title="Doğru ürünü seçin"
            description="İhtiyacınıza göre modüler ürün seçimi için özet tablo."
          />
          <div className="mt-6 overflow-hidden rounded-2xl border border-border/80">
            <div className="grid grid-cols-4 bg-muted/60 px-4 py-3 text-sm font-semibold">
              <div>Özellik</div>
              {comparisonColumns.map((col) => (
                <div key={col} className="text-center">
                  {col}
                </div>
              ))}
            </div>
            {comparisonFeatures.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-4 items-center border-t border-border/60 px-4 py-3 text-sm"
              >
                <div className="font-medium">{row.label}</div>
                <div className="text-center">{row.values.erp ? "✓" : "—"}</div>
                <div className="text-center">{row.values.crm ? "✓" : "—"}</div>
                <div className="text-center">{row.values.pos ? "✓" : "—"}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/iletisim">Fiyatlandırma konuşalım</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/destek">Destek paketleri</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
