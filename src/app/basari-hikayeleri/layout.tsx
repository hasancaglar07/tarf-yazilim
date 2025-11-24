import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri | Tarf Yazılım",
  description:
    "Gerçek müşteri örnekleri; problem, çözüm ve ölçülebilir sonuç metrikleri.",
};

export default function BasariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
