import Link from "next/link";
import { navItems, contactInfo } from "@/content/data";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/50 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="container mx-auto px-6 py-14">
        <div className="rounded-3xl border border-white/30 bg-white/75 p-8 shadow-[0_28px_88px_-46px_rgba(0,0,0,0.45)] backdrop-blur-lg">
          <div className="grid gap-10 md:grid-cols-[1.6fr,1fr,1fr] lg:gap-12">
            <div className="flex flex-col gap-5">
              <Link href="/" className="group flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white shadow-[0_10px_32px_-18px_rgba(0,0,0,0.4)] ring-1 ring-border/70">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/20" />
                  <img
                    src="/tarf.png"
                    alt="Tarf Yazılım"
                    className="relative z-10 h-full w-full object-contain p-2.5"
                    style={{
                      filter:
                        "brightness(0) invert(12%) sepia(95%) saturate(7200%) hue-rotate(345deg) brightness(1.05) contrast(1.08)",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1 leading-tight">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                      Tarf Yazılım
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                      Enterprise Studio
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Dijital dönüşüm ortağınız
                  </span>
                </div>
              </Link>
              <p className="max-w-xl text-base leading-relaxed text-foreground/80">
                Ölçeklenebilir yazılım, akıllı entegrasyon ve ölçülebilir sonuçlarla projelerinizi
                hızlandırıyoruz. Keşiften canlıya, sürdürülebilir destek ile yanınızdayız.
              </p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="rounded-full border border-border/70 bg-muted/60 px-3 py-1">UX + Dev</span>
                <span className="rounded-full border border-border/70 bg-muted/60 px-3 py-1">Entegrasyon</span>
                <span className="rounded-full border border-border/70 bg-muted/60 px-3 py-1">SLA</span>
                <span className="rounded-full border border-border/70 bg-muted/60 px-3 py-1">DevOps</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Menü
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-2 py-2 text-sm font-semibold text-foreground/70 transition hover:bg-muted/60 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                İletişim
              </h4>
              <div className="space-y-2 rounded-2xl border border-border/70 bg-white/60 p-4 text-sm leading-relaxed text-foreground/80 shadow-sm">
                <p>{contactInfo.address}</p>
                <p className="pt-1">
                  Tel:{" "}
                  <a className="font-semibold text-foreground hover:text-primary" href={`tel:${contactInfo.phone}`}>
                    {contactInfo.phone}
                  </a>
                </p>
                <p>
                  E-posta:{" "}
                  <a
                    className="font-semibold text-foreground hover:text-primary"
                    href={`mailto:${contactInfo.email}`}
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <Separator className="mt-10 opacity-70" />
          <div className="mt-6 flex flex-col gap-3 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Tarf Yazılım Teknoloji</span>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="rounded-full border border-border/70 bg-white/70 px-3 py-1.5 text-sm font-semibold text-foreground/80 transition hover:border-primary/30 hover:bg-primary/10"
              >
                KVKK
              </Link>
              <Link
                href="#"
                className="rounded-full border border-border/70 bg-white/70 px-3 py-1.5 text-sm font-semibold text-foreground/80 transition hover:border-primary/30 hover:bg-primary/10"
              >
                Gizlilik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
