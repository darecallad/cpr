export type BrandMissionLocale = "en" | "zh";

export type BrandMissionIconId = "ShieldCheck" | "HeartHandshake" | "Sparkles";

export type BrandMissionValue = {
  title: string;
  description: string;
  icon: BrandMissionIconId;
};

export type BrandMissionCopy = {
  heading: string;
  tagline: string;
  intro: string;
  description: string;
  valuesHeading: string;
  values: BrandMissionValue[];
  ctaLabel: string;
  ctaHref: string;
  ctaQuote: string;
};

export const brandMissionCopy: Record<BrandMissionLocale, BrandMissionCopy> = {
  en: {
    heading: "Our Mission",
    tagline: "Guiding the way to safety, safeguarding every life.",
    intro:
      "Waymaker empowers childcare teams with calm, compassionate CPR and first aid training so every classroom has a confident guardian.",
    description:
      "We stand beside educators and caregivers as a trusted guide—turning complex emergency protocols into practical, memorable skills.",
    valuesHeading: "What Waymaker means",
    values: [
      {
        title: "Lead with expertise",
        description:
          "State-accredited instructors deliver evidence-based CPR and first aid practices tailored for childcare environments.",
        icon: "ShieldCheck",
      },
      {
        title: "Care with empathy",
        description:
          "Our training culture stays warm and supportive so every participant feels safe to ask questions and practice hands-on skills.",
        icon: "HeartHandshake",
      },
      {
        title: "Inspire confidence",
        description:
          "Interactive scenarios help staff respond decisively during the critical moments before emergency teams arrive.",
        icon: "Sparkles",
      },
    ],
    ctaLabel: "Explore our courses",
    ctaHref: "/courses",
    ctaQuote:
      "Waymaker stands for compassionate guidance—helping every educator become a lifesaver.",
  },
  zh: {
    heading: "品牌使命",
    tagline: "引領安全之路，守護生命之旅。",
    intro:
      "Waymaker 陪伴幼教與托育團隊，以溫暖專業的 CPR 與急救訓練，讓教室裡的每一位老師都能安心守護孩子。",
    description:
      "我們作為值得信賴的引路人，把繁複的急救流程轉化成貼近日常、容易記住的實作技巧。",
    valuesHeading: "Waymaker 代表的價值",
    values: [
      {
        title: "專業領航",
        description:
          "具備官方認證的講師，以幼兒照護情境為核心，教授最新、最可靠的 CPR 與急救法。",
        icon: "ShieldCheck",
      },
      {
        title: "同理陪伴",
        description:
          "課堂氛圍溫暖友善，鼓勵學員自在提問、親手演練，建立對急救的信心。",
        icon: "HeartHandshake",
      },
      {
        title: "自信應變",
        description:
          "透過情境模擬練習，在救援人員抵達前，也能沉著做出正確判斷與行動。",
        icon: "Sparkles",
      },
    ],
    ctaLabel: "了解課程內容",
    ctaHref: "/courses",
    ctaQuote: "Waymaker 代表溫暖的引導與守護，讓每位教育者都能成為孩子的守護者。",
  },
};
