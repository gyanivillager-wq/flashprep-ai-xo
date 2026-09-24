import { Zap } from "lucide-react"

const links = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Support Contact", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#00E676]/15 text-[#00E676]">
            <Zap className="size-4" fill="currentColor" />
          </span>
          <span className="text-sm font-semibold text-white">
            FlashPrep <span className="text-[#00E676]">AI</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-white/50">© 2026 FlashPrep AI. Built for NCERT Students.</p>
      </div>
    </footer>
  )
}
