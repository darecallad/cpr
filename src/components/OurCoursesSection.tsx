// src/components/OurCoursesSection.tsx
"use client";

import { GraduationCap, Clock, Baby, Users } from "lucide-react"; // 這些是 SVG 圖示

export function OurCoursesSection() {
  return (
    <section className="bg-[#EAF6FB] py-16 mb-0">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 標題 */}
        <h2 className="text-3xl font-bold mb-12">Our Courses</h2>

        {/* 四個卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 1. EMSA Certification */}
          <div className="flex flex-col items-center text-center">
            <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">EMSA Certification</h3>
            <p className="text-gray-600 text-sm">
              Our courses meet the standards of the California EMS Authority.
            </p>
          </div>

          {/* 2. 8-Hour Comprehensive Training */}
          <div className="flex flex-col items-center text-center">
            <Clock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              8-Hour Comprehensive Training
            </h3>
            <p className="text-gray-600 text-sm">
              Complete CPR and first aid training in a single day.
            </p>
          </div>

          {/* 3. Designed-for Childcare Providers */}
          <div className="flex flex-col items-center text-center">
            <Baby className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              Designed-for Childcare Providers
            </h3>
            <p className="text-gray-600 text-sm">
              Specialized instruction for daycare preschool staff.
            </p>
          </div>

          {/* 4. Hands-On Small Group Classes */}
          <div className="flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              Hands-On Small Group Classes
            </h3>
            <p className="text-gray-600 text-sm">
              Interactive, practical training with personalized attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
