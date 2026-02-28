"use client";

import { motion } from "framer-motion";
import { container, cardLeft, cardRight } from "./animations";

export default function AboutBlocks() {
  return (
    <motion.section variants={container} initial="hidden" animate="show" className="mt-14 grid gap-6 md:grid-cols-2">
      <motion.div
        variants={cardLeft}
        className="rounded-3xl border border-white/10 bg-[#07142A]/35 p-8 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        <h3 className="text-xl font-bold text-white">Portfolio</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Hozircha portfolio’da katta real loyihalar yo‘q. Lekin yaqin orada kamida 1 ta to‘liq case study bilan loyiha qo‘shaman. Maqsad — real kompaniya darajasidagi ishlar ko‘rsatish.
        </p>
      </motion.div>

      <motion.div
        variants={cardRight}
        className="rounded-3xl border border-white/10 bg-[#07142A]/35 p-8 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        <h3 className="text-xl font-bold text-white">Maqsad</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Yaqin orada real kompaniyada junior frontend sifatida ish boshlashni reja qilganman. Kuchli team bilan ishlash, code review, real deadline va real productda tajriba orttirish — asosiy maqsadlarimdan.
        </p>
      </motion.div>
    </motion.section>
  );
}