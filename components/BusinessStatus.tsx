"use client";

import { useEffect, useState } from "react";
import { HOURS_SCHEDULE } from "@/lib/site-data";

type Status = {
  isOpen: boolean;
  emergency: boolean;
  countdown: string;
  nextLabel?: string;
};

function ptParts(now: Date) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
  const parts = Object.fromEntries(fmt.formatToParts(now).map((p) => [p.type, p.value]));
  const weekdayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  const day = weekdayMap[parts.weekday];
  const hour = parseInt(parts.hour, 10) % 24;
  const minute = parseInt(parts.minute, 10);
  const second = parseInt(parts.second, 10);
  return { day, hour, minute, second };
}

function formatCountdown(totalSeconds: number) {
  const totalMin = Math.ceil(totalSeconds / 60);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `${m}m`;
  if (h < 24) return `${h}h ${m}m`;
  const d = Math.floor(h / 24);
  const remH = h % 24;
  return remH === 0 ? `${d}d` : `${d}d ${remH}h`;
}

function computeStatus(): Status {
  const now = new Date();
  const { day, hour, minute, second } = ptParts(now);
  const currentSec = hour * 3600 + minute * 60 + second;
  const today = HOURS_SCHEDULE[day];

  if (today.openHour !== null && today.closeHour !== null) {
    const openSec = today.openHour * 3600;
    const closeSec = today.closeHour * 3600;
    if (currentSec >= openSec && currentSec < closeSec) {
      return {
        isOpen: true,
        emergency: today.emergency,
        countdown: formatCountdown(closeSec - currentSec),
      };
    }
    if (currentSec < openSec) {
      return {
        isOpen: false,
        emergency: today.emergency,
        countdown: formatCountdown(openSec - currentSec),
        nextLabel: "Today",
      };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const next = HOURS_SCHEDULE[nextDay];
    if (next.openHour !== null) {
      const secUntilMidnight = 24 * 3600 - currentSec;
      const fullDays = i - 1;
      const total = secUntilMidnight + fullDays * 24 * 3600 + next.openHour * 3600;
      return {
        isOpen: false,
        emergency: next.emergency,
        countdown: formatCountdown(total),
        nextLabel: i === 1 ? "Tomorrow" : next.label,
      };
    }
  }

  return { isOpen: false, emergency: false, countdown: "—" };
}

export default function BusinessStatus() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(computeStatus());
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    return (
      <span className="hidden items-center gap-2 text-xs font-semibold text-white/90 md:flex">
        Mon–Fri 8am–5pm
      </span>
    );
  }

  if (status.isOpen) {
    return (
      <span className="flex items-center gap-2 text-xs font-semibold text-white">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
        </span>
        <span>
          {status.emergency ? "Open · Emergency Only" : "Open Now"}
          <span className="hidden sm:inline"> · Closes in {status.countdown}</span>
        </span>
      </span>
    );
  }

  return (
    <span className="flex items-center gap-2 text-xs font-semibold text-white">
      <span className="h-2 w-2 rounded-full bg-white/60" />
      <span>
        Closed
        <span className="hidden sm:inline">
          {" "}· Opens {status.nextLabel} 8 AM ({status.countdown})
          {status.emergency ? " · Emergency Only" : ""}
        </span>
      </span>
    </span>
  );
}
