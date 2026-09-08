import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PLAY_STORE_URL } from "@/components/layout/navbar"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function PartnerCta() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-[#1a4570] via-[#153a5e] to-[#0f2842] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mx-auto text-center space-y-5">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Modernize Your Farm with Farmo
          </h2>

          <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Connect with verified farm machinery and skilled labor through your local cluster hub.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-md hover:scale-[1.02]"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.793 12 3.61 22.186A2.37 2.37 0 0 1 3 20.505V3.495c0-.653.228-1.258.609-1.681z" fill="#00E676" />
                <path d="M17.234 8.559l-3.441 3.441 3.441 3.441 3.87-2.228c1.104-.635 1.104-1.791 0-2.426l-3.87-2.228z" fill="#FFD600" />
                <path d="M13.793 12L3.609 1.814A2.08 2.08 0 0 1 4.882 1.4c.53 0 1.05.15 1.5.409l10.852 6.25L13.793 12z" fill="#00B0FF" />
                <path d="M13.793 12l3.441 3.441-10.852 6.25a2.76 2.76 0 0 1-1.5.409 2.08 2.08 0 0 1-1.273-.414L13.793 12z" fill="#FF3D00" />
              </svg>
              <span>Download App</span>
            </a>

            <Link
              href="/partner"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </ScrollReveal>
      </div>
    </section>
  )
}
