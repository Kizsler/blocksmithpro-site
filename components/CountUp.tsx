"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface CountUpProps {
  value: string;
  className?: string;
}

export default function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    // Parse: prefix (e.g. "C-"), numeric part, suffix (e.g. "+")
    const match = value.match(/^([A-Za-z\-]*?)([\d,.]+)(.*)$/);
    if (!match) return;

    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    const hasCommas = numStr.includes(",");
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const target = parseFloat(numStr.replace(/,/g, ""));

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const duration = 2000;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const linear = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const progress = 1 - Math.pow(1 - linear, 3);
      const current = target * progress;

      let formatted = current.toFixed(decimals);
      if (hasCommas) {
        const parts = formatted.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        formatted = parts.join(".");
      }

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (linear < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    }

    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
