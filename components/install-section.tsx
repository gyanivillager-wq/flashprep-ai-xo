import { Download, FileArchive, Play, Settings2 } from "lucide-react"

const downloadUrl =
  "https://github.com/gyanivillager-wq/flashprep-ai-xo/releases/download/v2.0.0/FlashPrepAI-v2.apk"

const steps = [
  {
    number: "1",
    title: "Download the APK",
    description: "Click the download button above to save FlashPrepAI-v2.apk to your Android phone.",
    icon: Download,
  },
  {
    number: "2",
    title: "Enable unknown sources",
    description: 'If Chrome or Edge prompts you, open Android Settings and enable "Install from Unknown Sources".',
    icon: Settings2,
  },
  {
    number: "3",
    title: "Open and install",
    description: "Open Downloads, tap FlashPrepAI-v2.apk, and select Install.",
    icon: FileArchive,
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

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20 md:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-white/10 bg-[#12161c] p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#00E676] text-base font-bold text-[#0D0F12]">
                  {step.number}
                </span>
                <step.icon className="size-5 text-[#00E676]" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={downloadUrl}
            download
            className="group inline-flex items-center gap-3 rounded-2xl bg-[#00E676] px-6 py-4 text-left font-bold text-[#0D0F12] shadow-[0_0_40px_-8px_rgba(0,230,118,0.6)] transition-transform hover:scale-105"
          >
            <Download className="size-6 shrink-0 transition-transform group-hover:translate-y-0.5" />
            <span>
              <span className="flex items-center gap-2 text-base">Download FlashPrep AI v2.0 (APK)</span>
              <span className="mt-1 block text-xs font-semibold text-[#0D0F12]/65">71.2 MB · v2.0.0 Latest</span>
            </span>
          </a>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-5 flex items-center justify-center gap-2 text-center">
          <Play className="size-4 text-[#00E676]" aria-hidden="true" />
          <h3 className="text-xl font-semibold text-white">Watch the installation walkthrough</h3>
        </div>
        <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/30">
          <iframe
            className="size-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="FlashPrep AI APK installation tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
