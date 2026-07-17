import { SiteNav } from "@/components/layout/site-nav";
import { CareersSection } from "@/components/marketing/careers-section";
import { SiteFooter } from "@/components/marketing/site-footer";

export const metadata = {
  title: "Careers | Hamster Technologies",
  description: "Join our build crew and help us create high-fidelity software ecosystems.",
};

export default function CareersPage() {
  return (
    /* Turned into a flex container with min-h-screen to pin the footer to the bottom */
    <main className="min-h-screen flex flex-col bg-[#f7f4ee] bg-[radial-gradient(circle_at_top,_rgba(217,79,36,0.09),_transparent_55%)] text-[#171717]">
      <SiteNav />
      
      {/* CareersSection now fills the vertical void */}
      <CareersSection />
      
      <SiteFooter />
    </main>
  );
}