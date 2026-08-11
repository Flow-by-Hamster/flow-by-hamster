import { SiteNav } from "@/components/layout/site-nav";
import { FeaturesHero } from "@/components/marketing/features/features-hero";
import { FeaturesGrid } from "@/components/marketing/features/features-grid";
import { IntegrationFlow } from "@/components/marketing/integration-flow"; // Import the diagram component
import { SiteFooter } from "@/components/marketing/site-footer";

export const metadata = {
  title: "Features — Flow Business Operating System",
  description: "Discover how Flow transforms your daily WhatsApp interactions into a structured, automated storefront.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ee] bg-[radial-gradient(circle_at_top,_rgba(148,51,51,0.09),_transparent_55%)] text-[#171717]">
      <SiteNav />
      
      <main className="flex-1">
        <FeaturesHero />
        <FeaturesGrid />
        
        <IntegrationFlow />
      </main>
      
      <SiteFooter />
    </div>
  );
}