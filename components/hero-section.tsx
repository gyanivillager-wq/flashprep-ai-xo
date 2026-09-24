import { Download, ShieldCheck, BookOpenCheck, BadgeCheck } from "lucide-react"

const badges = [
  { icon: ShieldCheck, label: "Verified for Android" },
  { icon: BookOpenCheck, label: "NCERT Aligned" },
  { icon: BadgeCheck, label: "100% Free to Start" },
]

export function HeroSection() {
  return (
    <section id="download" className="relative overflow-hidden">
      {/* gradient glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-[#7C4DFF]/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 size-72 rounded-full bg-[#00E676]/15 blur-[100px]"
      />

      <div className="relative mx-auto max-w-3xl px-5 pb-20 pt-16 text-center md:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#7C4DFF]/40 bg-[#7C4DFF]/10 px-4 py-1.5 text-xs font-medium text-[#c3b0ff]">
          Smart NCERT Study System & AI Companion
        </span>

        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Master NCERT Classes 5–12 with{" "}
          <span className="bg-gradient-to-r from-[#00E676] to-[#7C4DFF] bg-clip-text text-transparent">
            Smart AI Revisions
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
          Instant structured chapter summaries, interactive visual flowcharts, and key formula decks
          locked to your exact grade.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/gyanivillager-wq/flashprep-ai-xo/releases/download/1.1/FlashPrep-AI.apk"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-[#00E676] px-7 py-3.5 text-base font-bold text-[#0D0F12] shadow-[0_0_40px_-8px_rgba(0,230,118,0.6)] transition-transform hover:scale-105"
          >
            <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
            Download APK Directly
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {badges.map((badge) => (
            <li key={badge.label} className="flex items-center gap-2 text-sm text-white/60">
              <badge.icon className="size-4 text-[#00E676]" />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
