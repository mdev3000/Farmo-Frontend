"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Tractor,
  Smartphone,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ChevronDown,
  Wallet,
  Building2,
  CalendarCheck,
  Sparkles,
  HelpCircle,
  Clock,
  Tag,
} from "lucide-react"
import { PLAY_STORE_URL } from "@/components/layout/navbar"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface MachineTypeCard {
  id: string
  name: string
  image: string
  arrivalTime: string
  expectedPrice: string
  description: string
  category: string
}

const ALL_MACHINE_TYPES: MachineTypeCard[] = [
  {
    id: "rotavator",
    name: "Rotavator (Rotary Tiller)",
    image: "/categories/Machine Type/rotavetor.png",
    arrivalTime: "~30 min arrival",
    expectedPrice: "₹650 – ₹850 / hr",
    description: "High-speed soil pulverization, clod crushing, and stubble mixing for rapid seedbed preparation.",
    category: "Tillage",
  },
  {
    id: "cultivator",
    name: "Cultivator / Field Tiller",
    image: "/categories/Machine Type/cultivetor.png",
    arrivalTime: "~30 min arrival",
    expectedPrice: "₹450 – ₹600 / hr",
    description: "Secondary tillage, aerating soil, and removing root weeds between seasonal crop plantings.",
    category: "Tillage",
  },
  {
    id: "combine-harvester",
    name: "Multi-Crop Combine Harvester",
    image: "/categories/Machine Type/combined_harvestor.png",
    arrivalTime: "1 – 2 hr waiting period",
    expectedPrice: "₹1,400 – ₹2,200 / acre",
    description: "Rapid harvesting, threshing, and clean grain separation for wheat, paddy, soybean, and gram.",
    category: "Harvesting",
  },
  {
    id: "drone-spray",
    name: "Agricultural Drone Sprayer",
    image: "/categories/Machine Type/Drone_spray.png",
    arrivalTime: "~45 min arrival",
    expectedPrice: "₹400 – ₹550 / acre",
    description: "Precision crop protection, liquid nano-urea, and micro-nutrient spraying with zero crop trampling.",
    category: "Spraying",
  },
  {
    id: "laser-leveler",
    name: "Laser Land Leveler",
    image: "/categories/Machine Type/land leveler ( lazer ).png",
    arrivalTime: "1 – 2 hr waiting period",
    expectedPrice: "₹800 – ₹1,100 / hr",
    description: "Precision field grade leveling to save up to 30% irrigation water and ensure uniform crop stand.",
    category: "Land Prep",
  },
  {
    id: "plough",
    name: "MB Plough / Disc Plough",
    image: "/categories/Machine Type/plough.jpg",
    arrivalTime: "~30 min arrival",
    expectedPrice: "₹550 – ₹750 / hr",
    description: "Deep soil inversion and hardpan breaking to bring fresh fertile nutrients to the surface.",
    category: "Tillage",
  },
  {
    id: "disk-harrow",
    name: "Heavy Disc Harrow",
    image: "/categories/Machine Type/Disk_Harrow.png",
    arrivalTime: "~45 min arrival",
    expectedPrice: "₹500 – ₹700 / hr",
    description: "Heavy-duty crop residue chopping, breaking hard dry clods, and coarse seedbed preparation.",
    category: "Tillage",
  },
  {
    id: "seed-drill",
    name: "Automatic Seed & Fertilizer Drill",
    image: "/categories/Machine Type/Seed_Drill.png",
    arrivalTime: "1 – 2 hr waiting period",
    expectedPrice: "₹600 – ₹850 / acre",
    description: "Uniform line sowing with precise depth control and simultaneous fertilizer placement.",
    category: "Sowing",
  },
  {
    id: "bed-maker",
    name: "Ridge & Bed Maker",
    image: "/categories/Machine Type/bed_maker.png",
    arrivalTime: "~45 min arrival",
    expectedPrice: "₹500 – ₹700 / hr",
    description: "Forms raised planting beds and irrigation furrows for vegetables, potatoes, and sugarcane.",
    category: "Land Prep",
  },
  {
    id: "auger-machine",
    name: "Tractor Earth Auger (Post Hole Digger)",
    image: "/categories/Machine Type/auger machine.png",
    arrivalTime: "1 – 2 hr waiting period",
    expectedPrice: "₹35 – ₹50 / hole",
    description: "Fast mechanical pit drilling for orchard sapling plantation, solar fencing, and boundary poles.",
    category: "Plantation",
  },
  {
    id: "digging-machine",
    name: "Backhoe Loader (Digging Machine)",
    image: "/categories/Machine Type/digging machine.png",
    arrivalTime: "2 – 3 hr waiting period",
    expectedPrice: "₹1,100 – ₹1,400 / hr",
    description: "Deep farm pond excavation, silt cleaning, drainage trenching, and field boundary development.",
    category: "Infrastructure",
  },
  {
    id: "tractor-dozer",
    name: "Tractor Front Dozer",
    image: "/categories/Machine Type/tractor_dozer.png",
    arrivalTime: "1 – 2 hr waiting period",
    expectedPrice: "₹850 – ₹1,100 / hr",
    description: "Farm road leveling, land clearing, debris movement, and bund shaping around field borders.",
    category: "Land Prep",
  },
  {
    id: "power-tiller",
    name: "Power Tiller (Mini Tiller)",
    image: "/categories/Machine Type/power tiller.png",
    arrivalTime: "~30 min arrival",
    expectedPrice: "₹350 – ₹500 / hr",
    description: "Compact walking tiller ideal for narrow inter-culture weeding in horticulture orchards and polyhouses.",
    category: "Tillage",
  },
  {
    id: "spreader",
    name: "Fertilizer & Seed Spreader",
    image: "/categories/Machine Type/spreder.png",
    arrivalTime: "~30 min arrival",
    expectedPrice: "₹300 – ₹450 / acre",
    description: "Wide-angle broadcast spreading of granular fertilizer, urea, and cover seeds across fields.",
    category: "Spraying",
  },
  {
    id: "thresher",
    name: "Multi-Crop Thresher",
    image: "/categories/Machine Type/thresher.png",
    arrivalTime: "1 – 2 hr waiting period",
    expectedPrice: "₹600 – ₹900 / hr",
    description: "Separates grains cleanly from harvested crop stocks with high output and zero grain breakage.",
    category: "Harvesting",
  },
  {
    id: "banana-shredder",
    name: "Banana Tree Shredder & Mulcher",
    image: "/categories/Machine Type/Tractor_banana_tree_shredder.jpeg",
    arrivalTime: "2 – 3 hr waiting period",
    expectedPrice: "₹1,200 – ₹1,600 / hr",
    description: "In-field chopping and mulching of standing post-harvest banana stems to enrich soil organic matter.",
    category: "Residue",
  },
  {
    id: "dozer-machine",
    name: "Heavy Crawler Dozer",
    image: "/categories/Machine Type/dozer machine.png",
    arrivalTime: "Same-day booking",
    expectedPrice: "₹1,800 – ₹2,500 / hr",
    description: "Heavy land leveling, boulder clearing, and large-scale farm infrastructure earthmoving.",
    category: "Infrastructure",
  },
  {
    id: "others",
    name: "Specialized Custom Implements",
    image: "/categories/Machine Type/Others.png",
    arrivalTime: "On-demand dispatch",
    expectedPrice: "Custom cluster quote",
    description: "Haulage trolleys, subsoilers, straw balers, water tankers, and specialty attachments.",
    category: "Custom",
  },
]

