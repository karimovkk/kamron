"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-[#0B1220]">
      <div className="absolute inset-0 footer-glow" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">karimov.dev</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {t("footer.desc")}
            </p>

            <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-500/5 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-sky-300">
                {t("footer.telegramTitle")}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {t("footer.telegramDesc")}
              </p>

              <a
                href="https://t.me/karimov_web"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                {t("footer.telegramButton")}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200">
              {t("footer.navigation")}
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href={withLocale("/")} className="footer-link">
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link href={withLocale("/blog")} className="footer-link">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link href={withLocale("/about")} className="footer-link">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href={withLocale("/category")} className="footer-link">
                  {t("footer.category")}
                </Link>
              </li>
              <li>
                <Link href={withLocale("/contact")} className="footer-link">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200">
              {t("footer.connect")}
            </h4>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="tel:+998900372809" className="footer-link block">
                +998 90 037 28 09
              </a>

              <a
                href="mailto:karimovkamron349@gmail.com"
                className="footer-link block"
              >
                karimovkamron349@gmail.com
              </a>

              <a
                href="https://t.me/karimov_z2z"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link block"
              >
                Telegram (Shaxsiy)
              </a>

              <a
                href="https://t.me/karimov_web"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link block text-sky-300"
              >
                Telegram Kanal
              </a>

              <a
                href="https://github.com/karimovkk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link block"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} karimov.dev — {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}