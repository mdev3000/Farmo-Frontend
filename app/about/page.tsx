import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { 
  Sparkles, 
  Target, 
  Heart, 
  ShieldCheck, 
  Users, 
  Tractor, 
  Award, 
  ArrowRight,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us — Farmo's Mission to Democratize Agricultural Mechanization",
  description:
    "Learn about Farmo's founding story, our hyper-local working cluster model, and our vision to empower every smallholder farmer in India with smart machinery and skilled labor.",
}

const VALUES = [
  {
    icon: Target,
    title: "Farmer-First Economics",
    description: "Every pricing model, scheduling algorithm, and implement choice is designed to reduce the farmer's input cost and boost net yield.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    description: "No hidden broker margins or arbitrary hourly billing. What you see on Farmo is verified, digital, and accountable.",
  },
  {
    icon: Heart,
    title: "Dignity of Agricultural Labor",
    description: "We are committed to providing farm workers with fair wages, direct bank payouts, protective gear, and guaranteed work security.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local Empowerment",
    description: "We don't manage farms from distant corporate towers. Our working clusters are run by local rural entrepreneurs who understand the soil.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. Hero Banner - Full Screen Viewport Height with AI Image */}
      <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col justify-end items-center overflow-hidden bg-black pb-6 sm:pb-8 pt-16 border-b border-border">
        <Image
          src="/about-mission-hero.jpg"
          alt="Farmo Agricultural Mechanization Revolution"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Clean bottom gradient for text contrast while keeping farmer, tractor, and landscape completely visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-25% to-transparent" />

        <ScrollReveal className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-2">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-snug max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Democratizing Farm Mechanization Across Bharat
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <Link
                href="/working-clusters"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Working Clusters</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Origin Story Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase font-bold text-primary tracking-wider">
                Why We Built Farmo
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight">
                Bridging the Gap Between Idle Equipment and Unharvested Fields
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Across Indian farming districts, millions of tractors and implements sit idle in village courtyards for 250 days a year. Simultaneously, neighboring smallholders struggle with catastrophic labor shortages, unseasonal weather delays, and extortionate broker rates.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Farmo was founded to bridge this divide through <strong>Hyper-Local Working Clusters</strong>. By organizing machinery owners, skilled labor squads, and local agronomy coordinators onto a single coordinated digital platform, we turned fragmented rural services into an efficient, predictable ecosystem.
              </p>
              <div className="pt-2">
                <Link
                  href="/working-clusters"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1a4570] hover:text-primary transition-colors"
                >
                  <span>Explore how our clusters function</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-border shadow-xl">
                <Image
                  src="/indian-farmer-man-portrait-smiling.jpg"
                  alt="Happy Indian Farmer with Farmo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-bold">
                    &ldquo;Farmo helped me harvest my 6-acre wheat field in 4 hours right before the unseasonal hailstorm arrived. It saved my entire year&apos;s investment.&rdquo;
                  </p>
                  <p className="text-xs text-amber-300 mt-1">
                    — Sukhdev Singh, Farmer, Khanna Cluster
                  </p>
                </div>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-16 sm:py-20 bg-[#f8f7f6] dark:bg-zinc-900/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-bold text-primary tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              What We Stand For at Farmo
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon
              return (
                <ScrollReveal key={val.title} delay={idx * 80}>
                  <div className="p-6 rounded-3xl bg-card border border-border shadow-xs flex flex-col justify-between h-full hover:shadow-md transition-all">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        {val.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA Footer */}
      <section className="py-16 bg-white dark:bg-zinc-950 text-center">
        <ScrollReveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Join the Farmo Movement Today
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Whether you are a farmer looking for machinery, an equipment owner wanting to earn, or a partner wishing to bring a cluster to your area, we would love to connect.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary/90 transition-all"
            >
              <span>Get in Touch with Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  )
}
