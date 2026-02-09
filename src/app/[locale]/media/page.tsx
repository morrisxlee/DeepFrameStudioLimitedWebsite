import { locales, getDictionary, type Locale } from "@/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Newspaper } from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function MediaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : "zh-hk") as Locale;
  const dict = getDictionary(locale);
  const m = dict.media;

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <a
              href={`/${locale}`}
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors mb-6 inline-block"
            >
              &larr; {locale === "zh-hk" ? "返回首頁" : "Back to Home"}
            </a>
            <p className="text-sm font-medium text-violet-400 mb-3 tracking-wide uppercase">
              {m.label}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              {m.title}
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">{m.description}</p>
          </div>

          {/* Articles */}
          <div className="space-y-12">
            {m.articles.map((article, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-violet-500/20 transition-all"
              >
                <div className="grid grid-cols-1 xl:grid-cols-5">
                  {/* Left — Article Content (2 cols) */}
                  <div className="xl:col-span-2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                        <Newspaper size={24} className="text-violet-400" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                          {article.source}
                        </span>
                        <p className="text-xs text-zinc-600 mt-0.5">{article.date}</p>
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-zinc-400 text-base leading-relaxed mb-8">
                      {article.description}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity w-fit"
                    >
                      {locale === "zh-hk" ? "閱讀全文" : "Read Article"}
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Right — Image (3 cols, natural size, no resize) */}
                  <div className="xl:col-span-3 flex items-center justify-center bg-black/20 p-4 sm:p-6">
                    <img
                      src="/assets/images/港產vtuber煉成路.jpg"
                      alt={article.title}
                      className="rounded-xl max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}
