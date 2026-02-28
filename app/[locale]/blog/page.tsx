"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";

const posts = [
  {
    slug: "nextjs-15-performance-bottlenecks",
    category: "Architecture",
    date: "2026-03-01",
    title: "Next.js 15: Server Componentlardagi 'Waterfall' muammosi",
    desc: "Katta hajmdagi loyihalarda Fetching strategiyasini optimallashtirish va PPR (Partial Prerendering) ni amalda qo'llash.",
    minutes: 12,
    level: "Advanced",
    views: "2.4k",
    tags: ["Next.js", "Performance", "React"],
    points: ["Suspense boundary optimizatsiyasi", "Data caching layer", "Streaming SSR"]
  },
  {
    slug: "tanstack-query-v5-enterprise",
    category: "State Management",
    date: "2026-02-28",
    title: "TanStack Query bilan Cache-ni boshqarish",
    desc: "Global state o'rniga Server State-dan foydalanish: Redux-dan butunlay voz kechamiz.",
    minutes: 10,
    level: "Intermediate",
    views: "3.1k",
    tags: ["React Query", "API", "Frontend"],
    points: ["Optimistic Updates", "Infinite Queries", "Mutation callbacks"]
  },
  {
    slug: "typescript-zod-validation",
    category: "TypeScript",
    date: "2026-02-25",
    title: "Type-safe API: Zod va TypeScript integratsiyasi",
    desc: "Runtime va Compile-time validationni birlashtirish orqali xatolarni 90% ga kamaytirish.",
    minutes: 7,
    level: "Intermediate",
    views: "1.8k",
    tags: ["Zod", "TypeScript", "Backend"],
    points: ["Schema composition", "Inferred Types", "Error handling"]
  },
  {
    slug: "docker-for-frontend-devs",
    category: "DevOps",
    date: "2026-02-20",
    title: "Frontendchilar uchun Docker: Stage-by-stage build",
    desc: "Node.js appni production uchun multi-stage build qilish va hajmini 10 barobar kamaytirish.",
    minutes: 9,
    level: "Intermediate",
    views: "4.2k",
    tags: ["Docker", "Nginx", "CI/CD"],
    points: ["Distroless images", "Nginx config", "Layer caching"]
  }
];

export default function BlogPage() {
  const t = useTranslations();
  const locale = useLocale();
  const withLocale = (href: string) => `/${locale}${href}`;

  const [cat, setCat] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const catOk = cat === "all" ? true : p.category === cat;
      return catOk;
    });
  }, [cat]);

  return (
    <main className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 -z-20 bg-[#0B1220]" />
      <div className="absolute inset-0 -z-10 hero-radial opacity-70" />

      <div className="mx-auto max-w-6xl px-6">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {t("blog.title")}
            </h1>
            <p className="mt-3 max-w-2xl text-slate-400">
              {t("blog.desc")}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 md:w-[420px]">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    cat === c
                      ? "border-sky-400/30 bg-sky-500/10 text-sky-300"
                      : "border-white/10 bg-white/5 text-slate-200/70 hover:bg-white/10"
                  }`}
                >
                  {c === "all" ? t("blog.all") : c}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={withLocale(`/blog/${p.slug}`)}
              className="group rounded-3xl border border-white/10 bg-[#07142A]/35 p-7 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-sky-400/25 hover:shadow-[0_18px_60px_rgba(56,189,248,0.12)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-sky-300">
                  {p.category}
                </span>
                <span className="text-xs text-slate-400">{p.date}</span>
              </div>

              <h2 className="mt-5 text-xl font-bold text-white transition group-hover:text-sky-200">
                {p.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {p.desc.length > 120 ? `${p.desc.slice(0, 120)}...` : p.desc}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                {t("blog.read")}
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </section>

        {filtered.length === 0 && (
          <div className="mt-16 rounded-3xl border border-white/10 bg-[#07142A]/25 p-10 text-center text-slate-300/80 backdrop-blur-2xl">
            {t("blog.empty")}
          </div>
        )}

        <div className="mt-16 rounded-3xl border border-white/10 bg-[#07142A]/25 p-8 backdrop-blur-2xl">
          <p className="text-sm text-slate-300/80">
            {t("blog.note")}
          </p>
        </div>
      </div>
    </main>
  );
}