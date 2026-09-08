"use client"

import React from "react"
import Image from "next/image"
import { Play, Video, Users, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export interface VideoStory {
  id: string
  title: string
  speaker: string
  location: string
  tag: string
  thumbnail: string
}

const FIELD_VIDEOS: VideoStory[] = [
  {
    id: "farmer-talk",
    title: "Farmer Ground Talk: Field Mechanization",
    speaker: "Farmo Field Team with Ramesh Patil",
    location: "Karmala Cluster",
    tag: "Farmer Story",
    thumbnail: "/farmo-farmer-interview.jpg",
  },
  {
    id: "partner-fleet",
    title: "Partner Story: Fleet Utilization & Growth",
    speaker: "Farmo Team with Suresh Shinde (Fleet Owner)",
    location: "Solapur Hub",
    tag: "Partner Talk",
    thumbnail: "/farmo-force-partner.jpg",
  },
  {
    id: "labor-ops",
    title: "Cluster Dispatch: Field Labor Operations",
    speaker: "Farmo Operations & Rural Harvest Crew",
    location: "Karjat Hub",
    tag: "Labor Operations",
    thumbnail: "/farmo-workers-field.jpg",
  },
]

export function VideoSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#f8f7f6] dark:bg-zinc-900/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>Ground Conversations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Farmo in the Field
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Real discussions between the Farmo team, equipment partners, and local farmers.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FIELD_VIDEOS.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 80}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={item.title}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 block cursor-pointer"
              >
                {/* Video / Player Area with Thumbnail & Play Button */}
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  {/* Thumbnail Image */}
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 group-hover:from-black/80 transition-colors" />

                  {/* Tag Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-500 transition-all duration-200">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Watch story badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-medium text-white/80 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      Watch Story
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 shrink-0 text-primary" />
                      <span className="line-clamp-1">{item.speaker}</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-red-500" />
                      {item.location}
                    </span>
                    <span className="text-[11px] font-medium text-primary group-hover:underline">
                      Watch Story
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
