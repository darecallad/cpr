import { CalendarCheck2, GraduationCap, CheckCircle2, ClipboardList, Building2, Rocket } from "lucide-react";

export type ProcessStep = {
  title: string;
  description: string;
  icon: any; // Lucide icon component
};

export type ProcessFlow = {
  label: string;
  steps: ProcessStep[];
};

export type ProcessCopy = {
  eyebrow: string;
  title: string;
  cpr: ProcessFlow;
  daycare: ProcessFlow;
};

export const processCopy = {
  en: {
    eyebrow: "How it works",
    title: "Your Path to Success",
    cpr: {
      label: "CPR Certification",
      steps: [
        {
          title: "Book Your Class",
          description: "Choose a time that fits your schedule. We offer flexible onsite and studio options.",
          icon: CalendarCheck2,
        },
        {
          title: "Hands-on Training",
          description: "Learn from experts with real-world scenarios and interactive practice.",
          icon: GraduationCap,
        },
        {
          title: "Get Certified",
          description: "Receive your EMSA-approved certification card immediately upon completion.",
          icon: CheckCircle2,
        },
      ],
    },
    daycare: {
      label: "Daycare Setup",
      steps: [
        {
          title: "Consultation",
          description: "We assess your goals, location, and readiness to start your daycare journey.",
          icon: ClipboardList,
        },
        {
          title: "Licensing & Setup",
          description: "Guided support through complex paperwork, facility preparation, and inspections.",
          icon: Building2,
        },
        {
          title: "Launch Business",
          description: "Open your doors with confidence, equipped with operational best practices.",
          icon: Rocket,
        },
      ],
    },
  },
  zh: {
    eyebrow: "流程介紹",
    title: "您的成功之路",
    cpr: {
      label: "CPR 認證培訓",
      steps: [
        {
          title: "預約課程",
          description: "選擇適合您的時間。我們提供彈性的到府教學或教室課程。",
          icon: CalendarCheck2,
        },
        {
          title: "實作演練",
          description: "透過情境模擬與互動教學，確實掌握急救關鍵技巧。",
          icon: GraduationCap,
        },
        {
          title: "取得證照",
          description: "課程結束後立即核發 EMSA 認證卡，符合法規要求。",
          icon: CheckCircle2,
        },
      ],
    },
    daycare: {
      label: "托育中心創業",
      steps: [
        {
          title: "諮詢評估",
          description: "評估您的目標與現況，為您的托育事業制定最佳起步計畫。",
          icon: ClipboardList,
        },
        {
          title: "執照與籌備",
          description: "全程輔導繁瑣的執照申請文件、場地法規檢核與環境佈置。",
          icon: Building2,
        },
        {
          title: "正式營運",
          description: "帶著完善的營運知識與信心，正式開啟您的托育中心。",
          icon: Rocket,
        },
      ],
    },
  },
} as const;
