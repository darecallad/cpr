export type DaycareLocale = "en" | "zh";

export type DaycarePageCopy = {
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    primaryCta: string;
  };
  features: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: "Book" | "Layout" | "Users";
    }[];
  };
  process: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  successStories: {
    title: string;
    description: string;
    stories: {
      name: string;
      image?: string;
      url?: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

export const daycarePageCopy: Record<DaycareLocale, DaycarePageCopy> = {
  en: {
    hero: {
      eyebrow: "Daycare Consulting",
      title: "Build Your Dream Daycare With Confidence",
      tagline: "From licensing to launch, we guide you every step of the way.",
      description: "Starting a daycare is a complex journey. Waymaker provides the expert mentorship, regulatory knowledge, and strategic planning you need to turn your vision into a thriving, compliant business.",
      primaryCta: "Book a Consultation",
    },
    features: {
      title: "Comprehensive Support System",
      description: "We don't just hand you a checklist; we partner with you to build a foundation for success.",
      items: [
        {
          title: "Licensing Mastery",
          description: "Navigate the maze of state regulations, paperwork, and inspections with an expert by your side.",
          icon: "Book",
        },
        {
          title: "Environment Design",
          description: "Create safe, engaging, and compliant learning spaces that parents and children will love.",
          icon: "Layout",
        },
        {
          title: "Business Strategy",
          description: "Develop a solid business plan, tuition structure, and marketing strategy to ensure profitability.",
          icon: "Users",
        },
      ],
    },
    process: {
      title: "Your Path to Opening",
      steps: [
        {
          number: "01",
          title: "Vision & Feasibility",
          description: "We assess your goals, budget, and location to create a realistic roadmap.",
        },
        {
          number: "02",
          title: "Licensing & Compliance",
          description: "We guide you through the application packet, pre-licensing inspections, and safety requirements.",
        },
        {
          number: "03",
          title: "Setup & Curriculum",
          description: "Design your space, select materials, and define your educational philosophy.",
        },
        {
          number: "04",
          title: "Launch & Growth",
          description: "Marketing strategies, enrollment management, and grand opening support.",
        },
      ],
    },
    successStories: {
      title: "Success Stories",
      description: "See how we've helped other educators launch their dream daycares.",
      stories: [
        { name: "Sunny Child Care", image: "/partners/sunnychildcare-new.svg", url: "https://www.sunnychildcare.com/" },
        { name: "Sunny Garden Daycare", image: "/partners/sunnygarden.svg" },
        { name: "Sweet Butterfly Daycare", image: "/partners/sweetbutterfly.svg" },
        { name: "Apple Tree Daycare", image: "/partners/appletree.svg" },
        { name: "Do Do Kids Daycare", image: "/partners/dodokids.svg" },
        { name: "Clever Kidz Daycare", image: "/partners/cleverkidz.svg" },
        { name: "Bright Sky Daycare", image: "/partners/brightsky.svg" },
        { name: "Little Dreamer Daycare", image: "/partners/littledreamer.svg" },
        { name: "Little Pine Tree Daycare", image: "/partners/littlepinetree.svg" },
        { name: "Little Sprouts Daycare", image: "/partners/littlesprouts.svg" },
        { name: "Wonderland Daycare", image: "/partners/wonderland.svg" },
        { name: "Apple Land Daycare", image: "/partners/appleland.svg" },
        { name: "Skyland Daycare", image: "/partners/skyland.svg" },
      ],
    },
    cta: {
      title: "Ready to Start Your Business?",
      description: "Don't let the paperwork stop you. Let's build something amazing together.",
      button: "Schedule Free Call",
    },
  },
  zh: {
    hero: {
      eyebrow: "托育創業諮詢",
      title: "自信打造您夢想中的托育中心",
      tagline: "從執照申請到正式開幕，我們全程陪伴指引。",
      description: "開設托育中心是一段充滿挑戰的旅程。Waymaker 提供專業的導師諮詢、法規指導與策略規劃，協助您將願景轉化為安全、合規且蓬勃發展的事業。",
      primaryCta: "預約諮詢",
    },
    features: {
      title: "全方位的支持系統",
      description: "我們不只給您一張檢查表，而是與您合作建立成功的基石。",
      items: [
        {
          title: "執照申請攻略",
          description: "有專家在旁協助，輕鬆駕馭繁瑣的州法規、文書作業與現場檢查。",
          icon: "Book",
        },
        {
          title: "環境空間設計",
          description: "打造安全、合規且充滿啟發性的學習空間，贏得家長與孩子的喜愛。",
          icon: "Layout",
        },
        {
          title: "商業營運策略",
          description: "制定穩健的商業計畫、學費結構與行銷策略，確保營運獲利。",
          icon: "Users",
        },
      ],
    },
    process: {
      title: "您的開業之路",
      steps: [
        {
          number: "01",
          title: "願景與評估",
          description: "評估您的目標、預算與地點，制定切實可行的執行藍圖。",
        },
        {
          number: "02",
          title: "執照與合規",
          description: "引導您完成申請文件、預審檢查與各項安全規範要求。",
        },
        {
          number: "03",
          title: "籌備與課程",
          description: "規劃空間動線、挑選教材教具，並確立您的教育核心理念。",
        },
        {
          number: "04",
          title: "開幕與成長",
          description: "招生行銷策略、註冊管理與開幕活動支援。",
        },
      ],
    },
    successStories: {
      title: "成功案例",
      description: "看看我們如何協助其他教育者實現開設托育中心的夢想。",
      stories: [
        { name: "Sunny Child Care", image: "/partners/sunnychildcare-new.svg", url: "https://www.sunnychildcare.com/" },
        { name: "Sunny Garden Daycare", image: "/partners/sunnygarden.svg" },
        { name: "Sweet Butterfly Daycare", image: "/partners/sweetbutterfly.svg" },
        { name: "Apple Tree Daycare", image: "/partners/appletree.svg" },
        { name: "Do Do Kids Daycare", image: "/partners/dodokids.svg" },
        { name: "Clever Kidz Daycare", image: "/partners/cleverkidz.svg" },
        { name: "Bright Sky Daycare", image: "/partners/brightsky.svg" },
        { name: "Little Dreamer Daycare", image: "/partners/littledreamer.svg" },
        { name: "Little Pine Tree Daycare", image: "/partners/littlepinetree.svg" },
        { name: "Little Sprouts Daycare", image: "/partners/littlesprouts.svg" },
        { name: "Wonderland Daycare", image: "/partners/wonderland.svg" },
        { name: "Apple Land Daycare", image: "/partners/appleland.svg" },
        { name: "Skyland Daycare", image: "/partners/skyland.svg" },
      ],
    },
    cta: {
      title: "準備好開啟您的事業了嗎？",
      description: "別讓繁瑣的文書工作阻礙您。讓我們一起打造精彩的托育園地。",
      button: "預約免費諮詢",
    },
  },
};
