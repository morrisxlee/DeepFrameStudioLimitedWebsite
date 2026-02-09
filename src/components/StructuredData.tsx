import type { Locale } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/dictionaries";

interface StructuredDataProps {
  locale: Locale;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const dict = getDictionary(locale);
  const baseUrl = "https://deepframestudiolimited.com";
  const isZh = locale === "zh-hk";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deep Frame Studio Limited",
    alternateName: "深幀工作室有限公司",
    url: baseUrl,
    email: "info@deepframestudiolimited.com",
    description: isZh
      ? "深幀工作室有限公司是一家位於香港的獨立遊戲開發公司，專注於打造沉浸式互動遊戲體驗。"
      : "Deep Frame Studio Limited is an independent game development company based in Hong Kong, crafting immersive gaming experiences.",
    foundingLocation: {
      "@type": "Place",
      name: "Hong Kong",
    },
    sameAs: [
      "https://store.steampowered.com/app/3948940/V/",
    ],
    knowsAbout: [
      "Game Development",
      "Indie Games",
      "Roguelike Games",
      "Pixel Art Games",
      "VTuber Games",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Deep Frame Studio Limited",
    alternateName: "深幀工作室有限公司",
    url: baseUrl,
    inLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Traditional Chinese", alternateName: "zh-Hant-HK" },
    ],
    publisher: {
      "@type": "Organization",
      name: "Deep Frame Studio Limited",
    },
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Isekai HKV",
    alternateName: "異世界 HKV",
    description: isZh
      ? "「異世界 HKV」是一款以 VTuber 穿越異世界為主題的 2D 俯視像素風 Roguelike 遊戲。玩家扮演勇者「DD」，獲得外掛技能「無限轉蛋」，與 VTuber 夥伴一起冒險，擊敗魔王！"
      : "Isekai HKV is a 2D top-down pixel-art roguelike themed around VTubers traveling to another world. Players take on the role of the hero DD, gain the cheat skill Unlimited Gacha, and adventure with VTubers to defeat the Demon King!",
    url: "https://store.steampowered.com/app/3948940/V/",
    genre: ["Roguelike", "Action", "Indie", "Pixel Art"],
    gamePlatform: "PC",
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "Game",
    author: {
      "@type": "Organization",
      name: "Deep Frame Studio Limited",
    },
    publisher: {
      "@type": "Organization",
      name: "Deep Frame Studio Limited",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
      url: "https://store.steampowered.com/app/3948940/V/",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
