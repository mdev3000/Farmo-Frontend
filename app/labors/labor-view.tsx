"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  HardHat,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ChevronDown,
  Clock,
  Wallet,
  Building2,
  CalendarCheck,
  Sparkles,
  HelpCircle,
  Award,
} from "lucide-react"
import { PLAY_STORE_URL } from "@/components/layout/navbar"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface LaborRole {
  id: string
  name: string
  category: "farming" | "construction"
  image: string
  arrivalTime: string
  tag: string
  description: string
}

const FARMING_LABOR: LaborRole[] = [
  {
    id: "grapevine-pruner",
    name: "Grapevine Pruner Worker",
    category: "farming",
    image: "/categories/Labor/farming/Grapevine Pruner worker.png",
    arrivalTime: "Same-day dispatch",
    tag: "Horticulture",
    description: "Precision winter and summer vine pruning, canopy management, and bunch thinning for export-grade grapes.",
  },
  {
    id: "pomegranate-pruner",
    name: "Pomegranate Tree Pruner",
    category: "farming",
    image: "/categories/Labor/farming/Pomegranate Tree Pruning Worker.png",
    arrivalTime: "Same-day dispatch",
    tag: "Horticulture",
    description: "Bahar treatment pruning, deadwood trimming, and disease-free canopy training for commercial orchards.",
  },
  {
    id: "sowing-transplanting",
    name: "Paddy & Crop Sowing Squad",
    category: "farming",
    image: "/categories/Labor/farming/Sowing.png",
    arrivalTime: "~45 min arrival",
    tag: "Sowing",
    description: "Line transplanting, nursery seedling uprooting, and systematic planting with optimal hill-to-hill spacing.",
  },
  {
    id: "weeding-crew",
    name: "Weeding & Hoeing Squad",
    category: "farming",
    image: "/categories/Labor/farming/Weeding.png",
    arrivalTime: "~30 min arrival",
    tag: "Inter-culture",
    description: "Manual khurpi de-weeding, root zone aeration, and earthing-up for vegetable, cotton, and sugarcane crops.",
  },
  {
    id: "knapsack-sprayer",
    name: "Manual & Knapsack Sprayer",
    category: "farming",
    image: "/categories/Labor/farming/Spraying.png",
    arrivalTime: "~30 min arrival",
    tag: "Crop Protection",
    description: "Safe and uniform chemical and liquid fertilizer application with protective mask and nozzle care.",
  },
  {
    id: "crop-harvester",
    name: "Crop Harvester & Sickle Cutter",
    category: "farming",
    image: "/categories/Labor/farming/Harvester.png",
    arrivalTime: "1 – 2 hr waiting period",
    tag: "Harvest",
    description: "Experienced sickle harvesting squads for wheat, paddy, soybean, onion, and pulses to avoid rain risk.",
  },
  {
    id: "harvest-bagging",
    name: "Harvest Bagging & Loading Crew",
    category: "farming",
    image: "/categories/Labor/farming/Harvest Bagging.png",
    arrivalTime: "1 – 2 hr waiting period",
    tag: "Post-Harvest",
    description: "Field-side crop cleaning, weighment, 50kg bag packing, jute stitching, and haulage trolley loading.",
  },
  {
    id: "tractor-driver",
    name: "Certified Tractor Driver",
    category: "farming",
    image: "/categories/Labor/farming/Tractor Dirver.png",
    arrivalTime: "~30 min arrival",
    tag: "Mechanization",
    description: "Seasoned tractor drivers for plowing, laser leveling, rotary tilling, and trolley haulage operations.",
  },
  {
    id: "sugarcane-harvester",
    name: "Sugarcane Cutting & Binding Gang",
    category: "farming",
    image: "/categories/Labor/farming/Farming work.png",
    arrivalTime: "Same-day dispatch",
    tag: "Commercial Crops",
    description: "Full-gang cane harvesting, trash stripping, bundle tie-up, and tractor/truck field loading.",
  },
  {
    id: "general-farming",
    name: "General Farm Hand (Daily Wage)",
    category: "farming",
    image: "/categories/Labor/farming/Farming.png",
    arrivalTime: "~30 min arrival",
    tag: "General Farm",
    description: "Multi-tasking farm hands for irrigation canal clearing, mulch laying, drip line setup, and field prep.",
  },
  {
    id: "horticulture-specialist",
    name: "Specialized Orchard Worker",
    category: "farming",
    image: "/categories/Labor/farming/Other Workers.png",
    arrivalTime: "1 – 2 hr waiting period",
    tag: "Orchards",
    description: "Skilled labor for fruit bagging, pollination, orchard trellis wiring, and post-harvest grading.",
  },
]