const FAQS_DATA = [
  {
    id: "faq-1",
    category: "Partner Network",
    q: "How does a machinery owner register as a Farmo Partner?",
    a: "Machinery owners can download the Farmo Partner Mobile App or visit their local Farmo Cluster Center. Our cluster coordinator verifies the tractor/equipment RC, physical condition, and operator details to onboard the machinery onto the network within 24 hours.",
  },
  {
    id: "faq-2",
    category: "Partner Network",
    q: "How do equipment partners receive work and booking requests?",
    a: "Partners receive booking requests in two ways: directly through real-time notifications on the Farmo Partner App, or via their designated local Cluster Manager who dispatches nearby jobs based on village proximity and machine availability.",
  },
  {
    id: "faq-3",
    category: "Payments",
    q: "How do payments work for machinery partners?",
    a: "Partners receive payments either directly from the farmer upon satisfactory completion of field work or disbursed through Farmo depending on the booking arrangement. There are zero hidden cuts, broker commissions, or delayed settlements.",
  },
  {
    id: "faq-4",
    category: "Partner Advantage",
    q: "What are the two biggest advantages of listing machinery on Farmo?",
    a: "1) Free Listing & Extended Reach: Your equipment is visible to farmers across Farmo's local network without marketing cost. 2) Steady Bookings: Maximize your machine utilization and eliminate idle off-season downtime through demand routed by Farmo.",
  },
  {
    id: "faq-5",
    category: "Farmer Booking",
    q: "How can a farmer book machinery through Farmo?",
    a: "Farmers can book verified machinery in seconds using the Farmo Android App or by calling their village Cluster Manager directly. Our cluster coordinator ensures the machine arrives at your field boundary on schedule.",
  },
  {
    id: "faq-6",
    category: "Pricing & Fuel",
    q: "Is diesel (Wet Rent vs Dry Rent) included in the machinery rates?",
    a: "Yes, you have complete flexibility: choose 'Wet Rent' where the partner supplies diesel and you pay an all-inclusive hourly/acre rate, or 'Dry Rent' where you provide your own clean diesel and pay a lower machine usage fee.",
  },
  {
    id: "faq-7",
    category: "Implements",
    q: "Can I rent standalone implements without hiring a full tractor?",
    a: "Yes! If you already own a tractor, you can rent standalone implements like rotavators, laser land levelers, disc harrows, super seeders, and post hole diggers directly from our cluster partners.",
  },
  {
    id: "faq-8",
    category: "Service Guarantee",
    q: "What happens if a partner's machine breaks down in the middle of field work?",
    a: "Because Farmo operates through local working clusters, our Cluster Manager can dispatch standby machinery or send field support to keep your farm schedule on track.",
  },
]

