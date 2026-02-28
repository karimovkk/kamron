"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { container, left, up } from "./animations";
import AboutCard from "./AboutCard";

export default function AboutHero() {
  const locale = useLocale();

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-10 lg:grid-cols-2 lg:items-center"
    >
      <motion.div variants={left}>
        <motion.div
          variants={up}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-sky-200"
        >
          About
        </motion.div>

        <motion.h1
          variants={up}
          className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          Karimov Kamron
        </motion.h1>

        <motion.p
          variants={up}
          className="mt-5 text-sm leading-relaxed text-slate-300/85 md:text-base"
        >
          Men frontend dasturchiman. Hozirda PDP Academy’da o‘qiyman va yaqin orada
          bitiraman — oz qoldi. Dasturlashni 2 yildan ortiq vaqt davomida o‘rganib
          kelayapman va bilim olishda davom etyapman. Boshlang‘ich darajada C++ ham
          o‘qiganman, bu menga algoritmik fikrlash va mustahkam baza berishga yordam
          bergan. Hozir esa asosiy yo‘nalishim — web frontend: zamonaviy, responsive
          va toza interfeyslar yaratish. Kelajakda kuchli kompaniyada ishlash niyatim
          bor. Rostini aytsam, menga Google kompaniyasi juda yoqadi — ko‘pchilik
          dasturchilar orzu qiladigan katta maqsadlardan biri. Shu maqsadga yaqinlashish
          uchun har kuni amaliyot qilib, real loyihalar ustida ishlashni kuchaytirayapman.
        </motion.p>

        <motion.div variants={up} className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/portfolio`}
            className="rounded-2xl border border-sky-400/25 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/15"
          >
            Portfolio
          </Link>

          <a
            href="mailto:karimovkamron349@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Email
          </a>

          <a
            href="https://t.me/karimov_z2z"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Telegram
          </a>
        </motion.div>
      </motion.div>

      <AboutCard />
    </motion.section>
  );
}