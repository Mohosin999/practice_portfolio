export const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4 },
};

export const fadeInVisiable = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4 },
};

export const staggerContainer = {
  initial: {},
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { staggerChildren: 0.2 },
};

export const counterAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 1, ease: "easeOut" },
};
