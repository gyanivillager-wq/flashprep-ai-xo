import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { GradesSection } from "@/components/grades-section"
import { ReferralBanner } from "@/components/referral-banner"
import { InstallSection } from "@/components/install-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-[#0D0F12] text-white">
      <SiteNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GradesSection />
        <ReferralBanner />
        <InstallSection />
      </main>
      <SiteFooter />
    </div>
  )
}
