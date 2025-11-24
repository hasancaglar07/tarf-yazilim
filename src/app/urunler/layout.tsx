import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler | Tarf Yazılım",
  description:
    "ERP, CRM, POS ve entegrasyon platformu ile hızlı değer ve güvenli entegrasyonlar.",
};

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
