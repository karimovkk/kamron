"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Purpose() {
  const t = useTranslations();
  const locale = useLocale();
  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[#0B1220]" />
      <div className="absolute inset-0 purpose-bg" />
      <div className="absolute inset-0 purpose-noise" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="purpose-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200/80 backdrop-blur-2xl">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            {t("purpose.badge")}
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            {t("purpose.title")}
          </h2>

          <p className="mt-6 text-slate-300/90 text-lg leading-relaxed">
            {t("purpose.desc1")}
          </p>

          <p className="mt-5 text-slate-400 leading-relaxed">
            {t("purpose.desc2")}
          </p>

          <p className="mt-5 text-slate-400 leading-relaxed">
            {t("purpose.desc3")}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={withLocale("/about")}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100/85 backdrop-blur-2xl transition hover:bg-white/10"
            >
              {t("purpose.cta1")}
            </Link>
            <Link
              href={withLocale("/blog")}
              className="rounded-2xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              {t("purpose.cta2")}
            </Link>
            <Link
              href={withLocale("/contact")}
              className="rounded-2xl border border-white/10 bg-[#07142A]/50 px-5 py-2.5 text-sm font-semibold text-slate-100/85 backdrop-blur-2xl transition hover:bg-[#07142A]/70"
            >
              {t("purpose.cta3")}
            </Link>
          </div>
        </div>

        <div className="relative purpose-reveal-delay">
          <div className="absolute -inset-10 purpose-orbit-glow" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07142A]/45 p-6 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 purpose-sheen" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <div className="text-xs font-semibold text-slate-200/70">{t("purpose.panelTitle")}</div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-[#0B1220]/55 p-5">
                <div className="font-mono text-xs leading-6 text-slate-200/80">
                  <div>
                    <span className="text-sky-300">$</span>{" "}
                    <span className="text-slate-100/90">{t("purpose.term1")}</span>
                  </div>
                  <div className="mt-1 text-slate-300/80">{t("purpose.term1Out")}</div>

                  <div className="mt-4">
                    <span className="text-sky-300">$</span>{" "}
                    <span className="text-slate-100/90">{t("purpose.term2")}</span>
                    <span className="purpose-cursor">█</span>
                  </div>
                  <div className="mt-1 text-slate-300/80">{t("purpose.term2Out")}</div>
                </div>
              </div>

              <div className="relative mt-6 h-44 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 purpose-grid" />
                <div className="absolute inset-0 purpose-dots" />

                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

                <div className="absolute inset-0 purpose-float">
                  <div className="purpose-pill" style={{ left: "10%", top: "18%" }}>
                    Next.js
                  </div>
                  <div className="purpose-pill" style={{ left: "62%", top: "14%" }}>
                    TypeScript
                  </div>
                  <div className="purpose-pill" style={{ left: "72%", top: "58%" }}>
                    Tailwind
                  </div>
                  <div className="purpose-pill" style={{ left: "18%", top: "62%" }}>
                    next-intl
                  </div>
                  <div className="purpose-pill" style={{ left: "42%", top: "40%" }}>
                    React
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs font-semibold text-slate-200/75">{t("purpose.k1")}</div>
                  <div className="mt-1 text-sm font-bold text-white">{t("purpose.v1")}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs font-semibold text-slate-200/75">{t("purpose.k2")}</div>
                  <div className="mt-1 text-sm font-bold text-white">{t("purpose.v2")}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs font-semibold text-slate-200/75">{t("purpose.k3")}</div>
                  <div className="mt-1 text-sm font-bold text-white">{t("purpose.v3")}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-6 rounded-[36px] ring-1 ring-white/5" />
        </div>
      </div>
    </section>
  );
}