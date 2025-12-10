export type DaycareLocale = "en" | "zh";

export type DaycareCopy = {
  title: string;
  description: string;
  features: string[];
  cta: string;
};

export const daycareCopy: Record<DaycareLocale, DaycareCopy> = {
  en: {
    title: "Turn Your Passion into a Business",
    description: "Dreaming of running your own daycare? Waymaker guides you through every step of the complex licensing and setup process. We turn confusion into confidence, helping you build a safe, compliant, and thriving childcare center.",
    features: [
      "Step-by-Step Licensing Roadmap",
      "Facility Safety & Design Optimization",
      "Curriculum & Operational Frameworks",
      "Ongoing Business Mentorship"
    ],
    cta: "Start Your Journey",
  },
  zh: {
    title: "將熱情轉化為蓬勃事業",
    description: "夢想擁有自己的托育中心？Waymaker 帶您走過繁瑣的執照申請與籌備過程。我們將複雜的法規轉化為清晰的執行步驟，協助您建立安全、合規且充滿活力的托育園地。",
    features: [
      "一步到位的執照申請地圖",
      "場地安全規劃與設計優化",
      "課程教學與營運管理架構",
      "持續性的創業導師諮詢"
    ],
    cta: "開啟創業之旅",
  },
};
