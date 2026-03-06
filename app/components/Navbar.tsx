"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/blog", key: "nav.blog" },
   { href: "/about", key: "nav.about" },
  { href: "/category", key: "nav.categories" },
   { href: "/contact", key: "nav.contact" }
 
];

const locales = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" }
];

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const cleanPath = () => {
    const p = pathname || "/";
    const withoutLocale = p.startsWith(`/${locale}`) ? p.slice(locale.length + 1) : p;
    return withoutLocale === "" ? "/" : withoutLocale;
  };

  const currentPath = cleanPath();

  const withLocale = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  const switchLocaleHref = (nextLocale: string) =>
    `/${nextLocale}${currentPath === "/" ? "" : currentPath}`;

  const isActive = (href: string) => currentPath === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 mt-3 sm:mt-4">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-[#07142A]/40 px-4 sm:px-5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <Link href={withLocale("/")} className="flex items-center gap-2.5" aria-label="karimov.dev home">
            <span className="flex items-center font-mono text-sm text-[#38BDF8]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </span>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[#1E3A8A]">karimov</span>
              <span className="text-[#E5E7EB]">.dev</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={withLocale(item.href)}
                    className={`text-sm font-medium transition-colors hover:text-[#38BDF8] ${
                      isActive(item.href) ? "text-[#38BDF8]" : "text-slate-200/70"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100/80 backdrop-blur-xl transition hover:bg-white/10 hover:text-slate-100"
              >
                <span className="text-[#38BDF8]">🌐</span>
                <span>{locales.find((l) => l.code === locale)?.label || locale.toUpperCase()}</span>
                <span className="text-slate-200/60">▾</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 overflow-hidden rounded-2xl border border-white/10 bg-[#07142A]/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                  {locales.map((l) => (
                    <Link
                      key={l.code}
                      href={switchLocaleHref(l.code)}
                      onClick={() => setLangOpen(false)}
                      className={`block px-3 py-2 text-xs font-semibold transition ${
                        l.code === locale
                          ? "bg-white/5 text-[#38BDF8]"
                          : "text-slate-200/75 hover:bg-white/5 hover:text-slate-100"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setMobileOpen(false)} />

            <div className="relative z-50 mt-2 rounded-2xl border border-white/10 bg-[#07142A]/90 backdrop-blur-xl md:hidden overflow-hidden">
              <ul className="flex flex-col px-4 py-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={withLocale(item.href)}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-white/5 hover:text-[#38BDF8] ${
                        isActive(item.href) ? "text-[#38BDF8]" : "text-slate-200/70"
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 px-4 py-4">
                <div className="flex gap-2">
                  {locales.map((l) => (
                    <Link
                      key={l.code}
                      href={switchLocaleHref(l.code)}
                      onClick={() => setMobileOpen(false)}
                      className={`flex-1 rounded-xl border border-white/10 px-3 py-2 text-center text-xs font-semibold transition ${
                        l.code === locale
                          ? "bg-white/5 text-[#38BDF8]"
                          : "text-slate-200/70 hover:bg-white/5 hover:text-slate-100"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}