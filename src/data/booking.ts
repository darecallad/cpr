import type { LucideIcon } from "lucide-react";
import { Wallet, FileText } from "lucide-react";

export type BookingLocale = "en" | "zh";

export type BookingCopy = {
  title: string;
  intro: string[];
  labels: {
    name: string;
    phone: string;
    email: string;
    organization: string;
    organizationPlaceholder: string;
    session: string;
    sessionPlaceholder: string;
    sessionCustomOption: string;
    preferLanguage: string;
    preferLanguagePlaceholder: string;
    daycareDate: string;
    daycareDatePlaceholder: string;
    customDate: string;
    customDatePlaceholder: string;
    notes: string;
  };
  submit: string;
  assistance: string;
  confirmation: {
    title: string;
    body: string;
  };
  validation: {
    name: string;
    phone: string;
    email: string;
    organization: string;
    session: string;
    daycareDate: string;
    customDate: string;
  };
  payment: {
    heading: string;
    description: string;
    security: string;
    methods: Array<{
      id: PaymentMethodId;
      label: string;
      detail: string;
    }>;
  };
};

export type PaymentMethodId = "paypal" | "venmo" | "check";

export type BookingSession = {
  id: string;
  isoDate: string;
  label: string;
  note?: string;
};

export const upcomingSessions: BookingSession[] = [
  {
    id: "english-session",
    isoDate: "",
    label: "English Session",
    note: "",
  },
  {
    id: "chinese-session",
    isoDate: "",
    label: "中文班",
    note: "",
  },
];

export const bookingCopy: Record<BookingLocale, BookingCopy> = {
  en: {
    title: "Booking",
    intro: [
      "Please fill out the form below to book a course.",
      "We will confirm the date and send payment details as soon as possible.",
    ],
    labels: {
      name: "Name",
      phone: "Phone",
      email: "Email address",
      organization: "Organization",
      organizationPlaceholder: "Select an organization",
      session: "Select a session",
      sessionPlaceholder: "Choose English or Chinese session",
      sessionCustomOption: "Request a custom date",
    preferLanguage: "Preferred Language",
    preferLanguagePlaceholder: "Select a language",
    daycareDate: "Select a Date",
    daycareDatePlaceholder: "Choose a date",
    customDate: "Prefer a different date?",
      customDatePlaceholder: "Share your preferred date or timeframe",
      notes: "Your available dates and times",
    },
    submit: "Submit registration",
    assistance:
      "Need help with your booking? Email us at info@waymakerbiz.com and we will assist you right away.",
    confirmation: {
      title: "Registration received",
      body:
        "Thank you! We have your request on file and will reach out within 24 hours to confirm your session and provide a secure payment link.",
    },
    validation: {
      name: "Please enter your name.",
      phone: "Please provide a phone number.",
      email: "Please provide a valid email address.",
      organization: "Please select an organization.",
      session: "Please select an upcoming session or request a custom date.",
      daycareDate: "Please select a date.",
      customDate: "Let us know your preferred date.",
    },
    payment: {
      heading: "Payment overview",
      description:
        "After we confirm the details, we will send a secure checkout link tailored to your session.",
      security: "All transactions are encrypted and secure.",
      methods: [
        {
          id: "paypal",
          label: "PayPal",
          detail: "Safe and convenient payments through PayPal with buyer protection.",
        },
        {
          id: "venmo",
          label: "Venmo",
          detail: "Fast and easy payments via Venmo for instant processing.",
        },
        {
          id: "check",
          label: "Check",
          detail: "Pay by personal or business check. Details will be provided after confirmation.",
        },
      ],
    },
  },
  zh: {
    title: "預約報名",
    intro: [
      "請填寫以下資訊預約課程。",
      "我們將儘快與您確認開課日期並提供付款連結。",
    ],
    labels: {
      name: "姓名",
      phone: "聯絡電話",
      email: "Email",
      organization: "單位名稱",
      organizationPlaceholder: "選擇單位名稱",
      session: "選擇課程場次",
      sessionPlaceholder: "選擇英文或是中文班",
      sessionCustomOption: "想安排其他日期",
      preferLanguage: "偏好語言",
      preferLanguagePlaceholder: "選擇語言",
      daycareDate: "選擇日期",
      daycareDatePlaceholder: "選擇日期",
      customDate: "想安排其他日期？",
      customDatePlaceholder: "請填寫偏好的日期或時段",
      notes: "您方便的日期和時間",
    },
    submit: "提交報名",
    assistance:
      "需要協助嗎？歡迎來信 info@waymakerbiz.com，我們將盡速協助您。",
    confirmation: {
      title: "已收到您的預約",
      body:
        "感謝您的填寫！我們將在 24 小時內與您聯繫，確認上課場次並提供安全付款連結。",
    },
    validation: {
      name: "請輸入姓名。",
      phone: "請留下聯絡電話。",
      email: "請輸入有效的 Email。",
      organization: "請選擇單位名稱。",
      session: "請選擇場次或告知希望的日期。",
      daycareDate: "請選擇日期。",
      customDate: "請填寫希望安排的日期。",
    },
    payment: {
      heading: "付款方式",
      description: "確認課程後，我們將寄送專屬的安全付款連結。",
      security: "所有交易皆為加密傳輸，安全可靠。",
      methods: [
        {
          id: "paypal",
          label: "PayPal",
          detail: "透過 PayPal 安全便利付款，享有買家保護。",
        },
        {
          id: "venmo",
          label: "Venmo",
          detail: "透過 Venmo 快速付款，即時處理。",
        },
        {
          id: "check",
          label: "支票",
          detail: "可使用個人或公司支票付款。確認後將提供詳細資訊。",
        },
      ],
    },
  },
};

export const paymentMethodIcons: Record<PaymentMethodId, LucideIcon> = {
  paypal: Wallet,
  venmo: Wallet,
  check: FileText,
};
