import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/content/data";
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

type Props = { params: { productId: string } };

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.productId);
  if (!product) {
    notFound();
  }

  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Ürün"
          title={product.title}
          description={product.audience}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <Card className="bg-card/80 shadow-sm">
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge variant="muted">{product.title}</Badge>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {product.result}
                </span>
              </div>
              <CardTitle>Temel özellikler</CardTitle>
              <CardDescription>
                {product.highlights.join(" ")}
              </CardDescription>
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
                  <Link href="/iletisim">Demo Talep Et</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/destek">Destek Paketleri</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 shadow-sm">
            <CardHeader>
              <CardTitle>Dokümantasyon ve kurulum</CardTitle>
              <CardDescription>
                Sandbox, API anahtarı, ortam değişkenleri ve izleme rehberleri.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>• Sandbox ortamı ve örnek istekler.</p>
              <p>• OAuth2/JWT kimlik, anahtar rotasyonu.</p>
              <p>• Loglama, uyarı ve throttling ayarları.</p>
              <Button variant="secondary" asChild>
                <Link href="#">API Dokümanı</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
