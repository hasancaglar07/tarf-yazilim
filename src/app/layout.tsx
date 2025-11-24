import type { Metadata } from "next";
import { Manrope, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarf Yazılım Teknoloji",
  description:
    "Dijital dönüşüm yolculuğunuzda güvenilir yazılım ortağınız. Ölçeklenebilir yazılım, entegrasyon ve ölçülebilir sonuçlar.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tarfyazilim.com"),
  openGraph: {
    title: "Tarf Yazılım Teknoloji",
    description:
      "Dijital dönüşüm yolculuğunuzda güvenilir yazılım ortağınız. Ölçeklenebilir yazılım, entegrasyon ve ölçülebilir sonuçlar.",
    url: "https://www.tarfyazilim.com",
    siteName: "Tarf Yazılım",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarf Yazılım Teknoloji",
    description:
      "Dijital dönüşüm yolculuğunuzda güvenilir yazılım ortağınız. Ölçeklenebilir yazılım, entegrasyon ve ölçülebilir sonuçlar.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          bodyFont.variable,
          displayFont.variable,
          monoFont.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative min-h-screen bg-background text-foreground">
            <div className="relative z-10 flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_ANALYTICS_SRC ? (
          <Script
            src={process.env.NEXT_PUBLIC_ANALYTICS_SRC}
            data-domain={process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN}
            strategy="lazyOnload"
          />
        ) : null}
      </body>
    </html>
  );
}
