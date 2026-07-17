import { DesktopDashboard } from "@/components/marketing/dashboard-preview/desktop-dashboard";
import { MobileDashboard } from "@/components/marketing/dashboard-preview/mobile-dashboard";

export function DashboardPreview() {
  return (
    <section className="mx-4 px-2 pb-14 sm:mx-6 lg:mx-10 lg:pb-24">
      <DesktopDashboard />
      <MobileDashboard />
    </section>
  );
}
