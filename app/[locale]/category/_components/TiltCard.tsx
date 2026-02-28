"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  title,
  desc,
  items
}: {
  title: string;
  desc: string;
  items: string[];
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 22 });
  const sy = useSpring(my, { stiffness: 260, damping: 22 });
  const rx = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const ry = useTransform(sx, [-0.5, 0.5], [-12, 12]);

  return (
    <motion.div
      onPointerMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        mx.set(px);
        my.set(py);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="relative rounded-[28px] border border-white/10 bg-[#07142A]/35 p-8 backdrop-blur-2xl shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-[50px]" />
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-[60px]" />
        <motion.div
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(56,189,248,0.16),transparent_45%),radial-gradient(circle_at_70%_90%,rgba(99,102,241,0.14),transparent_45%)]"
        />
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-sky-200">
          {title}
        </div>

        <p className="mt-4 text-sm text-slate-400">{desc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((x) => (
            <span
              key={x}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200/85"
            >
              {x}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        style={{ transform: "translateZ(40px)" }}
        className="pointer-events-none absolute right-5 top-5 h-10 w-10 rounded-2xl border border-white/10 bg-white/5"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}