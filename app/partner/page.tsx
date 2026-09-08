import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { 
  Handshake, 
  Tractor, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Become a Farmo Partner — Monetize Your Machinery & Labor Network",
  description:
    "Join Farmo as a machine owner, labor contractor, or cluster entrepreneur. Maximize equipment utilization and earn predictable revenue across every farming season.",
}

const PARTNER_TRACKS = [
  {
    icon: Tractor,
    title: "Tractor & Implement Owners",
    tagline: "Turn idle machinery into steady seasonal income",
    description: "List your tractors, rotavators, harvesters, and sprayers. Receive routed cluster demand without downtime or marketing costs.",
    benefits: [
      "Peak-season booking calendar",
      "Diesel and transit reimbursement",
      "Routine cluster mechanic inspection",
      "Operator accidental insurance coverage",
    ],
    earningEstimate: "₹40,000 – ₹85,000 / month",
  },
  {
    icon: Users,
    title: "Labor Mukadams & Crew Leads",
    tagline: "Guaranteed contracts and dignity for your workforce",
    description: "Organize contracts for your harvest gangs, weeding crews, or masonry trades with transparent daily wages and guaranteed payouts.",
    benefits: [
      "Steady work across sowing, weeding, and harvest",
      "Direct group bank transfers without delays",
      "Organized transit to cluster work sites",
      "Safety equipment and hydration kits provided",
    ],
    earningEstimate: "Direct wage pass-through + 10% Contractor Margin",
  },
  {
    icon: MapPin,
    title: "Cluster Hub Franchisee / Entrepreneur",
    tagline: "Lead a high-tech rural agricultural hub",
    description: "Manage local machine dispatch, farmer relationships, and daily cluster operations with Farmo's digital platform and regional support.",
    benefits: [
      "Exclusive geographic territory for your cluster",
      "Farmo digital dispatch, scheduling, and billing app",
      "Dedicated field marketing and farmer lead generation",
      "Attractive volume commissions on every acre served",
    ],
    earningEstimate: "₹75,000 – ₹1,80,000 / month net commission",
  },
]

const ONBOARDING_STEPS = [
  {
    num: "1",
    title: "Submit Details",
    desc: "Share your equipment specifications, crew strength, or preferred cluster location.",
  },
  {
    num: "2",
    title: "Verification Visit",
    desc: "Farmo's field operations lead verifies equipment condition, documents, or hub premises.",
  },
  {
    num: "3",
    title: "Onboard to Farmo Network",
    desc: "Your services are listed live on the Farmo network and ready to receive steady bookings.",
  },
]

export default function PartnerPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Header Banner - Full Viewport Height with AI Image */}
      <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col justify-end items-center overflow-hidden bg-black pb-6 sm:pb-8 pt-16 border-b border-border">
        <Image
          src="/partner-hero-banner.jpg"
          alt="Farmo Rural Partnership Network"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Clean bottom gradient for text contrast while keeping partners and tractor workshop completely visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-25% to-transparent" />

        <ScrollReveal className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-2">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-snug max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Grow Your Farm Service Business with Farmo
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <Link
                href="/contact?intent=partner"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>Apply for Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#partner-tracks"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Partner Tracks</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Clean Trust Bar below Hero Image */}
      <div className="w-full bg-white dark:bg-zinc-950 border-b border-border py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-foreground/80 font-medium">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Zero Listing Fees
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Prompt &amp; Transparent Payouts
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Localized Cluster Support
          </span>
        </div>
      </div>

      {/* 2. Choose your partnership path */}
      <section id="partner-tracks" className="py-14 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Choose Your Partnership Path
            </h2>
            <p className="text-sm text-muted-foreground">
              Tailored tracks built for equipment owners, labor mukadams, and aspiring rural entrepreneurs.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PARTNER_TRACKS.map((track, idx) => {
              const Icon = track.icon
              return (
                <ScrollReveal key={track.title} delay={idx * 100}>
                  <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#fafafa] dark:bg-zinc-900 border border-border/80 shadow-xs hover:shadow-md transition-all h-full space-y-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {track.title}
                        </h3>
                        <p className="text-xs font-semibold text-primary mt-1">
                          {track.tagline}
                        </p>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          {track.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border space-y-2">
                        {track.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-foreground/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border space-y-3">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Earning Potential: </span>
                        <span className="font-bold text-primary block mt-0.5">{track.earningEstimate}</span>
                      </p>

                      <Link
                        href="/contact?intent=partner"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1a4570] hover:bg-[#153759] text-white text-xs font-semibold transition-colors shadow-xs"
                      >
                        <span>Join as {track.title.split(" ")[0]} Partner</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Onboarding Steps */}
      <section className="py-14 sm:py-20 bg-[#f8f7f6] dark:bg-zinc-900/40 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Three Simple Steps to Get Started
            </h2>
            <p className="text-xs text-muted-foreground">
              From online submission to active cluster listing in under 48 hours.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ONBOARDING_STEPS.map((step, idx) => (
              <ScrollReveal key={step.num} delay={idx * 80}>
                <div className="p-6 rounded-2xl bg-card border border-border text-center flex flex-col items-center h-full space-y-3 shadow-xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
