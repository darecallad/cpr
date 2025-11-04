import type { LucideIcon } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";

type Locale = "en" | "zh";

type SocialId = "facebook" | "instagram";

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  helper?: string;
  inlineNote?: string;
};

type ContactFormCopy = {
  title: string;
  description: string;
  labels: {
    name: string;
    email: string;
    category: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  categories: Array<{
    value: string;
    label: string;
  }>;
  submit: string;
  success: {
    title: string;
    body: string;
  };
  validation: {
    name: string;
    email: string;
    category: string;
    message: string;
  };
};

type LineCtaCopy = {
  title: string;
  body: string;
  button: string;
  href: string;
};

type ContactCopy = {
  hero: {
    title: string;
    description: string;
  };
  details: {
    phone: ContactDetail;
    email: ContactDetail;
    line: ContactDetail;
    address: ContactDetail & { lines: string[] };
    serviceHours: ContactDetail;
  };
  map: {
    title: string;
    iframeSrc: string;
  };
  lineCta: LineCtaCopy;
  form: ContactFormCopy;
  social: Array<{
    id: SocialId;
    label: string;
    href: string;
    srLabel: string;
  }>;
};

export const contactCopy: Record<Locale, ContactCopy> = {
  en: {
    hero: {
      title: "Contact Us",
      description:
        "Reach out to plan a training session, confirm availability, or ask any question about Waymaker CPR programs.",
    },
    details: {
      phone: {
        label: "Phone",
        value: "+1 (424) 555-0198",
        href: "tel:+14245550198",
      },
      email: {
        label: "Email",
        value: "hello@waymakercpr.com",
        href: "mailto:hello@waymakercpr.com",
      },
      line: {
        label: "LINE",
        value: "@waymaker",
        href: "https://line.me/R/ti/p/@waymaker",
        helper: "Add us on LINE for instant replies.",
      },
      address: {
        label: "Training studio",
        value: "25386 Seaboard Ave",
        lines: ["25386 Seaboard Ave", "San Jose, CA 95131"],
        href: "https://maps.google.com/?q=25386+Seaboard+Ave+San+Jose+CA+95131",
      },
      serviceHours: {
        label: "Service hours",
        value: "Monday – Friday · 9:00 AM – 6:00 PM PT",
      },
    },
    map: {
      title: "Visit the Waymaker studio",
      iframeSrc:
        "https://www.google.com/maps?q=25386%20Seaboard%20Ave%2C%20San%20Jose%2C%20CA%2095131&output=embed",
    },
    lineCta: {
      title: "LINE concierge support",
      body: "Prefer a quick chat? Our bilingual instructors respond fastest on LINE. Share your schedule and we’ll guide you step by step.",
      button: "Add us on LINE",
      href: "https://line.me/R/ti/p/@waymaker",
    },
    form: {
      title: "Get in touch",
      description:
        "Send us your questions and we’ll follow up within one business day.",
      labels: {
        name: "Name",
        email: "Email",
        category: "Inquiry type",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        message: "Tell us how we can help…",
      },
      categories: [
        { value: "course", label: "Course inquiry" },
        { value: "partnership", label: "Partnership proposal" },
        { value: "other", label: "Other" },
      ],
      submit: "Send message",
      success: {
        title: "Thanks for reaching out!",
        body: "We’ve received your message and will respond within 24 hours. Watch for an email from hello@waymakercpr.com.",
      },
      validation: {
        name: "Please enter your name.",
        email: "Please provide a valid email address.",
        category: "Select the topic that best fits your inquiry.",
        message: "Please share a brief message so we can assist you.",
      },
    },
    social: [
      {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/waymakercpr",
        srLabel: "Visit our Facebook page",
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/waymakercpr",
        srLabel: "Visit our Instagram profile",
      },
    ],
  },
  zh: {
    hero: {
      title: "聯絡我們",
      description:
        "預約課程、確認檔期或想進一步了解 Waymaker CPR，歡迎隨時與我們聯繫。",
    },
    details: {
      phone: {
        label: "聯絡電話",
        value: "+1 (424) 555-0198",
        href: "tel:+14245550198",
      },
      email: {
        label: "電子郵件",
        value: "hello@waymakercpr.com",
        href: "mailto:hello@waymakercpr.com",
      },
      line: {
        label: "LINE 客服",
        value: "@waymaker",
        href: "https://line.me/R/ti/p/@waymaker",
        helper: "加入 LINE 享即時雙語回覆。",
      },
      address: {
        label: "培訓教室",
        value: "25386 Seaboard Ave",
        lines: ["25386 Seaboard Ave", "San Jose, CA 95131"],
        href: "https://maps.google.com/?q=25386+Seaboard+Ave+San+Jose+CA+95131",
      },
      serviceHours: {
        label: "服務時間",
        value: "週一至週五 · 09:00-18:00 (太平洋時間)",
      },
    },
    map: {
      title: "Waymaker 培訓中心位置",
      iframeSrc:
        "https://www.google.com/maps?q=25386%20Seaboard%20Ave%2C%20San%20Jose%2C%20CA%2095131&output=embed",
    },
    lineCta: {
      title: "LINE 即時客服",
      body: "想快速諮詢？加入 LINE，雙語講師會立即協助您安排課程並提供報名資訊。",
      button: "加入 LINE",
      href: "https://line.me/R/ti/p/@waymaker",
    },
    form: {
      title: "留下訊息",
      description: "填寫表單後，我們會在一個工作天內回覆您。",
      labels: {
        name: "姓名",
        email: "Email",
        category: "諮詢類型",
        message: "訊息內容",
      },
      placeholders: {
        name: "請輸入您的姓名",
        email: "name@example.com",
        message: "請告訴我們需求或想了解的內容…",
      },
      categories: [
        { value: "course", label: "課程詢問" },
        { value: "partnership", label: "合作提案" },
        { value: "other", label: "其他" },
      ],
      submit: "送出訊息",
      success: {
        title: "已成功送出！",
        body: "我們已收到您的訊息，將在 24 小時內以 hello@waymakercpr.com 回覆您。",
      },
      validation: {
        name: "請輸入姓名。",
        email: "請確認 Email 填寫正確。",
        category: "請選擇諮詢類型。",
        message: "請簡述您的需求，以便我們提供協助。",
      },
    },
    social: [
      {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/waymakercpr",
        srLabel: "前往 Waymaker Facebook 粉絲專頁",
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/waymakercpr",
        srLabel: "前往 Waymaker Instagram",
      },
    ],
  },
};

export const socialIcons: Record<SocialId, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
};
