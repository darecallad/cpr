export type DaycareValueLocale = "en" | "zh";

export type DaycareValueItem = {
  title: string;
  description: string;
  icon: "TrendingUp" | "ShieldCheck" | "Heart";
};

export type DaycareValueCopy = {
  title: string;
  subtitle: string;
  items: DaycareValueItem[];
};

export const daycareValueCopy: Record<DaycareValueLocale, DaycareValueCopy> = {
  en: {
    title: "Why Start a Daycare Now?",
    subtitle: "The demand for quality childcare in California has never been higher.",
    items: [
      {
        title: "High Market Demand",
        description: "Parents are struggling to find spots. Waitlists are long, and quality care is scarce.",
        icon: "TrendingUp",
      },
      {
        title: "Stable & Scalable Income",
        description: "Build a recession-resistant business with consistent monthly revenue and growth potential.",
        icon: "ShieldCheck",
      },
      {
        title: "Meaningful Impact",
        description: "Create a safe haven for children and support working families in your community.",
        icon: "Heart",
      },
    ],
  },
  zh: {
    title: "為什麼現在是開設托育中心的最佳時機？",
    subtitle: "加州對優質托育服務的需求正處於歷史高峰。",
    items: [
      {
        title: "龐大的市場需求",
        description: "家長一位難求。候補名單大排長龍，優質的托育服務供不應求。",
        icon: "TrendingUp",
      },
      {
        title: "穩定且可擴展的收入",
        description: "建立抗衰退的商業模式，擁有穩定的月收入與持續成長的潛力。",
        icon: "ShieldCheck",
      },
      {
        title: "深遠的社會影響力",
        description: "為孩子創造安全的成長環境，同時成為社區雙薪家庭的堅強後盾。",
        icon: "Heart",
      },
    ],
  },
};
