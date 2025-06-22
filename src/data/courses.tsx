// src/data/courses.tsx
import React from "react";
import type { CourseSectionProps } from "@/components/CourseSection";

export const courses: Record<"en" | "zh", CourseSectionProps[]> = {
  en: [
    {
      title: "Infant/Child First Aid & CPR/AED",
      imageSrc: "/images/child.jpg",             // 婴幼儿示范图
      imageAlt: "Infant CPR",
      details: [
        { label: "Course Length", value: "8 hours (Per EMSA Guidelines)" },
        {
          label: "Topics Covered",
          value:
            "CPR for Infant/Child, AED use, bleeding control, burns, seizures, EpiPen administration, and more",
        },
        { label: "Price", value: "$120" },
        {
          label: "Certification",
          value: "Official EMSA Infant and Child CPR/First Aid certification",
        },
        {
          label: "Location",
          value: "900 Balboa St. Ground Floor, San Francisco CA 94118",
        },
      ],
      bookLabel: "BOOK",
    },
    {
      title: "Adult First Aid & CPR/AED",
      imageSrc: "/images/adult.jpg",             // 成人示范图
      imageAlt: "Adult CPR",
      details: [
        { label: "Course Length", value: "8 hours" },
        {
          label: "Topics Covered",
          value:
            "CPR for all ages, AED use, bleeding control, burns, seizures, EpiPen administration, and more",
        },
        { label: "Price", value: "$130" },
        {
          label: "Certification",
          value: "American Red Cross Adult CPR/First Aid certification",
        },
        {
          label: "Location",
          value: "900 Balboa St. Ground Floor, San Francisco CA 94118",
        },
      ],
      reverse: true,
      bookLabel: "BOOK",
    },
    {
      title: "Child Abuse Mandated Reporter Training",
      imageSrc: "/images/report.jpg",            // 通报培训示意图
      imageAlt: "Mandated Reporter Training",
      details: [
        { label: "Course Length", value: "6 hours" },
        {
          label: "Topics Covered",
          value: (
            <ul className="list-disc list-inside space-y-1">
              <li>How to spot indicators of possible child abuse or neglect</li>
              <li>How to talk to children about suspected abuse</li>
              <li>How to make a report and more</li>
            </ul>
          ),
        },
        { label: "Price", value: "$80" },
        {
          label: "Certification",
          value:
            "Official CDSS approved child abuse mandated reporter training certificate",
        },
        { label: "Location", value: "Offered via Zoom" },
      ],
      bookLabel: "BOOK",
    },
    {
      title: "EMSA Health, Safety & Nutrition Course",
      imageSrc: "/images/nutrition.jpg",        // 营养/安全示意图
      imageAlt: "Nutrition Course",
      details: [
        { label: "Course Length", value: "8 hours" },
        {
          label: "Topics Covered",
          value:
            "immunizations, preventive health, nutrition, lead poisoning, and more",
        },
        { label: "Price", value: "$100" },
        {
          label: "Certification",
          value: "Official EMSA Health & Safety certification",
        },
        { label: "Location", value: "Offered via Zoom" },
      ],
      fullContent: [
        <>
          <p>
            This is a virtual class with access to a live virtual instructor
            while learning.{" "}
            <strong>
              Students must complete all assignments and attend a review session
              via Zoom.
            </strong>
          </p>
        </>,
        <>
          <h3 className="font-semibold mt-4">
            Preventive Health & Safety Training Core Content
          </h3>
          <ul className="list-inside space-y-1">
            <li>
              <strong>Part 1:</strong> Prevention of Infectious Disease
            </li>
            <li>
              <strong>Part 2:</strong> Prevention of Injuries
            </li>
            <li>
              <strong>Part 3:</strong> Nutrition
            </li>
            <li>
              <strong>Part 4:</strong> Lead Poisoning Prevention
            </li>
          </ul>
        </>,
        <>
          <h3 className="font-semibold mt-4">Course Information</h3>
          <ul className="list-inside space-y-1">
            <li>
              <strong>Hours:</strong> 8
            </li>
            <li>
              <strong>Units:</strong> 1 (CEU*)/optional
            </li>
            <li>
              <strong>Format:</strong> Virtual + Live Virtual Instruction
            </li>
            <li>
              <strong>Certification:</strong> Certificate of Completion w/ EMSA
              sticker
            </li>
          </ul>
        </>,
        <>
          <p>*Child Care Licensing and EMSA Approved</p>
          <p>*Includes Lead Poisoning Prevention</p>
          <h3 className="font-semibold mt-4">EMSA STATEMENT:</h3>
          <p>
            Lead Poisoning Prevention Training is fully incorporated into
            Preventive Health and Safety Training. The authorization for
            single-subject, stand-alone LPP training expired after March 31,
            2022.
          </p>
          <p>
            Lead Poisoning Prevention Training is required for child care
            licenses issued on or after July 1, 2020. The eight-hour
            Preventive Health and Safety class now includes lead poisoning
            prevention (LPP) to meet the new requirements in law.
          </p>
          <p>
            <strong>NOTES:</strong> Pediatric CPR & First Aid not included. *If
            applying for Continuing Education Units CEU's, $50 additional fee/
            CSU.
          </p>
        </>,
      ],
      bookLabel: "BOOK",
    },
     {
      title: "California Child Care Course",
      imageSrc: "/images/childcare.jpg",      // 你自己的配图
      imageAlt: "California Child Care Course",
      details: [
        { label: "Course Length", value: "16 hours" },
        {
          label: "Topics Covered",
          value: (
            <ul className="list-disc list-inside space-y-1">
              <li>Infant/Child First Aid & CPR/AED</li>
              <li>EMSA Health, Safety & Nutrition Course</li>
            </ul>
          ),
        },
        { label: "Price", value: "$200" },
        {
          label: "Location",
          value: (
            <ul className="list-inside space-y-1">
              <li>
                First Aid & CPR/AED offered <strong>In Person</strong>
              </li>
              <li>
                EMSA Health, Safety & Nutrition Course offered via{" "}
                <strong>Zoom</strong>
              </li>
            </ul>
          ),
        },
      ],
      bookLabel: "BOOK",
      reverse: false,  // 保持一左一右的交替
    },
  ],

  zh: [
    {
      title: "嬰幼兒急救與 CPR/AED",
      imageSrc: "/images/child.jpg",
      imageAlt: "嬰幼兒示範 CPR",
      details: [
        { label: "課程時長", value: "8 小時（符合 EMSA 指南）" },
        {
          label: "涵蓋主題",
          value:
            "嬰幼兒 CPR、AED 使用、止血、燒傷、抽搐、腎上腺素筆使用等",
        },
        { label: "價格", value: "120 美元" },
        {
          label: "證照",
          value: "官方 EMSA 嬰幼兒 CPR/急救證書",
        },
        {
          label: "地點",
          value: "900 Balboa St. 一樓，舊金山 CA 94118",
        },
      ],
      bookLabel: "立即預約",
    },
    {
      title: "成人急救與 CPR/AED",
      imageSrc: "/images/adult.jpg",
      imageAlt: "成人急救",
      details: [
        { label: "課程時長", value: "8 小時" },
        {
          label: "涵蓋主題",
          value:
            "適合所有年齡的 CPR、AED 使用、止血、燒傷、抽搐、腎上腺素筆使用等",
        },
        { label: "價格", value: "130 美元" },
        {
          label: "證照",
          value: "美國紅十字會成人 CPR/急救證書",
        },
        {
          label: "地點",
          value: "900 Balboa St. 一樓，舊金山 CA 94118",
        },
      ],
      reverse: true,
      bookLabel: "立即預約",
    },
    {
      title: "兒童虐待通報人員強制培訓",
      imageSrc: "/images/report.jpg",
      imageAlt: "虐待通報培訓",
      details: [
        { label: "課程時長", value: "6 小時" },
        {
          label: "涵蓋主題",
          value: (
            <ul className="list-disc list-inside space-y-1">
              <li>如何辨識可能的虐待或疏忽跡象</li>
              <li>如何與兒童談論疑似虐待</li>
              <li>如何進行通報等</li>
            </ul>
          ),
        },
        { label: "價格", value: "80 美元" },
        {
          label: "證照",
          value:
            "加州社會服務部（CDSS）核可之兒童虐待通報人員強制培訓證書",
        },
        { label: "地點", value: "透過 Zoom 線上提供" },
      ],
      bookLabel: "立即預約",
    },
    {
      title: "EMSA 健康、安全與營養課程",
      imageSrc: "/images/nutrition.jpg",
      imageAlt: "營養課程",
      details: [
        { label: "課程時長", value: "8 小時" },
        {
          label: "涵蓋主題",
          value: "免疫接種、預防健康、營養、鉛中毒預防等",
        },
        { label: "價格", value: "100 美元" },
        {
          label: "證照",
          value: "官方 EMSA 健康與安全認證",
        },
        { label: "地點", value: "透過 Zoom 線上提供" },
      ],
      fullContent: [
        <>
          <p>
            這是一門虛擬課程，可連線學習並與真人講師互動。{" "}
            <strong>學員必須完成所有作業並參加 Zoom 複習課程。</strong>
          </p>
        </>,
        <>
          <h3 className="font-semibold mt-4">
            預防健康與安全課程核心內容
          </h3>
          <ul className="list-inside space-y-1">
            <li>
              <strong>第一部分：</strong> 傳染病預防
            </li>
            <li>
              <strong>第二部分：</strong> 傷害預防
            </li>
            <li>
              <strong>第三部分：</strong> 營養
            </li>
            <li>
              <strong>第四部分：</strong> 鉛中毒預防
            </li>
          </ul>
        </>,
        <>
          <h3 className="font-semibold mt-4">課程資訊</h3>
          <ul className="list-inside space-y-1">
            <li>
              <strong>時數：</strong> 8
            </li>
            <li>
              <strong>學分：</strong> 1 (CEU*)/選修
            </li>
            <li>
              <strong>形式：</strong> 虛擬 + 真人線上教學
            </li>
            <li>
              <strong>證書：</strong> EMSA 貼紙結業證書
            </li>
          </ul>
        </>,
        <>
          <p>*符合兒童照護許可與 EMSA 認可</p>
          <p>*包含鉛中毒預防內容</p>
          <h3 className="font-semibold mt-4">EMSA 聲明：</h3>
          <p>
            鉛中毒預防訓練已整合至預防健康與安全訓練中。單科獨立的 LPP
            訓練授權已於 2022 年 3 月 31 日到期。
          </p>
          <p>
            自 2020 年 7 月 1 日起，兒童照護許可發放後，需完成鉛中毒預防訓練。八小時的預防健康與安全課程已納入
            LPP 內容，以符合法規要求。
          </p>
          <p>
            <strong>注意：</strong> 不含兒科 CPR 與急救。如需繼續教育學分 (CEU)，需額外支付 50 美元/CSU。
          </p>
        </>,
      ],
      bookLabel: "立即預約",
    },
    {
      title: "加州兒童照護課程",
      imageSrc: "/images/childcare.jpg",
      imageAlt: "加州兒童照護課程",
      details: [
        { label: "課程時長", value: "16 小時" },
        {
          label: "涵蓋主題",
          value: (
            <ul className="list-disc list-inside space-y-1">
              <li>嬰幼兒急救與 CPR/AED</li>
              <li>EMSA 健康、安全與營養課程</li>
            </ul>
          ),
        },
        { label: "價格", value: "200 美元" },
        {
          label: "地點",
          value: (
            <ul className="list-inside space-y-1">
              <li>
                急救與 CPR/AED 現場授課，<strong>In Person</strong>
              </li>
              <li>
                EMSA 健康與營養課程線上授課 via <strong>Zoom</strong>
              </li>
            </ul>
          ),
        },
      ],
      bookLabel: "立即預約",
      reverse: true,
    },
  ],
};
