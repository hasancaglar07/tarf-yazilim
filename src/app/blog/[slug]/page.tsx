import { notFound } from "next/navigation";
import { blogPosts } from "@/content/data";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = { params: { slug: string } };

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow={post.category}
          title={post.title}
          description={post.excerpt}
        />
        <Card className="mt-8 bg-card/80 shadow-sm">
          <CardContent className="prose prose-neutral max-w-none p-6 dark:prose-invert">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="muted">{post.category}</Badge>
              <span>{post.readingTime} okuma</span>
            </div>
            <p>
              Bu içerik, entegrasyon ve ürün geliştirme projelerinde kullanılan
              checklist ve en iyi pratiklerin özetidir. Gerçek projelerdeki
              deneyimlerimizden çıkarılmıştır.
            </p>
            <p>
              Hedef koyma, API sözleşmesi, test ortamı, gözlemleme ve güvenlik
              adımlarını içeren bir yol haritası sunar. Projenizde uygulamak
              isterseniz bizimle iletişime geçebilirsiniz.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
