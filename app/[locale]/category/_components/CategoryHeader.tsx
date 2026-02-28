// app/[locale]/category/_components/CategoryHeader.tsx
"use client";

import { motion } from "framer-motion";

export default function CategoryHeader({
  badge,
  title
}: {
  badge: string;
  title: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <motion.div
        className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-sky-200"
        animate={{
          boxShadow: [
            "0 0 0 rgba(56,189,248,0)",
            "0 0 26px rgba(56,189,248,0.16)",
            "0 0 0 rgba(56,189,248,0)"
          ]
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {badge}
      </motion.div>

      <h1 className="mt-6 text-5xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h1>

      <motion.div
        className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-sky-500"
        initial={{ width: 40, opacity: 0 }}
        animate={{ width: 96, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      />
    </motion.header>
  );
}