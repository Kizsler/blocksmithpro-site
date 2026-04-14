import { STATS } from "@/lib/site-data";
import CountUp from "./CountUp";

export default function StatsBar() {
  return (
    <section className="border-b-[3px] border-brand-red bg-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center transition-transform duration-300 ease-out hover:scale-105">
            <CountUp
              value={stat.value}
              className="text-4xl font-black text-brand-red sm:text-5xl"
            />
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
