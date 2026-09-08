import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import {
  MapPin,
  Clock,
  Fuel,
  ArrowRight,
  PhoneCall,
  Zap,
  Users,
  CheckCircle2,
  Tractor,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Working Clusters — Hyper-Local Agricultural Operations Model",
  description:
    "Learn how Farmo's rural working clusters eliminate machinery transit costs, ensure sub-45 minute dispatch, and pool farm equipment for maximum village efficiency.",
}

const CLUSTER_BENEFITS = [
  {
    icon: Fuel,
    title: "Less transit, lower cost",
    desc: "Equipment is staged close to the farms it serves, eliminating unnecessary inter-city transit and saving diesel fees.",
  },
  {
    icon: Clock,
    title: "Faster field dispatch",
    desc: "Local machinery fleets and vetted labor squads are scheduled directly without waiting for a distant contractor.",
  },
  {
    icon: Users,
    title: "Dedicated local coordinator",
    desc: "A cluster manager coordinates machinery availability, operator schedules, field conditions, and seasonal demand.",
  },
  {
    icon: Zap,
    title: "Ready implements pool",
    desc: "Common implements (rotavators, laser levelers, seed drills) are pooled together so the exact tool is ready on-demand.",
  },
]

const OPERATIONAL_CLUSTERS = [
  {
    name: "Ravgaon Working Cluster",
    location: "Pune / Baramati Belt, Maharashtra",
    radius: "8–10 km service radius",
    coverage: "12–15 villages covered",
    crops: "Sugarcane, Soybean, Onion & Vegetables",
    readiness: "Active Hub (Tractors, Sprayers & Labor Squads)",
  },
  {
    name: "Karmala & Karjat Working Cluster",
    location: "Solapur / Ahmednagar Belt, Maharashtra",
    radius: "10–12 km service radius",
    coverage: "15+ villages covered",
    crops: "Cotton, Soybean, Maize & Pulses",
    readiness: "Active Hub (Harvesters, Tillage Fleets & Labor)",
  },
]

export default function WorkingClustersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Section - Full Viewport Height with Crystal Clear Cluster Map */}
      <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col justify-end items-center overflow-hidden bg-black pb-6 sm:pb-8 pt-16 border-b border-border">
        <Image
          src="/ravgaon-cluster-map.jpg"
          alt="Farmo Ravgaon Cluster Map"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Clean bottom gradient for text contrast while keeping cluster map fully visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-25% to-transparent" />

        <ScrollReveal className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-2">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-snug max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Farm operations, organized closer to the field
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>How Working Clusters Function</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Locate Nearest Cluster</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. How it works */}
      <section id="how-it-works" className="py-14 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-muted">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/satellite-farm-field-map-view-punjab-india.jpg"
                    alt="Satellite view of farm cluster"
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-52 h-52 rounded-full border-2 border-dashed border-white/80" />
                    <div className="relative w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-xl">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-border">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-foreground">8–10 km operating radius</span>
                      <span className="text-emerald-600 font-bold">12–15 villages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase font-bold text-primary tracking-wider">
                Hyper-Local Hub Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                A local hub for machinery, crews, and support
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Each hub coordinates nearby demand so machines can move seamlessly from one field to the next instead of returning to town between jobs.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Fleet staging:</strong> tractors, harvesters, and sprayers staged right near farms.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Local crews:</strong> vetted labor squads ready for rapid scheduled dispatch.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Field support:</strong> mechanics, spares, and implements kept ready locally.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Clear tracking:</strong> daily work is scheduled and verified through cluster coordinators.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a4570] text-white text-sm font-semibold hover:bg-[#153759] transition-colors shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Connect with Cluster Coordinator</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Cluster Benefits */}
      <section className="py-14 sm:py-20 bg-[#f8f7f6] dark:bg-zinc-900/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CLUSTER_BENEFITS.map((b, index) => {
              const Icon = b.icon
              return (
                <ScrollReveal key={b.title} delay={index * 80}>
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-xs hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        {b.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Network Footprint — 1 State, 2 Operational Clusters */}
      <section className="py-14 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase font-bold text-primary tracking-wider">
              Network Footprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Farmo&apos;s Active Cluster Footprint
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Currently operational across 1 key state (Maharashtra) with 2 hyper-local working clusters serving dozens of villages.
            </p>
          </ScrollReveal>

          {/* 2 Cluster Cards for Maharashtra */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPERATIONAL_CLUSTERS.map((cluster, idx) => (
              <ScrollReveal key={cluster.name} delay={idx * 100}>
                <div className="p-6 rounded-2xl bg-[#fafafa] dark:bg-zinc-900 border border-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        Maharashtra Cluster
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Operational
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground">
                      {cluster.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{cluster.location}</span>
                    </p>

                    <div className="pt-2 space-y-1.5 text-xs text-foreground/90">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-muted-foreground">Radius:</span>
                        <span>{cluster.radius} ({cluster.coverage})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-muted-foreground">Crops:</span>
                        <span>{cluster.crops}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-muted-foreground">Fleet:</span>
                        <span>{cluster.readiness}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>Book from this cluster</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[11px] text-muted-foreground">&lt; 45 min dispatch</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={150} className="mt-12 p-6 rounded-2xl bg-[#f8f7f6] dark:bg-zinc-900/60 border border-border text-center space-y-3">
            <h4 className="text-base font-bold text-foreground">
              Interested in bringing Farmo to your area?
            </h4>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              We are expanding into new farming tehsils. Nominate your block or apply to lead a new cluster franchise.
            </p>
            <div className="pt-1">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
              >
                <span>Nominate your tehsil / Apply as Hub Lead</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
