import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/marketing/site-footer";
import { WaitlistWizard } from "@/components/marketing/waitlist-wizard";

export const metadata = {
  title: "Join the Waitlist | Flow",
  description: "Gain early access operational mechanics built for service providers.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#171717] flex flex-col relative overflow-hidden selection:bg-[#d24e2b]/10 selection:text-[#d24e2b]">
      
      {/* Decorative clean ambient lighting depth overlay */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#171717]/3 blur-[120px] pointer-events-none" />

      {/* 
        FIXED: Isolated header positioning frame 
        This keeps the component frame predictable to avoid deep-tree layouts re-calculating dimensions on click.
      */}
      <div className="relative z-30 w-full contain-layout">
        <SiteNav />
      </div>

      {/* Main Container Core - Matches features layout background precisely */}
      <section className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(217,79,36,0.09),_transparent_55%)] flex flex-col items-center justify-center px-4 md:px-6 pt-24 pb-16 md:pb-24 relative z-10 text-center">
        <div className="w-full max-w-[460px] flex flex-col gap-6">
          
          {/* Accent Label Pill Box */}
          <div className="mx-auto flex items-center gap-1.5 bg-white border border-[#e7e2d8] rounded-full px-4 py-1.5 shadow-sm">
            <span className="text-xs">⚡</span>
            <span className="text-xs font-medium text-[#6f6b63]">Built for African service businesses</span>
          </div>

          {/* Copy Hooks */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#171717] mb-4 leading-[1.15]">
              Run your services, <br />
              <span className="text-[#d24e2b] italic font-serif font-normal">beautifully.</span>
            </h1>
            <p className="text-sm md:text-base text-[#6f6b63] max-w-[380px] mx-auto leading-relaxed">
              Bookings, payments, clients, and your team in one calm home online. Join the waiting list for early access.
            </p>
          </div>

          {/* Wizard Card Context */}
          <div className="w-full bg-white rounded-3xl border border-[#e7e2d8] p-6 md:p-8 text-left shadow-[0_12px_40px_rgba(23,23,23,0.03)]">
            <WaitlistWizard />
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  );
}