export type HeroLocale = "en" | "zh";

export type HeroCopy = {
  title: string;
  description: string;
  cta: string;
};

export const heroCopy: Record<HeroLocale, HeroCopy> = {
  en: {
    title: "Professional Training\nCaring Support",
    description:
      "Waymaker provides professional and compassionate CPR and first aid training for daycare and childcare facilities. Our engaging courses equip educators.",
    cta: "BOOK NOW",
  },
  zh: {
    title: "專業守護\n安心相伴",
    description:
      "Waymaker 致力於為幼兒園與托育機構提供專業且貼心的 CPR 與急救培訓，幫助每位教育者成為孩子的生命守護者。",
    cta: "立即預約",
  },
};
