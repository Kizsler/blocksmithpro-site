import Link from "next/link";
import Image from "next/image";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-brand-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
          {/* Left content */}
          <div className="flex-1">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
              Bay Area&apos;s #1 Security Partner
            </p>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your{" "}
              <span className="text-brand-red">Security</span> Is Our
              Priority.
            </h1>
            <div className="mb-6 h-1 w-14 bg-brand-red" />
            <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-400">
              Professional locksmith and security solutions for commercial,
              residential, and automotive clients across the Bay Area. Licensed,
              bonded, and insured with over 15 years of trusted service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-red px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
              >
                Schedule a Visit
              </Link>
              <Link
                href="/services"
                className="border-2 border-white px-8 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-brand-dark transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1">
            <div className="border-[3px] border-brand-red">
              <Image
                src="/images/hero-van.png"
                alt="B&B Locksmith van fleet"
                width={640}
                height={420}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <StatsBar />
    </main>
  );
}
