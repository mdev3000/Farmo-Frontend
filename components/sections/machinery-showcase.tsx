import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Handshake } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface WorkCategory {
  title: string
  image: string
  tag: string
}

const WORK_CATEGORIES: WorkCategory[] = [
  {
    title: "Tillage & Cultivator Plowing",
    image: "/categories/cultivator-tillage.jpg",
    tag: "Land Preparation",
  },
  {
    title: "Combine Harvesting",
    image: "/categories/combine-harvester.png",
    tag: "Crop Harvest",
  },
  {
    title: "Pond Digging & Trenching",
    image: "/categories/backhoe-loader.png",
    tag: "Farm Infrastructure",
  },
  {
    title: "Laser Land Leveling",
    image: "/categories/laser-leveler-tractor.jpg",
    tag: "Water Conservation",
  },
]

export function MachineryShowcase() {
  return (
    <section className="py-14 sm:py-20 bg-[#f8f7f6] dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5" />
              <span>Farm Machinery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Whatever Your Field Needs, We Get It Done
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-foreground hover:text-primary hover:border-primary/40 font-semibold text-sm transition-all shadow-2xs group shrink-0"
          >
            <span>Request Service</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-primary" />
          </Link>
        </ScrollReveal>

        {/* 4 Cards — Clean, minimal with ScrollReveal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WORK_CATEGORIES.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 70}>
              <Link
                href="/contact"
                className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border/80 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-white dark:bg-zinc-950 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Title + CTA */}
                <div className="p-4 flex items-center justify-between gap-2 border-t border-border/50">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
