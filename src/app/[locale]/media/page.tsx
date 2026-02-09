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
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <a
              href={`/${locale}`}
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors mb-6 inline-block"
            >
              &larr; {locale === "zh-hk" ? "返回首頁" : "Back to Home"}
            </a>
            <p className="text-sm font-medium text-violet-400 mb-3 tracking-wide uppercase">
              {m.label}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              {m.title}
            </h1>
            <p className="text-zinc-400 text-lg">{m.description}</p>
          </div>

          {/* Articles — text left, image right */}
          <div className="space-y-8">
            {m.articles.map((article, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-violet-500/20 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left — Article Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                        <Newspaper size={20} className="text-violet-400" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                          {article.source}
                        </span>
                        <span className="text-xs text-zinc-600 ml-2">{article.date}</span>
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                      {article.title}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {article.description}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity w-fit"
                    >
                      {locale === "zh-hk" ? "閱讀全文" : "Read Article"}
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Right — Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src="/assets/images/港產vtuber煉成路.jpg"
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
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
