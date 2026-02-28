"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  dir = "up",
  once = true
}: {
  children: React.ReactNode;
  delay?: number;
  dir?: "left" | "right" | "up" | "down";
  once?: boolean;
}) {
  const offset =
    dir === "left"
      ? { x: -44, y: 0 }
      : dir === "right"
      ? { x: 44, y: 0 }
      : dir === "down"
      ? { x: 0, y: -28 }
      : { x: 0, y: 28 };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(14px)", ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.25, margin: "-120px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}