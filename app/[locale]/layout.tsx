import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroOverlayGate from "./_components/IntroOverlayGate";
import { Toaster } from "sonner";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <IntroOverlayGate />
      <Navbar />
      {children}
      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#08111F",
            color: "#fff",
            border: "1px solid rgba(56,189,248,0.25)"
          }
        }}
      />
    </NextIntlClientProvider>
  );
}