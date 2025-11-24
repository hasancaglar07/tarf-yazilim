import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariyer | Tarf Yazılım",
  description:
    "Uzaktan/hibrit çalışma, öğrenme kültürü ve etkili projeler için ekibe katılın.",
};

export default function KariyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
