// src/components/TestimonialsSection.tsx
"use client";

export function TestimonialsSection() {
  return (
   <section className="bg-[#E4F4EC] py-12 mt-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Testimonial 1 */}
        <div>
          <p className="text-gray-700 italic mb-4">
            "The course was very practical and informative. I feel much more confident in handling emergencies."
          </p>
          <p className="font-semibold text-gray-900">Waymaker Teacher</p>
        </div>

        {/* Testimonial 2 */}
        <div>
          <p className="text-gray-700 italic mb-4">
            "Great hands-on training! The instructor was knowledgeable."
          </p>
          <p className="font-semibold text-gray-900">Daycare Teacher</p>
        </div>

        {/* Testimonial 3 */}
        <div>
          <p className="text-gray-700 italic mb-4">
            "The instructor was patient and very engaging throughout the session."
          </p>
          <p className="font-semibold text-gray-900">Childcare Staff</p>
        </div>
      </div>
    </section>
  );
}
