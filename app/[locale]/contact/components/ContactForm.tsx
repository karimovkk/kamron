"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function ContactForm() {
  const t = useTranslations("contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if (!process.env.NEXT_PUBLIC_CONTACT_API_URL) {
    toast.error("API URL topilmadi")
    return
  }

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(form)
    })

    const data = await res.text()
    console.log("status:", res.status)
    console.log("response:", data)

    if (res.ok) {
      toast.success(t("successMessage"))
      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    } else {
      toast.error(t("errorMessage"))
    }
  } catch (error) {
    console.log(error)
    toast.error(t("serverError"))
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl shadow-[0_20px_80px_rgba(2,8,23,0.45)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.06),transparent_32%,transparent_68%,rgba(59,130,246,0.05))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent" />

      <div className="relative">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white">{t("formTitle")}</h3>
          <p className="mt-2 text-sm leading-6 text-white/55">{t("formDesc")}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder={t("namePlaceholder")}
            value={form.name}
            onChange={handleChange}
            className="h-14 rounded-2xl border border-white/10 bg-[#08111F]/90 px-5 text-[15px] text-white outline-none placeholder:text-white/28 transition focus:border-[#38BDF8]/45 focus:bg-[#0A1526]"
          />

          <input
            type="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            value={form.email}
            onChange={handleChange}
            className="h-14 rounded-2xl border border-white/10 bg-[#08111F]/90 px-5 text-[15px] text-white outline-none placeholder:text-white/28 transition focus:border-[#38BDF8]/45 focus:bg-[#0A1526]"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder={t("subjectPlaceholder")}
          value={form.subject}
          onChange={handleChange}
          className="mt-4 h-14 w-full rounded-2xl border border-white/10 bg-[#08111F]/90 px-5 text-[15px] text-white outline-none placeholder:text-white/28 transition focus:border-[#38BDF8]/45 focus:bg-[#0A1526]"
        />

        <textarea
          name="message"
          placeholder={t("messagePlaceholder")}
          value={form.message}
          onChange={handleChange}
          rows={7}
          className="mt-4 w-full resize-none rounded-[24px] border border-white/10 bg-[#08111F]/90 px-5 py-4 text-[15px] text-white outline-none placeholder:text-white/28 transition focus:border-[#38BDF8]/45 focus:bg-[#0A1526]"
        />

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex h-14 shrink-0 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#08111F] px-7 text-base font-semibold text-[#38BDF8] transition hover:bg-[#0A1526] hover:border-[#38BDF8]/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.18)]"
          >
            {t("sendMessage")}
          </button>

          <span className="text-right text-sm text-white/40">
            {t("replyTime")}
          </span>
        </div>
      </div>
    </form>
  );
}