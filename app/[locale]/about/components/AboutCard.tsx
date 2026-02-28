"use client";

import { motion } from "framer-motion";
import { container, right, up, chip } from "./animations";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "REST API"];

export default function AboutCard() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full">
      <motion.div
        variants={right}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07142A]/35 p-6 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
      >
        <div className="absolute inset-0 opacity-60 hero-radial" />
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <motion.p variants={up} className="text-xs font-semibold text-slate-300/70">
                  Hero Image Placeholder
                </motion.p>
                <motion.h2 variants={up} className="mt-2 text-lg font-bold text-white">
                  Image coming soon
                </motion.h2>
                <motion.p variants={up} className="mt-2 text-sm text-slate-400">
                  Bu joyga keyin rasm qo‘yaman. Hozircha placeholder turadi.
                </motion.p>
              </div>
              <motion.div variants={up} className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <motion.div variants={up} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-semibold text-slate-300/70">Focus</p>
                <p className="mt-1 text-sm font-bold text-white">Frontend</p>
              </motion.div>

              <motion.div variants={up} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-semibold text-slate-300/70">Learning</p>
                <p className="mt-1 text-sm font-bold text-white">PDP</p>
              </motion.div>

              <motion.div variants={up} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-semibold text-slate-300/70">Goal</p>
                <p className="mt-1 text-sm font-bold text-white">Big Tech</p>
              </motion.div>
            </div>

            <motion.div variants={up} className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300/85">
                Hozircha portfolio to‘liq emas. Yaqin orada real loyihalar qo‘shaman va kompaniyaga ishga kirish uchun tayyorgarlikni kuchaytiraman.
              </p>
            </motion.div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <motion.span
                key={s}
                variants={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200/80"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}