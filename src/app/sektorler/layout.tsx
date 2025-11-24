import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sektörler | Tarf Yazılım",
  description:
    "Perakende, eğitim, sağlık, lojistik, üretim ve finans için odaklı çözümler.",
};

export default function SektorlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
