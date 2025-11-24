import Link from "next/link";
import { blogPosts } from "@/content/data";
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

export default function BlogPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Blog & Kaynaklar"
          title="Teknoloji, entegrasyon, DevOps"
          description="Öğrenimlerimizi ve checklist’lerimizi paylaştığımız yazılar."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="muted">{post.category}</Badge>
                  <span>{post.readingTime}</span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Devamını oku
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
