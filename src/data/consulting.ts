export type ConsultingLocale = "en" | "zh";

export type ConsultingSummaryItem = {
  label: string;
  value: string;
};

export type ConsultingServiceItem = {
  title: string;
  description: string;
  features: string[];
};

export type ConsultingCopy = {
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  summary: ConsultingSummaryItem[];
  services: {
    title: string;
    items: ConsultingServiceItem[];
  };
  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
};

export const consultingCopy: Record<ConsultingLocale, ConsultingCopy> = {
  en: {
    hero: {
      eyebrow: "Daycare Consulting",
      title: "Start Your Daycare Business",
      tagline: "Expert guidance from licensing to launch",
      description: "We provide comprehensive consulting services to help you navigate the complex process of starting and running a successful daycare center in California.",
      primaryCta: "Book Consultation",
      secondaryCta: "Our Services",
    },
    summary: [
      { label: "Experience", value: "10+ Years" },
      { label: "Success Rate", value: "100% Licensed" },
      { label: "Support", value: "Full Guidance" },
    ],
    services: {
      title: "Our Consulting Services",
      items: [
        {
          title: "Licensing Assistance",
          description: "Navigate California Title 22 regulations with ease.",
          features: ["Application preparation", "Site inspection readiness", "Policy & procedure manuals"],
        },
        {
          title: "Business Setup",
          description: "Build a solid foundation for your childcare business.",
          features: ["Business plan development", "Budgeting & financial planning", "Marketing strategy"],
        },
        {
          title: "Staff Training",
          description: "Ensure your team is qualified and compliant.",
          features: ["CPR & First Aid certification", "Health & Safety training", "Curriculum development"],
        },
      ],
    },
    process: {
      title: "How We Work",
      steps: [
        { title: "Initial Consultation", description: "We assess your goals and readiness." },
        { title: "Strategy Planning", description: "We create a roadmap for your licensing and launch." },
        { title: "Implementation", description: "We guide you through every step of the application." },
        { title: "Launch & Support", description: "We help you open your doors and provide ongoing support." },
      ],
    },
  },
  zh: {
    hero: {
      eyebrow: "托育中心創業顧問",
      title: "開啟您的托育事業",
      tagline: "從執照申請到開業的專業輔導",
      description: "我們提供全方位的顧問服務，協助您順利通過加州托育法規要求，成功創辦並經營您的托育中心。",
      primaryCta: "預約諮詢",
      secondaryCta: "服務項目",
    },
    summary: [
      { label: "專業經驗", value: "10年以上" },
      { label: "成功率", value: "100% 獲照" },
      { label: "支持", value: "全程輔導" },
    ],
    services: {
      title: "我們的顧問服務",
      items: [
        {
          title: "執照申請協助",
          description: "輕鬆應對加州 Title 22 法規要求。",
          features: ["申請文件準備", "場地檢查預備", "政策與流程手冊"],
        },
        {
          title: "商業設立",
          description: "為您的托育事業建立穩固基礎。",
          features: ["商業計劃書撰寫", "預算與財務規劃", "市場行銷策略"],
        },
        {
          title: "員工培訓",
          description: "確保您的團隊符合資格與合規要求。",
          features: ["CPR 與急救認證", "健康與安全培訓", "課程發展"],
        },
      ],
    },
    process: {
      title: "服務流程",
      steps: [
        { title: "初步諮詢", description: "評估您的目標與準備情況。" },
        { title: "策略規劃", description: "制定執照申請與開業路線圖。" },
        { title: "執行實施", description: "引導您完成申請的每一步驟。" },
        { title: "開業與支持", description: "協助您順利開業並提供持續支持。" },
      ],
    },
  },
};
