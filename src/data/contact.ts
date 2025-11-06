import type { LucideIcon } from "lucide-react";

type Locale = "en" | "zh";

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

type ContactCopy = {
  hero: {
    title: string;
    description: string;
  };
  details: {
    email: ContactDetail;
    address: ContactDetail & { lines: string[] };
    serviceHours: ContactDetail;
  };
  map: {
    title: string;
    iframeSrc: string;
  };
  form: ContactFormCopy;
};

export const contactCopy: Record<Locale, ContactCopy> = {
  en: {
    hero: {
      title: "Contact Us",
      description:
        "Reach out to plan a training session, confirm availability, or ask any question about Waymaker CPR programs.",
    },
    details: {
      email: {
        label: "Email",
        value: "info@waymakerbiz.com",
        href: "mailto:info@waymakerbiz.com",
      },
      address: {
        label: "Training studio",
        value: "2586 Seaboard Ave",
        lines: ["2586 Seaboard Ave", "San Jose, CA 95131"],
        href: "https://maps.google.com/?q=2586+Seaboard+Ave+San+Jose+CA+95131",
      },
      serviceHours: {
        label: "Service hours",
        value: "Monday – Friday · 9:00 AM – 6:00 PM PT",
      },
    },
    map: {
      title: "Visit the Waymaker studio",
      iframeSrc:
        "https://www.google.com/maps?q=2586%20Seaboard%20Ave%2C%20San%20Jose%2C%20CA%2095131&output=embed",
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
        body: "We've received your message and will respond within 24 hours. Watch for an email from info@waymakerbiz.com.",
      },
      validation: {
        name: "Please enter your name.",
        email: "Please provide a valid email address.",
        category: "Select the topic that best fits your inquiry.",
        message: "Please share a brief message so we can assist you.",
      },
    },
  },
  zh: {
    hero: {
      title: "聯絡我們",
      description:
        "預約課程、確認檔期或想進一步了解 Waymaker CPR，歡迎隨時與我們聯繫。",
    },
    details: {
      email: {
        label: "電子郵件",
        value: "info@waymakerbiz.com",
        href: "mailto:info@waymakerbiz.com",
      },
      address: {
        label: "培訓教室",
        value: "2586 Seaboard Ave",
        lines: ["2586 Seaboard Ave", "San Jose, CA 95131"],
        href: "https://maps.google.com/?q=2586+Seaboard+Ave+San+Jose+CA+95131",
      },
      serviceHours: {
        label: "服務時間",
        value: "週一至週五 · 09:00-18:00 (太平洋時間)",
      },
    },
    map: {
      title: "Waymaker 培訓中心位置",
      iframeSrc:
        "https://www.google.com/maps?q=2586%20Seaboard%20Ave%2C%20San%20Jose%2C%20CA%2095131&output=embed",
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
        body: "我們已收到您的訊息，將在 24 小時內以 info@waymakerbiz.com 回覆您。",
      },
      validation: {
        name: "請輸入姓名。",
        email: "請確認 Email 填寫正確。",
        category: "請選擇諮詢類型。",
        message: "請簡述您的需求，以便我們提供協助。",
      },
    },
  },
};
