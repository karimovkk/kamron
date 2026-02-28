"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const key = "intro_seen_v1";
    const seen = sessionStorage.getItem(key);

    if (!seen) {
      setShow(true);
      sessionStorage.setItem(key, "1");
      const t = setTimeout(() => setShow(false), 1100);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#0B1220]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              background:
                "radial-gradient(900px circle at 20% 20%, rgba(56,189,248,0.22), transparent 55%), radial-gradient(900px circle at 80% 80%, rgba(99,102,241,0.20), transparent 55%), radial-gradient(650px circle at 50% 55%, rgba(14,165,233,0.10), transparent 60%)"
            }}
          />

          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22300%22 height=%22300%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />

          <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6">
            <div className="w-full max-w-xl text-center">
              <motion.div
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-sky-200"
                initial={{ y: 18, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                karimov.dev
                <span className="h-1 w-1 rounded-full bg-sky-400" />
                loading
              </motion.div>

              <motion.h1
                className="mt-6 text-5xl font-black tracking-tight text-white md:text-6xl"
                initial={{ y: 22, opacity: 0, filter: "blur(14px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                Clean UI.
                <span className="text-sky-300"> Real growth.</span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-4 max-w-md text-sm text-slate-300/80"
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              >
                Booting the experience…
              </motion.p>

              <div className="mt-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <motion.div
                  className="h-2 bg-sky-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <motion.div
                className="mt-6 text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                Next.js • Tailwind • next-intl
              </motion.div>
            </div>
          </div>

          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]"
            initial={{ scale: 0.9, opacity: 0.4 }}
            animate={{ scale: 1.08, opacity: 0.65 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}