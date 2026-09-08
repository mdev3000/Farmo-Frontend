import React from "react"
import { Tractor, Users, MapPin, Award, TrendingUp } from "lucide-react"

interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  detail: string
}

const STATS: StatItem[] = [
  {
    icon: Tractor,
    value: "3,500+",
    label: "Farm Machines",
    detail: "Tractors, Harvesters & Implements",
  },
  {
    icon: Users,
    value: "12,000+",
    label: "Skilled Labors",
    detail: "Vetted agricultural workforce",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Active Clusters",
    detail: "Localized operational centers",
  },
  {
    icon: Award,
    value: "250,000+",
    label: "Acres Served",
    detail: "Across key agricultural states",
  },
  {
    icon: TrendingUp,
    value: "35%+",
    label: "Farmer Savings",
    detail: "Compared to traditional broker rates",
  },
]

export function StatsBanner() {
  return (
    <section className="py-12 bg-white dark:bg-zinc-950 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors border border-border/40"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mt-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.detail}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
