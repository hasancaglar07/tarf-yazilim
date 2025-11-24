import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destek | Tarf Yazılım",
  description:
    "SLA güvenceli destek, olay yönetimi ve izleme ile operasyonunuzu güvene alın.",
};

export default function DestekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
