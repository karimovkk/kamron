export const ease = [0.22, 1, 0.36, 1] as const;

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const left = {
  hidden: { opacity: 0, x: -44, filter: "blur(14px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

export const right = {
  hidden: { opacity: 0, x: 44, filter: "blur(14px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

export const up = {
  hidden: { opacity: 0, y: 26, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease },
  },
};

export const cardLeft = {
  hidden: { opacity: 0, x: -36, scale: 0.98, filter: "blur(14px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

export const cardRight = {
  hidden: { opacity: 0, x: 36, scale: 0.98, filter: "blur(14px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

export const chip = {
  hidden: { opacity: 0, y: 10, scale: 0.98, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease },
  },
};