import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Kaynaklar | Tarf Yazılım",
  description:
    "Teknoloji, entegrasyon, DevOps, veri ve yapay zeka üzerine pratik içerikler.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
