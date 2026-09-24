"use client"

import { useState } from "react"
import { Zap, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "NCERT Grades", href: "#grades" },
  { label: "How to Install", href: "#install" },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D0F12]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-[#00E676]/15 text-[#00E676]">
            <Zap className="size-5" fill="currentColor" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            FlashPrep <span className="text-[#00E676]">AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="rounded-full bg-[#00E676] px-4 py-2 text-sm font-semibold text-[#0D0F12] transition-transform hover:scale-105"
          >
            Get App
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
