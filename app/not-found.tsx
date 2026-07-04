import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex min-h-[70vh] flex-col items-start justify-center px-6 py-24 sm:px-10"
      style={{ backgroundColor: "#F4F0E6", color: "#1A1A1A" }}
    >
      <div className="mx-auto w-full max-w-4xl">
        <p
          className="text-[11px] uppercase tracking-[0.4em]"
          style={{ fontFamily: "var(--f-mono)", color: "#E63946" }}
        >
          404 · Page not found
        </p>
        <h1
          className="mt-6 uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,10vw,8rem)]"
          style={{ fontFamily: "var(--f-display)" }}
        >
          Wrong <span style={{ color: "#E63946" }}>key.</span>
        </h1>
        <p
          className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ fontFamily: "var(--f-body)", color: "#1A1A1ACC" }}
        >
          This page doesn&apos;t exist — but a real locksmith is one click away.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.3em]"
            style={{
              borderColor: "#E63946",
              backgroundColor: "#E63946",
              color: "#F4F0E6",
              fontFamily: "var(--f-mono)",
            }}
          >
            Back to home →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] hover:opacity-70"
            style={{ fontFamily: "var(--f-mono)", color: "#1A1A1ACC" }}
          >
            Browse services →
          </Link>
        </div>
      </div>
    </main>
  );
}
