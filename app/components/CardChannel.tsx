"use client";

import { useTranslations } from "next-intl";
import { FaTelegramPlane, FaInstagram, FaGithub } from "react-icons/fa";

const links = {
  telegram: "https://t.me/karimov_web",
  instagram:
    "https://www.instagram.com/karimov_.dev?igsh=MTc4YnJjYXo4ZWRubA%3D%3D&utm_source=qr",
  github: "https://github.com/karimovkk"
} as const;

export default function SocialCardsSection() {
  const t = useTranslations("social");
  const items = ["telegram", "instagram", "github"] as const;

  const icons = {
    telegram: FaTelegramPlane,
    instagram: FaInstagram,
    github: FaGithub
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 -z-30 bg-[#0B1220]" />
      <div className="absolute inset-0 -z-20 opacity-70 [background:radial-gradient(800px_circle_at_50%_20%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-70 [background:radial-gradient(700px_circle_at_30%_80%,rgba(30,58,138,0.18),transparent_55%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 sm:text-base">
            {t("subtitle")}
          </p>
          <div className="mx-auto mt-5 h-[3px] w-20 sm:w-24 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#1E3A8A]" />
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map((type, i) => {
            const Icon = icons[type];
            return (
              <a
                key={type}
                href={links[type]}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 md:p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 md:hover:-translate-y-3 hover:border-[#38BDF8]/50 hover:bg-white/[0.05]"
                style={{ animationDelay: `${i * 120}ms` }}
                data-anim
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background:radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_70%)]" />

                <div className="relative flex h-full flex-col items-center text-center">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#38BDF8] transition duration-500 group-hover:scale-110 group-hover:text-white">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-white">
                    {t(`items.${type}.title`)}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/60 leading-relaxed">
                    {t(`items.${type}.desc`)}
                  </p>

                  <div className="mt-auto pt-7 sm:pt-8">
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white transition duration-300 group-hover:border-[#38BDF8]/50 group-hover:bg-white/[0.08]">
                      {t(`items.${type}.cta`)}
                      <span className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        [data-anim] {
          animation: fadeUp 600ms ease both;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}