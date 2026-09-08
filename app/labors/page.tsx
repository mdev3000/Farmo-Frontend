import React from "react"
import type { Metadata } from "next"
import { LaborView } from "./labor-view"

export const metadata: Metadata = {
  title: "Skilled Farm & Construction Labor on Demand — Farmo",
  description:
    "Hire reliable, pre-vetted agricultural labor squads and skilled rural construction trades for sowing, pruning, harvesting, masonry, and infrastructure across rural working clusters.",
  openGraph: {
    title: "Skilled Farm & Construction Labor on Demand — Farmo",
    description:
      "Hire reliable, pre-vetted agricultural labor squads and skilled rural construction trades for sowing, pruning, harvesting, masonry, and infrastructure across rural working clusters.",
    url: "https://farmo.in/labors",
  },
}

export default function LaborsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Farmo Rural Workforce & Labor Network",
    provider: {
      "@type": "Organization",
      name: "Farmo",
      url: "https://farmo.in",
    },
    serviceType: "Agricultural Labor & Rural Construction Workforce",
    description:
      "On-demand skilled labor squads and contractor partnership network serving rural clusters for farm operations and infrastructure.",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LaborView />
    </>
  )
}
