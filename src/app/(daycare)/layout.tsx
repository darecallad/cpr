import { DaycareHeader } from "@/components/DaycareHeader";
import { Footer } from "@/components/Footer"; // We can reuse the footer or make a new one. Let's reuse for now but maybe style it differently? 
// Actually, let's just use the main footer for consistency at the bottom, or maybe no footer?
// The user said "looks like another site".
// Let's include the Footer but maybe we can wrap it to change colors if needed.
// For now, standard Footer is fine.

export default function DaycareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <DaycareHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
