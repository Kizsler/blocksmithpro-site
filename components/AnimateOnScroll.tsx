"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in";
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass = isVisible
    ? animation === "fade-in"
      ? "animate-fade-in"
      : "animate-fade-in-up"
    : "animate-hidden";

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
