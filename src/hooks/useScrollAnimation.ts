import { useEffect, useRef, useState } from "react";

type UseScrollAnimationOptions = {
  threshold?: number;
  once?: boolean;
};

export function useScrollAnimation(options: number | UseScrollAnimationOptions = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold, once } =
    typeof options === "number"
      ? { threshold: options, once: true }
      : { threshold: options.threshold ?? 0.15, once: options.once ?? true };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return { ref, isVisible };
}
