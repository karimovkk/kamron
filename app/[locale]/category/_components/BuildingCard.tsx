// app/[locale]/category/_components/BuildingCard.tsx
"use client";

import { motion } from "framer-motion";

export default function BuildingCard({
  title,
  desc
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="mt-10 rounded-[28px] border border-white/10 bg-[#07142A]/25 p-8 backdrop-blur-2xl shadow-[0_18px_70px_rgba(0,0,0,0.32)]"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm text-slate-400">{desc}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Portfolio", "Blog", "Case Study"].map((x, i) => (
            <motion.span
              key={x}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 + i * 0.06 }}
              className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-200"
            >
              {x}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}