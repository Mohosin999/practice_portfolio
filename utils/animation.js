export const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 0 },
};