const CONSTRUCTION_LABOR: LaborRole[] = [
  {
    id: "mason-mistri",
    name: "Mason (Gawandi / Mistri)",
    category: "construction",
    image: "/categories/Labor/Construction/Mason.png",
    arrivalTime: "Same-day dispatch",
    tag: "Masonry",
    description: "Brick and concrete block masonry, foundation stone laying, cattle shed construction, and boundary walls.",
  },
  {
    id: "bar-bender",
    name: "Bar Bender (Steel Fixer)",
    category: "construction",
    image: "/categories/Labor/Construction/Bar Bender.png",
    arrivalTime: "Same-day dispatch",
    tag: "Reinforcement",
    description: "Rebar cutting, bending, column tying, and slab beam steel cage assembly for rural farm buildings.",
  },
  {
    id: "plasterer",
    name: "Plasterer Worker",
    category: "construction",
    image: "/categories/Labor/Construction/Plasterer.png",
    arrivalTime: "Same-day dispatch",
    tag: "Finishing",
    description: "Smooth cement plastering for water tanks, farm storage godowns, residential rooms, and boundary walls.",
  },
  {
    id: "material-loader",
    name: "Construction Material Loader",
    category: "construction",
    image: "/categories/Labor/Construction/Loader.png",
    arrivalTime: "~30 min arrival",
    tag: "Material Handling",
    description: "Rapid loading and unloading of sand, aggregate gravel, bricks, cement bags, and steel rods.",
  },
  {
    id: "rural-painter",
    name: "Painter & Whitewasher",
    category: "construction",
    image: "/categories/Labor/Construction/Painter.png",
    arrivalTime: "Same-day dispatch",
    tag: "Finishing",
    description: "Surface primer, exterior weather-shield paint, whitewash, and anti-rust metal coating for sheds and gates.",
  },
  {
    id: "construction-helper",
    name: "Construction Helper (Beldar)",
    category: "construction",
    image: "/categories/Labor/Construction/Helper.png",
    arrivalTime: "~30 min arrival",
    tag: "General Construction",
    description: "Concrete mortar mixing, brick curing, excavation assistance, and material carting on work sites.",
  },
]

const FAQS_DATA = [
  {
    id: "faq-1",
    category: "Partner Network",
    q: "How does a Labor Mukadam or Group Contractor partner with Farmo?",
    a: "Labor contractors (Mukadams / Tolli heads) can register via the Farmo Partner Mobile App or by visiting their nearest Farmo Cluster Center. Our cluster coordinator registers your gang size, trade specializations (farming or construction), and schedules regular bookings across the cluster radius.",
  },
  {
    id: "faq-2",
    category: "Booking",
    q: "Can I book individual workers or only full squads?",
    a: "You can book both! Specialized individual workers (such as certified tractor drivers, masons, or sprayers) are available on-demand, as are complete harvesting, transplanting, and weeding gangs ranging from 5 to 30 workers.",
  },
  {
    id: "faq-3",
    category: "Supervision",
    q: "Who manages the labor gang on the field or construction site?",
    a: "Every labor crew dispatched by Farmo includes an experienced Mukadam (Crew Captain) who oversees work pacing, straight line alignments, punctuality, and field discipline so you don't have to micromanage.",
  },
  {
    id: "faq-4",
    category: "Dual Category",
    q: "Do you supply labor for both agricultural work and farm construction?",
    a: "Yes. Farmo provides skilled workforce for seasonal agricultural operations (sowing, weeding, spraying, fruit pruning, harvesting) as well as farm infrastructure construction (masons, bar benders, plasterers, loaders, and helpers).",
  },
  {
    id: "faq-5",
    category: "Attendance & Weather",
    q: "What happens if it rains or work is cut short by bad weather?",
    a: "Our cluster coordinator assists in adjusting daily hours or re-scheduling field work. Farmo's localized cluster presence ensures fair wage calculations and standby backup assignments without financial loss.",
  },
  {
    id: "faq-6",
    category: "Payments",
    q: "How do payments work for farm and construction labor?",
    a: "Payments are made according to standard cluster benchmarks—either daily shift wages or per-acre / piece-rate contracts. Clients can pay workers directly upon job completion or settle through Farmo with transparent digital records.",
  },
  {
    id: "faq-7",
    category: "Backup Guarantee",
    q: "What if a worker falls sick or cannot attend the field shift?",
    a: "Because Farmo operates through local working clusters, the Cluster Center can dispatch standby laborers to help keep your harvest or construction schedule on track.",
  },
  {
    id: "faq-8",
    category: "Worker Verification",
    q: "Are the laborers and contractors background-verified?",
    a: "Yes. All labor heads and regular workers are identity-verified by our local cluster coordinators, ensuring safe, trustworthy, and hardworking personnel on your family farm and property.",
  },
]