export function MachineryView() {
  const [visibleCount, setVisibleCount] = useState<number>(8)
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1")

  const displayedMachines = ALL_MACHINE_TYPES.slice(0, visibleCount)

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, ALL_MACHINE_TYPES.length))
  }

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Header Banner - Full Screen Viewport Height with AI Image */}
      <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col justify-end items-center overflow-hidden bg-black pb-6 sm:pb-8 pt-16 border-b border-border">
        <Image
          src="/machinery-hero-banner.jpg"
          alt="Farmo Modern Agricultural Machinery Fleet"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Clean bottom gradient for text contrast while keeping tractors and landscape completely visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-25% to-transparent" />

        <ScrollReveal className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-2">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-snug max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Agricultural Machinery On Demand for Every Indian Farmer
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <a
                href="#machinery-types"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Machinery Types</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Tractor className="w-4 h-4" />
                <span>Become a Partner (List Machinery)</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Contact Cluster Hub</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Clean Trust Bar below Hero Image */}
      <div className="w-full bg-white dark:bg-zinc-950 border-b border-border py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-foreground/80 font-medium">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Local working-cluster network
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            App &amp; Local Cluster Coordinator
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Direct &amp; Fair Partner Payouts
          </span>
        </div>
      </div>

      {/* 2. How Farmo Machinery Works (Collaborative Ecosystem Workflow) */}
      <section className="py-14 sm:py-20 bg-white dark:bg-zinc-950 border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1a4570]/10 text-[#1a4570] dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>The Farmo Cluster Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              How Farmo Machinery Works
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A collaborative model connecting equipment partners with farmers through the Farmo App and our local Cluster Centers.
            </p>
          </ScrollReveal>

          {/* Two-Sided Benefits: Partner vs Farmer */}
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: Partner Advantages */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1a4570]/5 via-card to-card border-2 border-[#1a4570]/20 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a4570] text-white text-xs font-bold uppercase tracking-wider">
                  <Tractor className="w-3.5 h-3.5" />
                  <span>Partner Advantages</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  Why Machinery Owners Partner with Farmo
                </h3>

                <ul className="space-y-3.5 text-sm text-foreground/90">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">List Services &amp; Expand Reach:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Get your tractors and implements listed across Farmo's local network, reaching nearby farmers without marketing effort.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Steady Bookings via App &amp; Cluster Manager:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Eliminate costly idle machine days. Receive steady, verified booking demand directly via the partner app or our on-ground cluster manager.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Direct &amp; Transparent Earnings:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Receive payment directly from the farmer or via Farmo right upon job completion. Zero commissions deducted by middlemen.
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
                  <span>Register Equipment as a Partner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Farmer Advantages */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-card to-card border-2 border-primary/20 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Farmer Advantages</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  Farmo as the Platform for Farmers
                </h3>

                <ul className="space-y-3.5 text-sm text-foreground/90">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Dual Booking Ease (App or Cluster Manager):</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Book machinery using the intuitive Farmo App or simply place a quick call to your local village cluster coordinator.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Guaranteed On-Time Field Arrival:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Machines are staged in a nearby working cluster, reducing travel delays during peak sowing or harvest.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground">Save Lakhs on Equipment Capital:</strong>{" "}
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        Access all machine types, implements, and combine harvesters at transparent hourly or acre rates without bank debt.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#machinery-types"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Browse Machinery Types</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </ScrollReveal>

        </div>
      </section>

      {/* 3. Machinery Types Cards Section */}
      <section id="machinery-types" className="py-16 sm:py-24 bg-[#f8f7f6] dark:bg-zinc-900/40 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Tractor className="w-3.5 h-3.5" />
              <span>Available Machinery Types</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Machinery Types on Demand
            </h2>
            <p className="text-sm text-muted-foreground">
              Select your required farm operation. Dispatched directly from your local cluster hub with verified arrival times.
            </p>
          </ScrollReveal>

          {/* Cards Grid: 4 cards per row with ScrollReveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {displayedMachines.map((item, idx) => (
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
                      {item.category}
                    </span>
                  </div>

                  {/* Machine Illustration Icon */}
                  <div className="relative w-full h-32">
                    <Image
                      src={encodeURI(item.image)}
                      alt={item.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Card Content (No HP, No Fuel, No Fixed Price) */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-border/60 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Verified</span>
                    </div>

                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all shadow-2xs hover:scale-[1.02]"
                    >
                      <span>Book Machine</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Show More Button (Just 'Show More', no collapse option) */}
          {visibleCount < ALL_MACHINE_TYPES.length && (
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

      {/* 4. Expandable FAQs Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Answers &amp; Clarity</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about listing equipment as a partner, cluster manager dispatch, and farmer booking procedures.
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
              Have a specific question about your machine or cluster?
            </h4>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Our rural cluster team is available to assist partner onboarding and custom farmer machinery schedules.
            </p>
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a4570] text-white text-xs font-semibold hover:bg-[#153a5e] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Talk to Cluster Support</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom Partner CTA Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#1a4570] via-[#153a5e] to-[#0f2842] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
              <Tractor className="w-3.5 h-3.5 text-primary" />
              <span>Partner with Farmo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Turn Your Idle Machinery into Daily Earnings
            </h2>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              Join the Farmo Partner Network today. List your tractors, harvesters, or implements and receive regular bookings dispatched through your local cluster.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Register as Partner</span>
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
