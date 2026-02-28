"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  const withLocale = (href: string) =>
    `/${locale}${href === "/" ? "" : href}`;

  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <div className="absolute inset-0 -z-20 bg-[#0B1220]" />
      <div className="absolute inset-0 -z-10 hero-radial" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200/80 backdrop-blur-xl">
            {t("hero.badge")}
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            {t("hero.title1")}
            <br />
            <span className="text-sky-400">
              {t("hero.title2")} {t("hero.title3")}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-slate-300 md:text-lg">
            {t("hero.desc")}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href={withLocale("/blog")}
              className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              {t("hero.primary")}
            </Link>

            <Link
              href={withLocale("/about")}
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              {t("hero.secondary")}
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - ANIMATED ORBIT */}
        <div className="relative mx-auto h-[380px] w-[380px]">

          <div className="absolute inset-0 rounded-full hero-orbit-glow" />
          <div className="absolute inset-0 rounded-full border border-white/10 bg-[#07142A]/25 backdrop-blur-2xl" />

          <div className="absolute inset-10 rounded-full border border-white/10 opacity-70" />
          <div className="absolute inset-20 rounded-full border border-white/10 opacity-60" />
          <div className="absolute inset-28 rounded-full border border-white/10 opacity-50" />

          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-2xl" />

          <div className="absolute inset-0 hero-spin-slow">
            <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-300" />
            <span className="absolute right-10 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-sky-200/80" />
            <span className="absolute bottom-10 left-1/3 h-1.5 w-1.5 rounded-full bg-sky-200/70" />
          </div>

       
          <div className="absolute inset-0 hero-pulse-rings" />

        
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/12 bg-[#07142A]/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <span className="text-2xl font-bold text-sky-300">{">_"}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}