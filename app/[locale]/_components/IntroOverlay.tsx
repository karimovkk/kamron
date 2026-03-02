"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroOverlay() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const key = "intro_seen_v1"
    const seen = sessionStorage.getItem(key)

    if (!seen) {
      setShow(true)
      sessionStorage.setItem(key, "1")

      const t = setTimeout(() => setShow(false), 1100)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0B1220] pointer-events-auto"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex h-full items-center justify-center">
            <p className="text-sky-400 font-semibold">Loading...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}