"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

const icons: Record<string, string> = {
  html: "</>",
  css: "#",
  javascript: "{ }",
  typescript: "TS",
  react: "⚛",
  nextjs: "N",
  tailwind: "≈",
  sass: "S"
};

export default function TechnologiesSection() {
  const t = useTranslations();
  const locale = useLocale();

  const techs = useMemo(
    () => [
      { slug: "html" },
      { slug: "css" },
      { slug: "javascript" },
      { slug: "typescript" },
      { slug: "react" },
      { slug: "nextjs" },
      { slug: "tailwind" },
      { slug: "sass" }
    ],
    []
  );

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-30 bg-[#0B1220]" />
      <div className="absolute inset-0 -z-20 opacity-70 [background:radial-gradient(900px_circle_at_50%_20%,rgba(56,189,248,0.14),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-70 [background:radial-gradient(700px_circle_at_30%_80%,rgba(30,58,138,0.18),transparent_55%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            {t("tech.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
            {t("tech.subtitle")}
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#1E3A8A]" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techs.map((x) => (
            <div
              key={x.slug}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/40 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background:radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_70%)]" />

              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#38BDF8] text-lg font-extrabold">
                  {icons[x.slug] ?? "•"}
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
                  Core
                </span>
              </div>

              <div className="relative mt-6">
                <p className="text-lg font-semibold text-white">
                  {t(`tech.items.${x.slug}.title`)}
                </p>
                <p className="mt-2 text-sm text-white/55">
                  {t(`tech.items.${x.slug}.desc`)}
                </p>
              </div>

              <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href={`/${locale}/blog`}
            className="group inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#38BDF8]/50 hover:bg-white/[0.07]"
            prefetch
          >
            <span className="text-white/70">{t("tech.centerBottom")}</span>
            <span className="text-[#38BDF8]">{t("tech.centerTop")}</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}