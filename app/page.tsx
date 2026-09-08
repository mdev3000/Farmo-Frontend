import React from "react"
import type { Metadata } from "next"
import { HeroCarousel } from "@/components/sections/hero-carousel"
import { MachineryShowcase } from "@/components/sections/machinery-showcase"
import { LaborShowcase } from "@/components/sections/labor-showcase"
import { VideoSection } from "@/components/sections/video-section"
import { KnowledgeBitePreview } from "@/components/sections/knowledge-bite-preview"
import { PartnerCta } from "@/components/sections/partner-cta"

export const metadata: Metadata = {
  title: "Farmo — Agricultural Mechanization & Farm Labor On Demand",
  description:
    "Farmo connects farmers with verified tractors, combine harvesters, drone sprayers, and skilled agricultural labors through rapid-dispatch rural working clusters.",
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Farmo",
    url: "https://farmo.in",
    logo: "https://farmo.in/farmo-logo.png",
    description:
      "Farmo is India's agricultural mechanization and skilled labor platform connecting farmers with tractors, combine harvesters, and verified farm workforce.",
    sameAs: [
      "https://play.google.com/store/apps/details?id=com.farmoapp",
    ],
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroCarousel />
      <MachineryShowcase />
      <LaborShowcase />
      <VideoSection />
      <KnowledgeBitePreview />
      <PartnerCta />
    </div>
  )
}
