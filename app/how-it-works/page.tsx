import { SiteNav } from "@/components/layout/site-nav"; // Assuming your wrapper file is site-nav.tsx
import { HowItWorksFeatures } from "@/components/marketing/how-it-works-features";
import { SiteFooter } from "@/components/marketing/site-footer";

export const metadata = {
  title: "How it Works — Flow",
  description: "Discover how Flow transforms WhatsApp into a powerful operating system for service businesses.",
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-[#fcfaf7]  bg-[radial-gradient(circle_at_top,_rgba(217,79,36,0.09),_transparent_55%)]">
        <HowItWorksFeatures />
      </main>
      <SiteFooter />
    </>
  );
}