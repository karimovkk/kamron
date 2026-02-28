// app/[locale]/category/_components/NoteCard.tsx
"use client";

import { motion } from "framer-motion";

export default function NoteCard({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 rounded-[28px] border border-white/10 bg-[#07142A]/20 p-8 text-sm text-slate-300/80 backdrop-blur-2xl"
    >
      {text}
    </motion.div>
  );
}