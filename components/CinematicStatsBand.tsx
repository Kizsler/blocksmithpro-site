"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site-data";

const INK = "#08080A";
const CHALK = "#F4F0E6";
const STEEL = "#1C1C20";
const RED = "#E63946";

type Parsed = { num: number | null; suffix: string; decimals: number; commas: boolean };

function parseValue(v: string): Parsed {
  const match = v.match(/^(-?\d[\d,]*\.?\d*)(.*)$/);
  if (!match) return { num: null, suffix: "", decimals: 0, commas: false };
  const rawNum = match[1];
  const cleaned = rawNum.replace(/,/g, "");
  const num = parseFloat(cleaned);
  if (isNaN(num)) return { num: null, suffix: "", decimals: 0, commas: false };
  const decimals = cleaned.includes(".") ? cleaned.split(".")[1].length : 0;
  return { num, suffix: match[2], decimals, commas: rawNum.includes(",") };
}

function formatNum(n: number, decimals: number, commas: boolean) {
  if (commas) {
    return n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return n.toFixed(decimals);
}

export default function CinematicStatsBand() {
  const bandRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = bandRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    const fallback = window.setTimeout(() => setStarted(true), 1500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={bandRef}
      className="grid grid-cols-2 divide-x divide-y text-center sm:grid-cols-4 sm:divide-y-0"
      style={{ backgroundColor: STEEL, borderColor: `${CHALK}14` }}
    >
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center px-5 py-8 sm:px-8 sm:py-12"
          style={{ borderColor: `${CHALK}14` }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--f-mono)", color: `${CHALK}66` }}
          >
            Proof · 0{i + 1}
          </p>
          <p
            className="mt-3 text-5xl leading-none sm:text-6xl"
            style={{
              fontFamily: "var(--f-display)",
              color: i === 0 ? RED : CHALK,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            <CountUp raw={s.value} started={started} delay={i * 150} />
          </p>
          <p
            className="mt-2 text-sm"
            style={{ color: `${CHALK}AA`, fontFamily: "var(--f-body)" }}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function CountUp({ raw, started, delay }: { raw: string; started: boolean; delay: number }) {
  const parsed = parseValue(raw);
  const [display, setDisplay] = useState<string>(
    parsed.num === null ? raw : `${formatNum(0, parsed.decimals, parsed.commas)}${parsed.suffix}`,
  );

  useEffect(() => {
    if (!started) return;
    if (parsed.num === null) {
      setDisplay(raw);
      return;
    }
    const target = parsed.num;
    const duration = 1600;
    let rafId = 0;
    let startTs = 0;

    const tick = (now: number) => {
      if (!startTs) startTs = now;
      const elapsed = now - startTs;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(`${formatNum(current, parsed.decimals, parsed.commas)}${parsed.suffix}`);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(raw);
      }
    };

    const timer = window.setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [started, raw, delay, parsed.num, parsed.decimals, parsed.commas, parsed.suffix]);

  return <span>{display}</span>;
}
