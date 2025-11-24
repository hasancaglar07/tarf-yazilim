import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler | Tarf Yazılım",
  description:
    "Özel yazılım, mobil, UI/UX, Bulut & DevOps, Veri & AI, IoT hizmetleri; ölçülebilir sonuç ve SLA destek.",
};

export default function HizmetlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
