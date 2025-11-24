import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Tarf Yazılım",
  description:
    "İş süreçlerini yazılım ile sadeleştiren, entegrasyon ve ürünleri ölçülebilir çıktılarla teslim eden ekip.",
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
