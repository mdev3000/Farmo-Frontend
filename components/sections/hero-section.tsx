import React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Tractor, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin,
  Star
} from "lucide-react"
import { PLAY_STORE_URL } from "@/components/layout/navbar"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f4f8] via-white to-background dark:from-zinc-900 dark:via-zinc-950 dark:to-background pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#1a4570]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Points */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span>India&apos;s Agri-Mechanization & Workforce Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Modern Machinery &amp;{" "}
              <span className="text-primary underline decoration-primary/40 underline-offset-8">
                Skilled Labor
              </span>{" "}
              Delivered to Your Farm.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Farmo eliminates agricultural downtime. Rent high-performance tractors, combine harvesters, and precision sprayers, or book trained farm labors through our rapid-dispatch hyper-local clusters.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/machinery"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Tractor className="w-5 h-5" />
                <span>Explore Machinery</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/labors"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1a4570] hover:bg-[#153759] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users className="w-5 h-5 text-primary" />
                <span>Book Skilled Labors</span>
              </Link>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-border bg-card hover:bg-muted/30 text-foreground font-semibold text-sm shadow-2xs hover:shadow transition-all"
              >
                <span>Download App</span>
                <span className="text-xs text-muted-foreground font-normal">Play Store</span>
              </a>
            </div>

            {/* Key Value Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Verified Equipment &amp; Crew
                </span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Same-Day Cluster Dispatch
                </span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <MapPin className="w-5 h-5 text-[#1a4570] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Doorstep Farm Delivery
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/green-john-deere-tractor-field.jpg"
                    alt="Farmo High Performance Tractor in Field"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-[11px] font-bold uppercase tracking-wider text-white">
                        Available in Clusters
                      </span>
                      <div className="flex items-center text-amber-300 text-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-300" />
                        <span className="ml-1 font-semibold text-white">4.9/5 Rating</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold">John Deere 5050D (50 HP)</h4>
                    <p className="text-xs text-white/80">
                      With multi-crop rotavator &amp; GPS-assisted field tracking
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Floating Card 1: Live Dispatch */}
              <div className="absolute -top-5 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-border shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Rapid Cluster Hub</p>
                  <p className="text-[11px] text-muted-foreground">Dispatched within 45 mins</p>
                </div>
              </div>

              {/* Floating Card 2: Skilled Labors */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-border shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="w-10 h-10 rounded-xl bg-[#1a4570]/15 flex items-center justify-center text-[#1a4570]">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">10,000+ Farm Labors</p>
                  <p className="text-[11px] text-muted-foreground">Certified &amp; Fairly Compensated</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
