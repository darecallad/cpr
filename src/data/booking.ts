import type { LucideIcon } from "lucide-react";
import { CreditCard, FileText, Wallet } from "lucide-react";

export type BookingLocale = "en" | "zh";

export type BookingCopy = {
  title: string;
  intro: string[];
  labels: {
    name: string;
    phone: string;
    email: string;
    organization: string;
    session: string;
    sessionPlaceholder: string;
    sessionCustomOption: string;
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
    session: string;
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

export type PaymentMethodId = "cards" | "wallets" | "invoice";

export type BookingSession = {
  id: string;
  isoDate: string;
  label: string;
  note?: string;
};

export const upcomingSessions: BookingSession[] = [
  {
    id: "session-1",
    isoDate: "2025-12-03T17:00:00.000Z",
    label: "December 3 · Torrance Studio",
    note: "Hands-on workshop · 9:00 AM – 5:00 PM",
  },
  {
    id: "session-2",
    isoDate: "2026-01-10T17:00:00.000Z",
    label: "January 10 · On-site (Greater LA)",
    note: "Private group · 8:30 AM – 4:30 PM",
  },
  {
    id: "session-3",
    isoDate: "2026-02-07T17:00:00.000Z",
    label: "February 7 · Torrance Studio",
    note: "Open enrollment · 9:00 AM – 5:00 PM",
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
      organization: "Organization (optional)",
      session: "Select a session",
      sessionPlaceholder: "Choose an upcoming training date",
  sessionCustomOption: "Request a custom date",
      customDate: "Prefer a different date?",
      customDatePlaceholder: "Share your preferred date or timeframe",
      notes: "Additional requests",
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
      session: "Please select an upcoming session or request a custom date.",
      customDate: "Let us know your preferred date.",
    },
    payment: {
      heading: "Payment overview",
      description:
        "After we confirm the details, we will send a secure checkout link tailored to your session.",
      security: "All transactions are encrypted. We never store your card information.",
      methods: [
        {
          id: "cards",
          label: "Credit & debit cards",
          detail: "Visa, Mastercard, and American Express supported with instant receipts.",
        },
        {
          id: "wallets",
          label: "Digital wallets",
          detail: "Apple Pay and Google Pay available for returning clients.",
        },
        {
          id: "invoice",
          label: "District or group invoices",
          detail: "Purchase orders and ACH payments accepted for schools and agencies.",
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
      organization: "單位名稱（選填）",
      session: "選擇課程場次",
      sessionPlaceholder: "請選擇即將開課的日期",
  sessionCustomOption: "想安排其他日期",
      customDate: "想安排其他日期？",
      customDatePlaceholder: "請填寫偏好的日期或時段",
      notes: "備註需求",
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
      session: "請選擇場次或告知希望的日期。",
      customDate: "請填寫希望安排的日期。",
    },
    payment: {
      heading: "付款方式",
      description: "確認課程後，我們將寄送專屬的安全付款連結。",
      security: "所有交易皆為加密傳輸，網站不會儲存您的信用卡資訊。",
      methods: [
        {
          id: "cards",
          label: "信用卡 / 金融卡",
          detail: "支援 Visa、Mastercard、American Express，付款完成立即寄發收據。",
        },
        {
          id: "wallets",
          label: "行動支付",
          detail: "Apple Pay、Google Pay 等快速支付方式將陸續開放。",
        },
        {
          id: "invoice",
          label: "團體轉帳 / 匯款",
          detail: "學校、機構可申請匯款或採購單付款，我們會提供帳戶與收據。",
        },
      ],
    },
  },
};

export const paymentMethodIcons: Record<PaymentMethodId, LucideIcon> = {
  cards: CreditCard,
  wallets: Wallet,
  invoice: FileText,
};
