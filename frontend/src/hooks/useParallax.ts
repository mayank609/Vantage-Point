import { useMotionValue } from "framer-motion";
import { useLenis } from "lenis/react";

export function useParallax(speed = 0.25) {
  const y = useMotionValue(0);
  useLenis(({ scroll }) => {
    y.set(-scroll * speed);
  });
  return y;
}

export function useLenisScrolled(threshold = 24) {
  const scrolled = useMotionValue(false);
  useLenis(({ scroll }) => {
    scrolled.set(scroll > threshold);
  });
  return scrolled;
}
