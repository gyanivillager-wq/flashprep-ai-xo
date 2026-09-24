import { Download } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Download the APK",
    description: 'Click "Download APK" to save the file to your Android phone.',
  },
  {
    number: "2",
    title: "Allow the source",
    description: 'Open the downloaded file and enable "Allow from this source" if prompted by Android.',
  },
  {
    number: "3",
    title: "Install & learn",
    description: "Tap Install, set up your student profile, and start learning!",
  },
]

export function InstallSection() {
  return (
    <section id="install" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get started in 3 steps
        </h2>
        <p className="mt-4 text-white/60">Direct Android APK install — no app store account needed.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-[#00E676] text-lg font-bold text-[#0D0F12]">
              {step.number}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="./FlashPrep-AI.apk"
          download
          className="group inline-flex items-center gap-2 rounded-full bg-[#00E676] px-7 py-3.5 text-base font-bold text-[#0D0F12] shadow-[0_0_40px_-8px_rgba(0,230,118,0.6)] transition-transform hover:scale-105"
        >
          <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
          Download APK Directly
        </a>
      </div>
    </section>
  )
}
