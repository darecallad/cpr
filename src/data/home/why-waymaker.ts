export type WhyWaymakerLocale = "en" | "zh";

export type WhyWaymakerIconId = "Compass" | "HelpingHand" | "ShieldPlus";

export type WhyWaymakerHighlight = {
  title: string;
  description: string;
  icon: WhyWaymakerIconId;
};

export type WhyWaymakerCopy = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: WhyWaymakerHighlight[];
  ctaLabel: string;
};

export const whyWaymakerCopy: Record<WhyWaymakerLocale, WhyWaymakerCopy> = {
  en: {
    eyebrow: "Why Waymaker",
    title: "Confidence for every classroom",
    description:
      "We guide childcare teams through CPR and first aid with calm, practical coaching so they can focus on caring for families.",
    highlights: [
      {
        title: "Certified guidance",
        description:
          "Accredited instructors translate state requirements into clear, memorable steps.",
        icon: "Compass",
      },
      {
        title: "Built for childcare",
        description:
          "Hands-on practice centered on the realities of preschool and daycare environments.",
        icon: "HelpingHand",
      },
      {
        title: "Support that lasts",
        description:
          "Action sheets and refreshers keep skills sharp long after class ends.",
        icon: "ShieldPlus",
      },
    ],
    ctaLabel: "Schedule your training",
  },
  zh: {
    eyebrow: "Waymaker 優勢",
    title: "讓每一間教室都安心",
    description:
      "我們以沈著、實用的教學，陪伴托育團隊熟練 CPR 與急救流程，把心力留給孩子與家長。",
    highlights: [
      {
        title: "認證專業引導",
        description: "經驗豐富的講師將官方規範轉化成清楚好記的步驟。",
        icon: "Compass",
      },
      {
        title: "幼教場域量身打造",
        description: "練習情境貼近幼兒園與托育中心的日常需求。",
        icon: "HelpingHand",
      },
      {
        title: "課後持續支援",
        description: "提供操作重點與複習指引，課程結束後也能維持敏捷反應。",
        icon: "ShieldPlus",
      },
    ],
    ctaLabel: "預約專屬課程",
  },
};
