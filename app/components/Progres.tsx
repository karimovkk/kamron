"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Purpose() {
  const t = useTranslations();
  const locale = useLocale();
  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[#0B1220]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200/80 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {t("purpose.badge")}
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              {t("purpose.title")}
            </h2>

            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
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
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 backdrop-blur-xl transition hover:bg-white/10"
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
                className="rounded-2xl border border-white/10 bg-[#07142A]/60 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-[#07142A]/80"
              >
                {t("purpose.cta3")}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07142A]/60 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <div className="text-xs font-semibold text-slate-300">
                  {t("purpose.panelTitle")}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1220]/70 p-5">
                <div className="font-mono text-xs leading-6 text-slate-200">
                  <div>
                    <span className="text-sky-300">$</span>{" "}
                    {t("purpose.term1")}
                  </div>
                  <div className="mt-1 text-slate-400">
                    {t("purpose.term1Out")}
                  </div>

                  <div className="mt-4">
                    <span className="text-sky-300">$</span>{" "}
                    {t("purpose.term2")}
                  </div>
                  <div className="mt-1 text-slate-400">
                    {t("purpose.term2Out")}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                  <div className="text-xs text-slate-300">
                    {t("purpose.k1")}
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">
                    {t("purpose.v1")}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                  <div className="text-xs text-slate-300">
                    {t("purpose.k2")}
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">
                    {t("purpose.v2")}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                  <div className="text-xs text-slate-300">
                    {t("purpose.k3")}
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">
                    {t("purpose.v3")}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-sky-500/5 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}