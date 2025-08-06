// components/PartnersSection.tsx
"use client";
import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-700 text-lg mb-8">
          Trusted by numerous daycare centers to protect young children
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <Image src="/partners/kidspace.png" alt="Kidspace" width={120} height={40} />
          <Image src="/partners/sunnydaycare.png" alt="Sunny Day Care" width={140} height={40} />
          <Image src="/partners/littlesprouts.png" alt="Little Sprouts" width={140} height={40} />
          <Image src="/partners/abcchildcare.png" alt="ABC Childcare" width={140} height={40} />
          <Image src="/partners/emsa.png" alt="EMSA" width={120} height={40} />
          <Image src="/partners/cdss.png" alt="CDSS" width={120} height={40} />
        </div>
      </div>
    </section>
  );
}
