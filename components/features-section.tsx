import { Library, Workflow, Flame } from "lucide-react"

const features = [
  {
    icon: Library,
    emoji: "📚",
    title: "Grade-Locked NCERT Library",
    description:
      "Curated revision notes, formula sheets, and chapter breakdowns specifically tailored for NCERT Classes 5th through 12th.",
  },
  {
    icon: Workflow,
    emoji: "🌿",
    title: "Visual Node Flowcharts",
    description:
      "Interactive concept trees, diagrams, and process maps that simplify complex Science and SST chapters into visual steps.",
  },
  {
    icon: Flame,
    emoji: "🔥",
    title: "Gamified Credits & Streaks",
    description:
      "Maintain your daily study streak to claim free credits, or watch quick rewarded ads to unlock premium study decks instantly.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything you need to revise smarter
        </h2>
        <p className="mt-4 text-white/60">
          Built around the NCERT curriculum so every note, diagram, and deck fits exactly what you
          study.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-[#00E676]/40 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00E676]/20 to-[#7C4DFF]/20 text-[#00E676]">
                <feature.icon className="size-6" />
              </span>
              <span className="text-2xl" aria-hidden>
                {feature.emoji}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
