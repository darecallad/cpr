export type CoursesLocale = "en" | "zh";

export type CourseSummaryItem = {
  label: string;
  value: string;
};

export type CourseScheduleBlock = {
  time: string;
  topic: string;
};

export type CourseCurriculumCategory = {
  name: string;
  bullets: string[];
};

export type CourseDeliveryOption = {
  title: string;
  description: string;
  detail: string;
};

export type CourseFaqItem = {
  question: string;
  answer: string;
};

export type CourseCopy = {
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  summary: CourseSummaryItem[];
  schedule: {
    title: string;
    blocks: CourseScheduleBlock[];
    note: string;
  };
  curriculum: {
    title: string;
    categories: CourseCurriculumCategory[];
  };
  delivery: {
    title: string;
    options: CourseDeliveryOption[];
  };
  pricing: {
    title: string;
    body: string;
    bullets: string[];
  };
  certification: {
    title: string;
    body: string;
  };
  media: {
    caption: string;
  };
  faq: {
    title: string;
    items: CourseFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

export const coursesCopy: Record<CoursesLocale, CourseCopy> = {
  en: {
    hero: {
      eyebrow: "Course Overview",
      title: "EMSA Pediatric CPR & First Aid Training",
      tagline:
        "An 8-hour certification workshop tailored for childcare teams who want calm, confident emergency responders.",
      description:
        "Waymaker brings accredited CPR and first aid instruction directly to preschool and daycare staff. Guided practice, bilingual coaching, and real-world drills ensure every educator is ready before paramedics arrive.",
      primaryCta: "Book your training",
      secondaryCta: "See curriculum",
    },
    summary: [
      { label: "Ideal for", value: "Preschool & childcare providers" },
      { label: "Duration", value: "8 hours · EMSA-compliant" },
      { label: "Format", value: "Hands-on demos, skills labs, scenario coaching" },
      { label: "Languages", value: "English · 中文" },
      { label: "Certification", value: "EMSA Pediatric CPR & First Aid (valid 2 years)" },
      { label: "Tuition", value: "$90 per person · Group discounts available" },
    ],
    schedule: {
      title: "A focused day designed around childcare realities",
      blocks: [
        {
          time: "09:00 – 09:30",
          topic: "Welcome, safety briefing, and readiness assessment",
        },
        {
          time: "09:30 – 12:30",
          topic: "Infant & child CPR + AED operation with guided practice",
        },
        {
          time: "12:30 – 13:30",
          topic: "Lunch break + scenario planning clinic",
        },
        {
          time: "13:30 – 15:30",
          topic: "First aid labs: choking relief, bleeding control, burns, fractures",
        },
        {
          time: "15:30 – 16:30",
          topic: "Emergency simulations, documentation, and certification review",
        },
      ],
      note: "Schedule can adapt to your program’s calendar while staying within EMSA guidelines.",
    },
    curriculum: {
      title: "What your team will master",
      categories: [
        {
          name: "Pediatric CPR & AED",
          bullets: [
            "Airway assessment and rescue breathing for infants and children",
            "One- and two-rescuer CPR cycles with feedback manikins",
            "Safe AED setup, pad placement, and post-event care",
          ],
        },
        {
          name: "High-stakes first aid",
          bullets: [
            "Relieving choking and allergic emergencies, including EpiPen use",
            "Controlling bleeding, splinting fractures, and stabilizing head/neck injuries",
            "Responding to burns, seizures, asthma, dehydration, and playground injuries",
          ],
        },
        {
          name: "Preparedness & communication",
          bullets: [
            "Creating classroom emergency action plans and documentation",
            "Coordinating with parents, administrators, and EMS responders",
            "Maintaining readiness with drills, refreshers, and equipment checks",
          ],
        },
      ],
    },
    delivery: {
      title: "Choose the delivery that fits your site",
      options: [
        {
          title: "On-site workshop",
          description:
            "We bring manikins, AED trainers, and supplies to your campus for a private session aligned with your daily schedule.",
          detail: "Ideal for teams of 8+ participants. Travel within San Jose area included.",
        },
        {
          title: "Waymaker classroom",
          description:
            "Join an open enrollment class at our Torrance training studio featuring bilingual instruction and small-group labs.",
          detail: "Perfect for individual educators or mixed teams. Free parking and refreshments provided.",
        },
        {
          title: "Hybrid refresher",
          description:
            "Complete theory modules online, then schedule a 2-hour in-person skills check to renew certification.",
          detail: "Available to returning clients during the final 6 months of certificate validity.",
        },
      ],
    },
    pricing: {
      title: "Tuition & discounts",
      body:
        "Standard tuition is $90 per participant and includes bilingual instruction, course handbook, and a two-year EMSA certificate with tracking sticker.",
      bullets: [
        "Groups of 8+ receive a 10% discount.",
        "Flexible payment options: Venmo, PayPal, or district purchase order.",
      ],
    },
    certification: {
      title: "Certification credentials you can rely on",
      body:
        "Waymaker is an EMSA-approved training provider. Each participant receives a pediatric CPR & First Aid completion card accepted by California Community Care Licensing and CDSS. Records are retained for compliance audits.",
    },
    media: {
      caption:
        "Guided practice with pediatric manikins builds muscle memory for real emergencies.",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "How long is the certification valid?",
          answer:
            "Your EMSA Pediatric CPR & First Aid certification is valid for two years. We send renewal reminders and offer abbreviated refresher options before expiration.",
        },
        {
          question: "Does the class also cover adult CPR?",
          answer:
            "Yes. While the focus is on infants and children, we demonstrate adult compressions and AED use so your staff can respond to multi-age emergencies on campus.",
        },
        {
          question: "Can you teach at our facility?",
          answer:
            "Absolutely. On-site workshops are our most popular format. Provide a multipurpose room or large classroom and we handle the rest. Minimum group size of 8 participants required for on-site training.",
        },
        {
          question: "What should participants wear or bring?",
          answer:
            "Wear comfortable clothing suitable for kneeling and floor practice. We supply all equipment; optional items include water bottles and agency-specific paperwork.",
        },
      ],
    },
    cta: {
      title: "Ready to train with Waymaker?",
      description:
        "Secure your preferred date and equip every teacher with proven, child-focused emergency skills.",
      button: "Plan a session",
    },
  },
  zh: {
    hero: {
      eyebrow: "課程概覽",
      title: "EMSA 幼兒 CPR 與急救認證課程",
      tagline: "8 小時密集培訓，專為幼兒園與托育團隊打造，讓每位老師都能從容應變。",
      description:
        "Waymaker 將通過認證的 CPR 與急救教學帶到您的教室，結合雙語講解、實作演練與情境模擬，確保在救援人員抵達前，教師就能做出正確行動。",
      primaryCta: "預約課程",
      secondaryCta: "查看課綱",
    },
    summary: [
      { label: "適合對象", value: "幼兒園與托育團隊" },
      { label: "課程時數", value: "8 小時 · 符合 EMSA 規範" },
      {
        label: "課程形式",
        value: "講解示範、技能站實作、情境演練",
      },
      { label: "授課語言", value: "英文 · 中文" },
      { label: "認證證書", value: "EMSA 幼兒 CPR 與急救證書（效期兩年）" },
      { label: "費用", value: "每人 $90 · 團體優惠可洽詢" },
    ],
    schedule: {
      title: "一天完成的專業訓練流程",
      blocks: [
        { time: "09:00 – 09:30", topic: "報到、課程說明與安全自評" },
        { time: "09:30 – 12:30", topic: "嬰幼兒 CPR 與 AED 操作，講師指導實作" },
        { time: "12:30 – 13:30", topic: "午餐休息與情境討論" },
        { time: "13:30 – 15:30", topic: "急救技能站：異物梗塞、止血包紮、燒燙傷、骨折固定" },
        { time: "15:30 – 16:30", topic: "情境演練、文件填寫與認證重點複習" },
      ],
      note: "在符合 EMSA 要求的前提下，可依貴單位時程彈性調整。",
    },
    curriculum: {
      title: "課程重點學會什麼",
      categories: [
        {
          name: "幼兒 CPR 與 AED",
          bullets: [
            "評估呼吸道、為嬰幼兒實施人工呼吸",
            "一人與雙人 CPR 循環，搭配回饋假人練習",
            "正確安裝 AED、貼片位置與事後照護",
          ],
        },
        {
          name: "高風險急救應變",
          bullets: [
            "解除異物梗塞、處理過敏性休克與 EpiPen 施打",
            "控制出血、骨折固定、頭頸部保護",
            "面對燒燙傷、癲癇、氣喘、中暑與戶外受傷",
          ],
        },
        {
          name: "預防與溝通",
          bullets: [
            "建立教室急救流程與文件紀錄",
            "與家長、行政與救護人員的協作分工",
            "透過演練與設備檢查維持長期準備度",
          ],
        },
      ],
    },
    delivery: {
      title: "彈性授課模式",
      options: [
        {
          title: "到校專班",
          description:
            "講師攜帶假人、AED 訓練機與教材到貴單位授課，課程可配合園所作息安排。",
          detail: "適合 8 人以上團隊，San Jose 地區免收車程費。",
        },
        {
          title: "Waymaker 教室",
          description:
            "到 Torrance 教室參加公開場次，小班雙語教學，設有實作站與個別指導。",
          detail: "適合個人或小組報名，提供免費停車與茶點。",
        },
        {
          title: "混成式複訓",
          description:
            "線上完成理論課程，再預約 2 小時實作檢核，快速更新證照。",
          detail: "限證照到期前六個月內的舊客戶申請。",
        },
      ],
    },
    pricing: {
      title: "費用與優惠",
      body:
        "標準學費每人 $90，含雙語講授、教材與附 EMSA 貼紙的兩年期證書。",
      bullets: [
        "8 人以上團體可享 9 折優惠。",
        "提供 Venmo、PayPal 或學區採購單等多元付款方式。",
      ],
    },
    certification: {
      title: "專業認證保證",
      body:
        "Waymaker 為 EMSA 核可培訓機構。完成課程即可取得幼兒 CPR 與急救證書，符合加州社福局與托育機構法規要求，我們協助保存紀錄以供稽核。",
    },
    media: {
      caption: "實際操作嬰幼兒假人，培養面對真實狀況的肌肉記憶。",
    },
    faq: {
      title: "常見問題",
      items: [
        {
          question: "證書效期多久？",
          answer: "EMSA 幼兒 CPR 與急救證書有效期間為兩年，我們會在到期前提醒並提供複訓方案。",
        },
        {
          question: "課程會涵蓋成人 CPR 嗎？",
          answer: "會的。雖然重點放在嬰幼兒，但我們也示範成人按壓與 AED 操作，確保全校應變。",
        },
        {
          question: "可以到我們園所授課嗎？",
          answer: "當然可以。到校專班是最受歡迎的方式，只需提供可容納學員的教室即可。最低需要 8 人以上團體報名才能安排到校授課。",
        },
        {
          question: "學員需要準備什麼？",
          answer: "建議穿著方便跪地練習的服裝。設備由我們提供，可自備水瓶或園所需要的表單。",
        },
      ],
    },
    cta: {
      title: "準備好與 Waymaker 一起守護孩子？",
      description:
        "立即預約專屬課程，讓每位老師都具備沉著可靠的急救能力。",
      button: "立即預約課程",
    },
  },
};
