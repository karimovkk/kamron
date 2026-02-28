import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 -z-20 bg-[#0B1220]" />
      <div className="absolute inset-0 -z-10 hero-radial opacity-70" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#07142A]/35 p-10 text-center backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-sky-200">
            404
          </div>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Page not found
          </h1>

          <p className="mt-4 text-sm text-slate-300/85">
            Bu sahifa topilmadi.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-2xl border border-sky-400/25 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/15"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}