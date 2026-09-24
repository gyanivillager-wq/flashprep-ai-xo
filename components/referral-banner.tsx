import { Gift, Users } from "lucide-react"

export function ReferralBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <div className="relative overflow-hidden rounded-2xl border border-[#7C4DFF]/40 bg-gradient-to-br from-[#7C4DFF]/25 via-[#7C4DFF]/10 to-[#00E676]/10 p-8 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-[#7C4DFF]/30 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#00E676]">
              <Users className="size-6" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-white">Invite Classmates & Earn Credits</h2>
              <p className="mt-2 max-w-xl text-white/70">
                Share your personal referral code with friends! Both you and your friend get{" "}
                <span className="font-semibold text-[#00E676]">+15 Free Study Credits</span> as soon
                as they sign up.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/15 bg-[#0D0F12]/60 px-5 py-4 text-white">
            <Gift className="size-5 text-[#00E676]" />
            <span className="text-sm font-medium">+15 credits each</span>
          </div>
        </div>
      </div>
    </section>
  )
}
