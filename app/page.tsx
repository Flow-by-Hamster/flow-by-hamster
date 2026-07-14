import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { EverythingYouNeedSection } from "@/components/marketing/everything-you-need-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#171717]">
      <SiteNav />
      <HeroSection />
      <DashboardPreview />
      <EverythingYouNeedSection />
      <HowItWorksSection />
      <SiteFooter />
    </main>
  );
}
