"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "../[locale]/_components/Reveal";

const posts = [
  { slug: "tailwind-layout", category: "Tailwind", date: "2026-02-28", title: "Tailwind’da layoutni toza qilish", desc: "Grid/Flexni real misollar bilan tushuntiraman." },
  { slug: "next-intl-setup", category: "Next.js", date: "2026-02-27", title: "Next-intl ni to‘g‘ri ulash", desc: "3 tilni routing bilan chiroyli qilish usuli." },
  { slug: "typescript-tips", category: "TypeScript", date: "2026-02-25", title: "TypeScript: eng kerakli tips", desc: "Real loyihada tez-tez ishlatiladigan patternlar." }
];

export default function LatestPosts() {
  const t = useTranslations();
  const locale = useLocale();
  const withLocale = (href: string) => `/${locale}${href.startsWith("/") ? href : `/${href}`}`;

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal dir="up">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">{t("latest.title")}</h2>
              <p className="mt-3 max-w-2xl text-slate-400">{t("latest.desc")}</p>
            </div>

            <Link
              href={withLocale("/blog")}
              className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100/80 backdrop-blur-xl transition hover:bg-white/10 md:inline-flex"
            >
              {t("latest.viewAll")}
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} dir={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
              <Link
                href={withLocale(`/blog/${p.slug}`)}
                className="group block rounded-2xl border border-white/10 bg-[#07142A]/35 p-6 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_18px_60px_rgba(56,189,248,0.12)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-sky-300">
                    {p.category}
                  </span>
                  <span className="text-xs text-slate-400">{p.date}</span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white transition group-hover:text-sky-200">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {p.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                  {t("latest.read")}
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal dir="up" delay={0.12}>
          <div className="mt-10 md:hidden">
            <Link
              href={withLocale("/blog")}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100/80 backdrop-blur-xl transition hover:bg-white/10"
            >
              {t("latest.viewAll")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}