export function LaborView() {
  const [activeCategory, setActiveCategory] = useState<"farming" | "construction">("farming")
  const [visibleCount, setVisibleCount] = useState<number>(8)
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1")

  const currentList = activeCategory === "farming" ? FARMING_LABOR : CONSTRUCTION_LABOR
  const displayedLabor = currentList.slice(0, visibleCount)

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, currentList.length))
  }

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Header Banner - Full Screen Viewport Height with AI Image */}
      <section className="relative isolate flex min-h-[430px] md:min-h-[520px] flex-col justify-end overflow-hidden bg-foreground py-14 md:py-20 border-b border-border">
        <Image
          src="/labor-hero-banner.jpg"
          alt="Farmo Skilled Agricultural Workforce"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Clean bottom gradient for text contrast while keeping workforce and background completely visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        <ScrollReveal className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-left">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.08] max-w-3xl">
              Never Let Labor Shortages Stall Your Harvest or Construction
            </h1>

            <div className="flex flex-wrap items-center justify-start gap-3 pt-4">
              <a
                href="#labor-roles"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-colors"
              >
                <span>Explore Available Labor</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-transparent hover:bg-white/10 text-white border border-white/60 text-sm font-semibold transition-colors"
              >
                <Award className="w-4 h-4" />
                <span>Register as Labor Partner</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-transparent hover:bg-white/10 text-white border border-white/60 text-sm font-semibold transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Contact Cluster Coordinator</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Labor Roles Section */}
      <section id="labor-roles" className="py-16 sm:py-24 bg-muted/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal className="max-w-2xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Available Workforce Trades</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium text-foreground tracking-tight">
              Skilled Labor On Demand
            </h2>
            <p className="text-sm text-muted-foreground">
              Select your category below to view specialized agricultural squads or rural construction trades.
            </p>
          </ScrollReveal>

          {/* Centered Dual Category Toggle: Farming vs Construction */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-card border border-border shadow-xs">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("farming")
                  setVisibleCount(8)
                }}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === "farming"
                    ? "bg-primary text-white shadow-md scale-102"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                }`}
              >
                <span>🌾 Agricultural Labor ({FARMING_LABOR.length})</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("construction")
                  setVisibleCount(8)
                }}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === "construction"
                    ? "bg-[#1a4570] text-white shadow-md scale-102"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                }`}
              >
                <span>🏗️ Construction Labor ({CONSTRUCTION_LABOR.length})</span>
              </button>
            </div>
          </div>

          {/* Cards Grid: 4 cards per row with ScrollReveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {displayedLabor.map((item, idx) => (
              <ScrollReveal key={item.id} delay={(idx % 4) * 60}>
                <div
                  className="group rounded-3xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
                >
                {/* Illustration Container */}
                <div className="relative w-full h-44 bg-white dark:bg-zinc-900 border-b border-border/60 p-4 flex items-center justify-center">

                  {/* Top Left: Arrival Time Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-xs">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{item.arrivalTime}</span>
                    </span>
                  </div>

                  {/* Top Right: Category Tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-muted/10 text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>

                  {/* Labor Illustration Icon */}
                  <div className="relative w-full h-32">
                    <Image
                      src={encodeURI(item.image)}
                      alt={item.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary">
                      Verified Squad
                    </span>

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCount < currentList.length && (
            <div className="text-center mt-10">
              <button
                type="button"
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-md cursor-pointer hover:scale-[1.02]"
              >
                <span>Show More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Clean Trust Bar below Hero Image */}
      <div className="w-full bg-background border-b border-border py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-start gap-x-8 gap-y-2 text-sm text-foreground/80 font-medium">
          <span className="inline-flex items-center gap-2">
            Organized Gangs with Mukadam
          </span>
          <span className="inline-flex items-center gap-2">
            Agricultural &amp; Construction Trades
          </span>
          <span className="inline-flex items-center gap-2">
            Fair Wages &amp; Verified Workers
          </span>
        </div>
      </div>

      {/* 2. How Farmo Labor Works (Partner & Cluster Model) */}
      <section className="py-14 sm:py-20 bg-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal className="max-w-2xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>The Farmo Workforce Model</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium text-foreground tracking-tight">
              How Farmo Labor Works
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connecting rural labor contractors and skilled workers with farmers and builders through our local Cluster Centers and mobile app.
            </p>
          </ScrollReveal>

          {/* Two-Sided Benefits: Mukadam vs Farmer/Builder */}
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: Contractor / Worker Advantages */}
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a4570] text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>For Mukadams &amp; Workers</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground">
                  Why Labor Contractors Partner with Farmo
                </h3>

                <ul className="space-y-3.5 text-sm text-foreground/90">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Year-Round Booking Demand:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Seamlessly switch between agricultural crop seasons and rural construction projects without long periods of unemployment.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Direct &amp; On-Time Wage Settlements:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Get paid promptly for your gang upon job completion without cuts, delayed contractor disputes, or unfair wage deductions.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Local Cluster Coordinator Support:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Our village cluster manager coordinates transport schedules, clear task definitions, and field locations directly.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/partner"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a4570] hover:bg-[#153a5e] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Register Labor Gang as Partner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Farmer & Builder Advantages */}
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>For Farmers &amp; Builders</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground">
                  Farmo as the Workforce Platform
                </h3>

                <ul className="space-y-3.5 text-sm text-foreground/90">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Zero Harvest or Project Delays:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Eliminate acute rural labor shortages. Access pre-screened labor squads whenever you need sowing, weeding, harvesting, or masonry.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Supervised Gangs with Crew Captain:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Each squad works under an experienced Mukadam ensuring high work discipline, correct planting depth, and fast execution.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Standby Backup Replacement:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        If any worker is absent, our local cluster center immediately mobilizes a substitute so your schedule stays on time.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#labor-roles"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Browse Available Labor Trades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </ScrollReveal>

        </div>
      </section>

      {/* 4. Expandable FAQs Section */}
      <section className="py-16 sm:py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal className="text-center mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Answers &amp; Clarity</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium text-foreground tracking-tight">
              Frequently Asked Questions About Labor
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Clear answers regarding contractor partnerships, squad sizes, attendance tracking, and payment processes.
            </p>
          </ScrollReveal>

          {/* Expandable FAQ Accordion List */}
          <div className="space-y-3">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-primary/50 bg-primary/5 shadow-xs"
                      : "border-border bg-card hover:border-border/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-muted/10 text-muted-foreground shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-foreground">
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-primary text-white"
                          : "bg-muted/10 text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 border-t border-border/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Quick Help Note */}
          <div className="mt-10 p-6 rounded-2xl bg-[#fafafa] dark:bg-zinc-900 border border-border text-center space-y-3">
            <h4 className="text-sm font-bold text-foreground">
              Need a custom squad size or ongoing seasonal contract?
            </h4>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Our rural cluster team works directly with village Mukadams to arrange large gangs for multi-acre harvesting or long-term farm construction.
            </p>
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a4570] text-white text-xs font-semibold hover:bg-[#153a5e] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Talk to Labor Coordinator</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom Partner CTA Banner */}
      <section className="py-14 sm:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-5">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span>Partner with Farmo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight text-white leading-tight">
              Are You a Labor Mukadam or Skilled Worker?
            </h2>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              Register your crew on Farmo to secure regular, guaranteed bookings across your local cluster with on-time dignified payouts and zero middleman exploitation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Register Labor Squad</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Download Partner App</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Contact Cluster Coordinator</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
