export type HeroLocale = "en" | "zh";

export type HeroCopy = {
  title: string;
  description: string;
  ctaCpr: string;
  ctaDaycare: string;
};

export const heroCopy: Record<HeroLocale, HeroCopy> = {
  en: {
    title: "Empowering Educators\nBuilding Futures",
    description:
      "Waymaker provides professional CPR training and expert guidance for starting your own daycare. We support your journey in childcare from certification to business ownership.",
    ctaCpr: "Book CPR Class",
    ctaDaycare: "Start a Daycare",
  },
  zh: {
    title: "賦能教育者\n共創未來",
    description:
      "Waymaker 提供專業的 CPR 培訓與托育中心創業輔導。從急救認證到建立自己的托育事業，我們全程支持您的職涯發展。",
    ctaCpr: "預約 CPR 課程",
    ctaDaycare: "開啟托育事業",
  },
};
