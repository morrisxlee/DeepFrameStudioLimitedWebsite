import { locales, getDictionary, type Locale } from "@/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Newspaper, ImageIcon } from "lucide-react";

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

          {/* Articles */}
          <div className="space-y-6 mb-16">
            {m.articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 hover:border-violet-500/20 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors">
                    <Newspaper size={24} className="text-violet-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        {article.source}
                      </span>
                      <span className="text-xs text-zinc-600">{article.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-violet-400">
                      {locale === "zh-hk" ? "閱讀全文" : "Read Article"}
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Image Gallery Section */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                <ImageIcon size={20} className="text-zinc-500" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                {m.imageSection.title}
              </h2>
            </div>

            {/* Image Grid — images from public/assets/media/ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Placeholder — replace with actual images */}
              <div className="aspect-video rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center">
                <p className="text-zinc-600 text-sm text-center px-4">
                  {m.imageSection.placeholder}
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-600">
              {locale === "zh-hk"
                ? "提示：將圖片放入 public/assets/media/ 資料夾後，在此處加入 <img> 標籤即可顯示。"
                : "Tip: Place images in public/assets/media/ folder, then add <img> tags here to display them."}
            </p>
          </div>
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}
