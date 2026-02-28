// app/[locale]/category/_components/Background.tsx
"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#0B1220]" />
      <motion.div
        className="absolute inset-0 -z-20 opacity-70"
        animate={{ opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(900px circle at 20% 10%, rgba(56,189,248,0.18), transparent 45%), radial-gradient(900px circle at 80% 90%, rgba(99,102,241,0.16), transparent 45%), radial-gradient(700px circle at 50% 55%, rgba(14,165,233,0.10), transparent 50%)"
        }}
      />
      <motion.div
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-[90px]"
        animate={{ x: [0, 60, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-48 bottom-12 -z-10 h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-[100px]"
        animate={{ x: [0, -70, 0], y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}