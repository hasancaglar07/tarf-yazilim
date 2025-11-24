"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, type Transition } from "framer-motion";

import { navItems } from "@/content/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const spring: Transition = { type: "spring", stiffness: 300, damping: 24 };

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const activeSegment = useMemo(
    () => navItems.find((item) => pathname === item.href)?.href,
    [pathname],
  );
  const primaryNav = navItems.slice(0, 4);
  const secondaryNav = navItems.slice(4);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex w-full min-h-[62px] flex-nowrap items-center justify-between gap-2.5 rounded-full border border-border/60 bg-white/90 px-3 py-2.5 shadow-[0_10px_34px_-26px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:min-h-[68px] sm:px-4 lg:px-6"
        >
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white/95 shadow-[0_8px_24px_-18px_rgba(0,0,0,0.32)] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#f43f5e]/22 via-transparent to-primary/18"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.04 }}
                transition={{ duration: 0.35 }}
              />
              <motion.div
                className="relative z-10 h-full w-full"
                animate={{ rotate: [-2, 2] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 8,
                  ease: "easeInOut",
                  type: "tween",
                }}
                whileHover={{ scale: 1.1, rotate: -4, transition: spring }}
              >
                <img
                  src="/tarf.png"
                  alt="Tarf Yazılım"
                  className="h-full w-full object-contain p-2"
                  style={{
                    filter:
                      "brightness(0) invert(12%) sepia(95%) saturate(7200%) hue-rotate(345deg) brightness(1.05) contrast(1.08)",
                  }}
                />
              </motion.div>
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
                Tarf Yazılım
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Enterprise Studio
              </span>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-1.5 lg:flex">
            {primaryNav.map((item) => {
              const isActive = activeSegment === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm font-semibold text-foreground/70 transition hover:text-foreground",
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary"
                      transition={spring}
                    />
                  ) : null}
                </Link>
              );
            })}
            {navItems.length > 4 ? (
              <div
                className="relative"
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button
                  className="relative rounded-full px-3 py-2 text-sm font-semibold text-foreground/70 transition hover:text-foreground"
                  onClick={() => setMoreOpen((p) => !p)}
                  type="button"
                >
                  Daha Fazlası
                  <motion.span
                    animate={{ rotate: moreOpen ? 180 : 0 }}
                    className="ml-1 inline-block text-xs"
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {moreOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-border/70 bg-white/95 p-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] backdrop-blur"
                    >
                      {secondaryNav.map((item) => {
                        const isActive = activeSegment === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block rounded-xl px-3 py-2 text-sm font-semibold transition",
                              isActive
                                ? "bg-primary/10 text-foreground"
                                : "text-foreground/75 hover:bg-muted/60",
                            )}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : null}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              size="sm"
              asChild
              className="rounded-full border border-primary/25 bg-primary text-primary-foreground shadow-none transition hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary"
            >
              <Link href="/iletisim">Teklif Al</Link>
            </Button>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 lg:hidden">
            <Button
              size="sm"
              asChild
              className="rounded-full border border-primary/25 bg-primary text-primary-foreground shadow-none transition hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary"
            >
              <Link href="/iletisim">Teklif Al</Link>
            </Button>
            <button
              onClick={() => setOpen((p) => !p)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-white/90 p-2 shadow-sm backdrop-blur"
              aria-label="Menüyü aç"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-border/70 bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-3 px-3 sm:px-4 py-4">
              {[...primaryNav, ...secondaryNav].map((item) => {
                const isActive = activeSegment === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setOpen(false);
                      setMoreOpen(false);
                    }}
                    className={cn(
                      "rounded-2xl border border-transparent px-3 py-2 text-sm font-semibold transition",
                      isActive
                        ? "border-primary/30 bg-primary/5 text-foreground"
                        : "text-foreground/80 hover:bg-muted/60",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-1 flex flex-col gap-2">
                <Button asChild className="rounded-2xl">
                  <Link href="/iletisim">Teklif Al</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
