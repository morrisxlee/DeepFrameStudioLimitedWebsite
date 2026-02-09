export type Locale = "zh-hk" | "en";

export const locales: Locale[] = ["zh-hk", "en"];
export const defaultLocale: Locale = "zh-hk";

export interface Dictionary {
  locale: Locale;
  localeName: string;
  nav: {
    about: string;
    services: string;
    games: string;
    contact: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    chineseName: string;
    tagline: string;
    cta1: string;
    cta2: string;
  };
  about: {
    label: string;
    title: string;
    titleFaded: string;
    description: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    culture: {
      title: string;
      description: string;
    };
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  games: {
    label: string;
    title: string;
    description: string;
    isekaiHKV: {
      title: string;
      genre: string;
      status: string;
      description: string;
      features: string[];
      steamCta: string;
    };
    comingSoon: {
      title: string;
      description: string;
    };
  };
  contact: {
    label: string;
    title: string;
    description: string;
    email: string;
    emailLabel: string;
    locationLabel: string;
    location: string;
    cta: string;
  };
  footer: {
    rights: string;
  };
  faq: {
    label: string;
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

const zh: Dictionary = {
  locale: "zh-hk",
  localeName: "繁體中文",
  nav: {
    about: "關於我們",
    services: "服務",
    games: "遊戲",
    contact: "聯絡我們",
  },
  hero: {
    badge: "遊戲開發工作室",
    title1: "Deep Frame",
    title2: "Studio",
    chineseName: "深幀工作室有限公司",
    tagline:
      "我們打造沉浸式遊戲體驗，突破創意與技術的界限。每一幀都訴說一個故事。",
    cta1: "探索我們的遊戲",
    cta2: "聯絡我們",
  },
  about: {
    label: "關於我們",
    title: "匠心打造世界，",
    titleFaded: "逐幀呈現精彩",
    description:
      "深幀工作室有限公司是一家獨立遊戲開發公司，致力於創造令人難忘的互動體驗。從概念設計到最終發佈，我們以精湛的技藝處理開發的每一個環節。",
    mission: {
      title: "我們的使命",
      description:
        "創造透過創新玩法、引人入勝的敘事和精美畫面來吸引玩家的遊戲——帶來在屏幕關閉後仍能引起共鳴的體驗。",
    },
    vision: {
      title: "我們的願景",
      description:
        "成為以突破創意界限而聞名的領先獨立遊戲工作室，建構能在全球觀眾中激發驚奇、連結和歡樂的世界。",
    },
    culture: {
      title: "我們的文化",
      description:
        "我們相信最好的遊戲源於充滿熱情的團隊。我們培養創造力、協作和持續學習的文化——讓每個聲音都能影響最終產品。",
    },
  },
  services: {
    label: "我們的服務",
    title: "全方位遊戲開發",
    description: "我們涵蓋遊戲創作的每一個環節——從靈感的第一道火花到玩家按下「開始」的那一刻。",
    items: [
      {
        title: "遊戲設計",
        description: "從機制到關卡設計，我們創造引人入勝的遊戲循環，讓玩家流連忘返。",
      },
      {
        title: "遊戲開發",
        description: "使用尖端引擎和自定義工具，在多個平台上進行全棧開發。",
      },
      {
        title: "UI/UX 設計",
        description: "直覺化的介面和無縫的用戶體驗，提升每一次互動。",
      },
      {
        title: "美術與動畫",
        description: "令人驚嘆的 2D 和 3D 美術、角色設計和流暢的動畫，為世界注入生命。",
      },
      {
        title: "音效設計",
        description: "沉浸式的音景和原創音樂，加深每一刻的情感衝擊。",
      },
      {
        title: "遊戲發行",
        description: "端到端的發行支援，包括質量保證、本地化和多平台分發。",
      },
    ],
  },
  games: {
    label: "我們的遊戲",
    title: "開發中的作品",
    description: "深幀工作室的每一個項目都傾注了熱情。以下是我們正在打造的作品。",
    isekaiHKV: {
      title: "Isekai HKV — 異世界 HKV",
      genre: "2D 像素風 Roguelike",
      status: "開發中 · 2026年發售",
      description:
        "「異世界 HKV」是一款以 VTuber 穿越異世界為主題的 2D 俯視像素風 Roguelike 遊戲。玩家扮演勇者「DD」，獲得外掛技能「無限轉蛋」，與 VTuber 夥伴一起冒險，擊敗魔王！",
      features: [
        "自動攻擊 — 你只需移動和閃避",
        "擊敗敵人獲得經驗值學習異世界魔法",
        "使用「無限轉蛋」獲取 VTuber 夥伴作為 AI 隊友",
        "每位 VTuber 擁有獨特的固有能力、攻擊模式和屬性",
        "隨機生成的異世界入侵事件提供不同的競技場效果",
      ],
      steamCta: "在 Steam 上加入願望清單",
    },
    comingSoon: {
      title: "更多作品即將推出",
      description: "我們正在構思更多令人興奮的新項目。敬請期待！",
    },
  },
  contact: {
    label: "聯絡我們",
    title: "讓我們一起打造精彩",
    description: "無論您有合作意向、發行需求，還是只想打個招呼——我們都很樂意收到您的來信。",
    email: "info@deepframestudiolimited.com",
    emailLabel: "電子郵件",
    locationLabel: "位置",
    location: "香港",
    cta: "發送郵件給我們",
  },
  footer: {
    rights: "版權所有。",
  },
  faq: {
    label: "常見問題",
    title: "常見問題解答",
    items: [
      {
        question: "深幀工作室是做什麼的？",
        answer:
          "深幀工作室有限公司（Deep Frame Studio Limited）是一家位於香港的獨立遊戲開發公司，專注於打造沉浸式的互動遊戲體驗。我們涵蓋從遊戲設計、開發、美術到發行的全方位服務。",
      },
      {
        question: "Isekai HKV 是什麼遊戲？",
        answer:
          "「異世界 HKV」是我們開發中的旗艦作品，一款以 VTuber 穿越異世界為主題的 2D 俯視像素風 Roguelike 遊戲。玩家扮演勇者「DD」，與 VTuber 夥伴一起冒險、擊敗魔王。預計 2026 年發售，現在可在 Steam 上加入願望清單。",
      },
      {
        question: "如何聯絡深幀工作室？",
        answer:
          "您可以透過電子郵件 info@deepframestudiolimited.com 聯絡我們。無論是合作洽談、發行需求還是一般諮詢，我們都歡迎您的來信。",
      },
      {
        question: "你們接受遊戲開發外包嗎？",
        answer:
          "是的，我們提供全方位的遊戲開發服務，包括遊戲設計、程式開發、UI/UX 設計、美術與動畫、音效設計和遊戲發行。歡迎聯絡我們討論您的項目需求。",
      },
    ],
  },
};

const en: Dictionary = {
  locale: "en",
  localeName: "English",
  nav: {
    about: "About",
    services: "Services",
    games: "Games",
    contact: "Contact",
  },
  hero: {
    badge: "Game Development Studio",
    title1: "Deep Frame",
    title2: "Studio",
    chineseName: "深幀工作室有限公司",
    tagline:
      "We craft immersive gaming experiences that push the boundaries of creativity and technology. Every frame tells a story.",
    cta1: "Explore Our Games",
    cta2: "Get in Touch",
  },
  about: {
    label: "About Us",
    title: "Crafting Worlds, ",
    titleFaded: "One Frame at a Time",
    description:
      "Deep Frame Studio Limited is an independent game development company dedicated to building memorable interactive experiences. From concept art to final release, we handle every stage of development with care and precision.",
    mission: {
      title: "Our Mission",
      description:
        "To create games that captivate players through innovative gameplay, compelling narratives, and stunning visuals — delivering experiences that resonate long after the screen fades to black.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To become a leading indie game studio recognized for pushing creative boundaries and building worlds that inspire wonder, connection, and joy across global audiences.",
    },
    culture: {
      title: "Our Culture",
      description:
        "We believe the best games are born from passionate teams. We foster a culture of creativity, collaboration, and continuous learning — where every voice shapes the final product.",
    },
  },
  services: {
    label: "What We Do",
    title: "Full-Spectrum Game Development",
    description:
      'We cover every aspect of game creation — from the first spark of an idea to the moment players press "Start."',
    items: [
      {
        title: "Game Design",
        description:
          "From mechanics to level design, we create engaging gameplay loops that keep players coming back.",
      },
      {
        title: "Game Development",
        description:
          "Full-stack development across multiple platforms using cutting-edge engines and custom tools.",
      },
      {
        title: "UI/UX Design",
        description:
          "Intuitive interfaces and seamless user experiences that enhance every interaction.",
      },
      {
        title: "Art & Animation",
        description:
          "Stunning 2D and 3D art, character design, and fluid animations that bring worlds to life.",
      },
      {
        title: "Sound Design",
        description:
          "Immersive soundscapes and original music that deepen the emotional impact of every moment.",
      },
      {
        title: "Publishing",
        description:
          "End-to-end publishing support including QA, localization, and multi-platform distribution.",
      },
    ],
  },
  games: {
    label: "Our Games",
    title: "Titles in Our Pipeline",
    description:
      "Every project at Deep Frame Studio is crafted with passion. Here's a glimpse at what we're building.",
    isekaiHKV: {
      title: "Isekai HKV",
      genre: "2D Pixel-Art Roguelike",
      status: "In Development · Coming 2026",
      description:
        '"Isekai HKV" is a 2D top-down pixel-art roguelike themed around VTubers traveling to another world. Players take on the role of the hero "DD," gain the cheat skill "Unlimited Gacha," and adventure with VTubers to defeat the Demon King!',
      features: [
        "Auto-attack — you only need to move and dodge",
        "Defeat enemies to gain EXP and learn otherworldly magic",
        'Use "Unlimited Gacha" to obtain VTuber companions as AI teammates',
        "Each VTuber has unique innate abilities, attack patterns, and stats",
        "Randomly spawning otherworldly invasion events with different arena effects",
      ],
      steamCta: "Wishlist on Steam",
    },
    comingSoon: {
      title: "More Titles Coming Soon",
      description:
        "We're brewing exciting new projects behind the scenes. Stay tuned!",
    },
  },
  contact: {
    label: "Contact",
    title: "Let's Build Something Together",
    description:
      "Whether you're interested in collaboration, publishing, or just want to say hello — we'd love to hear from you.",
    email: "info@deepframestudiolimited.com",
    emailLabel: "Email Us",
    locationLabel: "Location",
    location: "Hong Kong",
    cta: "Send Us a Message",
  },
  footer: {
    rights: "All rights reserved.",
  },
  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What does Deep Frame Studio do?",
        answer:
          "Deep Frame Studio Limited is an independent game development company based in Hong Kong, focused on crafting immersive interactive gaming experiences. We offer full-spectrum services from game design, development, art, to publishing.",
      },
      {
        question: "What is Isekai HKV?",
        answer:
          'Isekai HKV is our flagship title in development — a 2D top-down pixel-art roguelike themed around VTubers traveling to another world. Players take on the role of the hero "DD" and adventure with VTuber companions to defeat the Demon King. It\'s planned for release in 2026 and is available to wishlist on Steam now.',
      },
      {
        question: "How can I contact Deep Frame Studio?",
        answer:
          "You can reach us via email at info@deepframestudiolimited.com. Whether it's collaboration inquiries, publishing opportunities, or general questions, we welcome your message.",
      },
      {
        question: "Do you accept game development outsourcing?",
        answer:
          "Yes, we offer comprehensive game development services including game design, programming, UI/UX design, art & animation, sound design, and publishing support. Contact us to discuss your project needs.",
      },
    ],
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  "zh-hk": zh,
  en: en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
