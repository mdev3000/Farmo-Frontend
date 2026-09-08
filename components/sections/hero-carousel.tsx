"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Tractor,
  Users,
  MapPin,
  CheckCircle2
} from "lucide-react"

interface CarouselSlide {
  id: number
  title: string
  image: string
  ctaText: string
  ctaHref: string
}

const SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: "Skilled Farm Laborers at Work",
    image: "/farmo-workers-field.jpg",
    ctaText: "Explore Farm Labors",
    ctaHref: "/labors",
  },
  {
    id: 2,
    title: "Tractors & Implements Heading to Work",
    image: "/farmo-tractor-road.jpg",
    ctaText: "Browse Farm Machinery",
    ctaHref: "/machinery",
  },
  {
    id: 3,
    title: "Conversations & Harvest Stories with Farmers",
    image: "/farmo-farmer-interview.jpg",
    ctaText: "Read Farmer Stories",
    ctaHref: "/knowledge-bite",
  },
  {
    id: 4,
    title: "Become a Partner as Farmo Force",
    image: "/farmo-force-partner.jpg",
    ctaText: "Join Farmo Force",
    ctaHref: "/partner",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5500)
    return () => clearInterval(timer)
  }, [nextSlide, isPaused])

  const slide = SLIDES[current]

  return (
    <section 
      className="relative w-full min-h-[calc(100svh-64px)] flex flex-col justify-between bg-black overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Big Visual Slider */}
      <div className="relative w-full flex-1 min-h-[480px] flex items-center justify-center">
        
        {/* Background Slides */}
        {SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            {/* Smooth clean bottom vignette only */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15" />
          </div>
        ))}

        {/* Minimal Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Clean Text at Bottom Center */}
        <div className="absolute inset-x-0 bottom-10 sm:bottom-14 z-20 flex flex-col items-center text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            
            {/* Clean, punchy title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight">
              {slide.title}
            </h1>

            {/* Clean CTA Link Button */}
            <div className="pt-2">
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-sm sm:text-base font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Minimal Dots */}
            <div className="flex items-center justify-center gap-2.5 pt-3">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === current
                      ? "w-8 h-2 bg-primary shadow-sm"
                      : "w-2 h-2 bg-white/40 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Clean, Minimal Numbers Bar (Moved below image) */}
      <div className="w-full bg-white dark:bg-zinc-950 border-b border-border py-6 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 text-center divide-x divide-border/60">
          
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              500+
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              Labors Joined
            </p>
          </div>

          <div className="space-y-1 pl-4 sm:pl-8">
            <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              250+
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              Machinery Listed
            </p>
          </div>

          <div className="space-y-1 pl-4 sm:pl-8">
            <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              100+
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              Farmers Served
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
