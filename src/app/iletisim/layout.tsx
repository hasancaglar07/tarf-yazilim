import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Tarf Yazılım",
  description:
    "Projeni birlikte şekillendirelim. 30 dakikalık görüşme ile yol haritası çıkaralım.",
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
