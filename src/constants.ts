import type { Variants } from 'motion/react';

export const fadeInOutVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};
