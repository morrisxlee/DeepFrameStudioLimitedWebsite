import type { Metadata } from "next";
import { locales, getDictionary, type Locale } from "@/i18n/dictionaries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh-hk";

  const title = isZh
    ? "深幀工作室有限公司 | Deep Frame Studio Limited — 香港獨立遊戲開發"
    : "Deep Frame Studio Limited | 深幀工作室有限公司 — Indie Game Development";

  const description = isZh
    ? "深幀工作室有限公司是一家位於香港的獨立遊戲開發公司，專注於打造沉浸式互動遊戲體驗。旗艦作品「異世界 HKV」——VTuber 主題像素風 Roguelike 遊戲，即將登陸 Steam。"
    : "Deep Frame Studio Limited is an independent game development company based in Hong Kong, crafting immersive gaming experiences. Our flagship title Isekai HKV — a VTuber-themed pixel-art roguelike — is coming to Steam in 2026.";

  const baseUrl = "https://deepframestudiolimited.com";

  return {
    title,
    description,
    keywords: isZh
      ? [
          "深幀工作室",
          "香港遊戲開發",
          "獨立遊戲",
          "異世界 HKV",
          "Isekai HKV",
          "VTuber 遊戲",
          "Roguelike",
          "像素風遊戲",
          "Deep Frame Studio",
          "遊戲公司",
        ]
      : [
          "Deep Frame Studio",
          "Hong Kong game development",
          "indie games",
          "Isekai HKV",
          "VTuber game",
          "roguelike",
          "pixel art game",
          "game studio",
          "深幀工作室",
          "game company Hong Kong",
        ],
    authors: [{ name: "Deep Frame Studio Limited" }],
    creator: "Deep Frame Studio Limited",
    publisher: "Deep Frame Studio Limited",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "zh-Hant-HK": `${baseUrl}/zh-hk`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: isZh
        ? "深幀工作室有限公司 — 香港獨立遊戲開發工作室"
        : "Deep Frame Studio Limited — Indie Game Development Studio",
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Deep Frame Studio Limited",
      locale: isZh ? "zh_HK" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isZh ? "深幀工作室有限公司" : "Deep Frame Studio Limited",
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div lang={locale === "zh-hk" ? "zh-Hant-HK" : "en"}>
      {children}
    </div>
  );
}
