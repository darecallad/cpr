// src/data/seo.ts
export const seoData = {
  courses: {
    en: {
      title: "CPR Courses | EMSA Pediatric CPR & First Aid Training - Waymaker CPR",
      description:
        "EMSA-approved pediatric CPR and first aid courses for childcare providers in San Jose. Bilingual instruction, hands-on practice, 2-year certification. On-site and studio classes available.",
      keywords: [
        "EMSA pediatric CPR course",
        "childcare first aid training",
        "CPR certification San Jose",
        "daycare CPR requirements",
        "bilingual CPR instruction",
        "on-site CPR training",
        "California childcare certification",
        "兒童心肺復甦術課程",
      ],
    },
    zh: {
      title: "CPR 課程 | EMSA 認證兒童心肺復甦術與急救訓練 - Waymaker CPR",
      description:
        "聖荷西地區 EMSA 認證的兒童心肺復甦術與急救課程，專為托育人員設計。提供中英文雙語教學、實作演練、2年有效證書。可到府或工作室上課。",
      keywords: [
        "EMSA 兒童 CPR 課程",
        "托育急救訓練",
        "聖荷西 CPR 證照",
        "托兒所 CPR 要求",
        "雙語 CPR 教學",
        "到府 CPR 訓練",
        "加州托育證照",
        "pediatric CPR course",
      ],
    },
  },
  booking: {
    en: {
      title: "Book CPR Training | Schedule Your EMSA Certification - Waymaker CPR",
      description:
        "Book your EMSA-certified CPR and first aid training in San Jose. Choose from upcoming sessions or request custom on-site training for your childcare facility. Easy online booking.",
      keywords: [
        "book CPR training San Jose",
        "schedule CPR class",
        "EMSA certification booking",
        "on-site CPR training",
        "childcare CPR appointment",
        "預約 CPR 課程",
        "CPR 訓練預約",
      ],
    },
    zh: {
      title: "預約 CPR 訓練 | 預定 EMSA 認證課程 - Waymaker CPR",
      description:
        "在聖荷西預約您的 EMSA 認證心肺復甦術與急救訓練。選擇即將開課的場次，或要求客製化到府訓練。線上預約簡單方便。",
      keywords: [
        "預約聖荷西 CPR 訓練",
        "安排 CPR 課程",
        "EMSA 認證預約",
        "到府 CPR 訓練",
        "托育 CPR 預約",
        "book CPR training",
        "schedule CPR class",
      ],
    },
  },
  contact: {
    en: {
      title: "Contact Us | Waymaker CPR Training - San Jose, CA",
      description:
        "Contact Waymaker CPR Training in San Jose. Email us at info@waymakerbiz.com or visit us at 2586 Seaboard Ave. We offer bilingual support for all your CPR training needs.",
      keywords: [
        "contact CPR training San Jose",
        "Waymaker CPR contact",
        "CPR instructor email",
        "San Jose CPR location",
        "聯絡 CPR 訓練",
        "心肺復甦術聯絡方式",
      ],
    },
    zh: {
      title: "聯絡我們 | Waymaker CPR 訓練 - 加州聖荷西",
      description:
        "聯絡聖荷西的 Waymaker CPR 訓練中心。透過 info@waymakerbiz.com 與我們聯繫，或前往 2586 Seaboard Ave。我們提供雙語支援，滿足您的 CPR 訓練需求。",
      keywords: [
        "聯絡聖荷西 CPR 訓練",
        "Waymaker CPR 聯絡方式",
        "CPR 教練電郵",
        "聖荷西 CPR 位置",
        "contact CPR training",
        "CPR contact information",
      ],
    },
  },
  partners: {
    en: {
      title: "Top Daycares in San Jose | Waymaker Partner Network",
      description:
        "Find the best daycares in San Jose, Sunnyvale, and Santa Clara. Explore our network of trusted, CPR-certified childcare providers committed to safety and excellence.",
      keywords: [
        "San Jose daycare",
        "best daycare San Jose",
        "child care San Jose",
        "preschool San Jose",
        "partner daycares San Jose",
        "trusted daycares Sunnyvale",
        "childcare providers Santa Clara",
        "Waymaker CPR partners",
        "preschools with CPR certified staff",
        "daycare tour guidelines",
      ],
    },
    zh: {
      title: "聖荷西優質幼兒園推薦 | Waymaker 合作夥伴",
      description:
        "探索我們在聖荷西、桑尼維爾和聖塔克拉拉的合作幼兒園與托兒所網絡。尋找致力於安全與卓越品質的優質托育服務。",
      keywords: [
        "聖荷西幼兒園",
        "聖荷西托兒所",
        "San Jose daycare",
        "聖荷西合作幼兒園",
        "桑尼維爾優質托兒所",
        "聖塔克拉拉托育服務",
        "Waymaker CPR 合作夥伴",
        "CPR 認證幼兒園",
        "參觀托兒所須知",
      ],
    },
  },
  consulting: {
    en: {
      title: "Daycare Consulting | Start Your Childcare Business - Waymaker CPR",
      description:
        "Expert guidance for starting a daycare in California. From licensing and compliance to curriculum and business strategy, Waymaker helps you build a successful childcare center.",
      keywords: [
        "start a daycare California",
        "daycare licensing consulting",
        "childcare business plan",
        "preschool setup guide",
        "daycare compliance help",
        "opening a daycare",
        "childcare mentorship",
        "開設托兒所",
      ],
    },
    zh: {
      title: "托育創業諮詢 | 開設您的托育中心 - Waymaker CPR",
      description:
        "加州托育創業的專業指南。從執照申請、法規合規到課程規劃與商業策略，Waymaker 協助您建立成功的托育中心。",
      keywords: [
        "加州開設托兒所",
        "托育中心執照諮詢",
        "幼兒園創業計畫",
        "托兒所籌備指南",
        "托育法規協助",
        "如何開托兒所",
        "幼教創業導師",
        "daycare consulting",
      ],
    },
  },
} as const;

export type SEOPage = keyof typeof seoData;
export type SEOLocale = "en" | "zh";
