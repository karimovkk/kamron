"use client";

import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("contact");

  return (
    <div className="max-w-2xl">
      <span className="inline-flex rounded-full border border-[#38BDF8]/20 bg-white/5 px-4 py-2 text-sm text-[#C7D2FE] backdrop-blur">
        {t("badge")}
      </span>

   <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
  {t("title1")}
  <span className="block bg-gradient-to-r from-[#22D3EE] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
    {t("title2")}
  </span>
</h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
        {t("desc")}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:karimovkamron349@gmail.com"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[#08111F] px-5 py-3 text-sm font-medium text-white transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
        >
          <Mail size={16} />
          {t("email")}
        </a>

        <Link
          href="https://t.me/karimov_z2z"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[#08111F] px-5 py-3 text-sm font-medium text-white transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
        >
          <Send size={16} />
          {t("telegram")}
        </Link>

        <a
          href="tel:+998900372809"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[#08111F] px-5 py-3 text-sm font-medium text-white transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8]"
        >
          <Phone size={16} />
          {t("phone")}
        </a>
      </div>
    </div>
  );
}