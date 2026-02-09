import { locales, getDictionary, type Locale } from "@/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Games from "@/components/Games";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : "zh-hk") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <Navbar dict={dict} locale={locale} />
      <Hero dict={dict} />
      <About dict={dict} />
      <Services dict={dict} />
      <Games dict={dict} />
      <FAQ dict={dict} />
      <Contact dict={dict} />
      <Footer dict={dict} locale={locale} />
    </>
  );
}
