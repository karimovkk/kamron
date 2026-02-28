"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

export default function TechCrystalField() {
  const t = useTranslations();
  const locale = useLocale();

  const items = useMemo(
    () => [
      { slug: "html", icon: "</>", pos: "top-[10%] left-[15%]", delay: "0s" },
      { slug: "css", icon: "#", pos: "top-[20%] right-[20%]", delay: "1s" },
      { slug: "javascript", icon: "{ }", pos: "bottom-[15%] left-[20%]", delay: "1.5s" },
      { slug: "typescript", icon: ":T", pos: "bottom-[25%] right-[15%]", delay: "0.5s" },
      { slug: "react", icon: "⚛", pos: "top-[45%] left-[5%]", delay: "2s" },
      { slug: "nextjs", icon: "N", pos: "top-[5%] right-[40%]", delay: "2.5s" },
      { slug: "tailwind", icon: "≈", pos: "bottom-[10%] right-[40%]", delay: "1.2s" },
      { slug: "sass", icon: "S", pos: "top-[50%] right-[5%]", delay: "1.8s" }
    ],
    []
  );

  return (
    <section className="relative min-h-[700px] w-full overflow-hidden bg-[#020617] py-20">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative mx-auto h-full max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic opacity-80">
            {t("tech.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
            {t("tech.subtitle")}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-sky-500" />
        </div>

        <div className="relative h-[550px] w-full">
          <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
            <Link
              href={`/${locale}/blog`}
              className="flex h-44 w-44 items-center justify-center rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-3xl transition hover:scale-105"
              prefetch
            >
              <div className="text-center">
                <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">
                  {t("tech.centerBottom")}
                </p>
                <p className="text-xl font-bold text-sky-400">
                  {t("tech.centerTop")}
                </p>
              </div>
            </Link>
          </div>

          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/blog`}
              className={`absolute ${item.pos} group animate-float`}
              style={{ animationDelay: item.delay }}
              prefetch
            >
              <div className="relative flex h-24 w-24 items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 [clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)] group-hover:border-sky-500/50 transition-colors" />

                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-2xl font-light text-sky-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  <span className="mt-1 text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-sky-300 uppercase transition-colors">
                    {t(`tech.items.${item.slug}.title`)}
                  </span>
                </div>

                <div className="absolute inset-0 -z-10 opacity-0 blur-xl bg-sky-500/30 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}