import { NextIntlClientProvider } from "next-intl";
import Navbar from "../components/Navbar";
import { getMessages } from "next-intl/server";
import Footer from "../components/Footer";
import IntroOverlay from "./_components/IntroOverlay";

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
      <IntroOverlay />
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}