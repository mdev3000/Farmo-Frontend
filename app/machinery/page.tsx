import React from "react"
import type { Metadata } from "next"
import { MachineryView } from "./machinery-view"

export const metadata: Metadata = {
  title: "Farm Machinery & Equipment Partner Network — Farmo",
  description:
    "Access verified tractors, combine harvesters, rotavators, laser levelers, and drone sprayers on demand. List your machinery as a Farmo partner and receive steady cluster bookings.",
  openGraph: {
    title: "Farm Machinery & Equipment Partner Network — Farmo",
    description:
      "Access verified tractors, combine harvesters, rotavators, laser levelers, and drone sprayers on demand. List your machinery as a Farmo partner and receive steady cluster bookings.",
    url: "https://farmo.in/machinery",
  },
}

export default function MachineryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Farmo Farm Machinery Network",
    provider: {
      "@type": "Organization",
      name: "Farmo",
      url: "https://farmo.in",
    },
    serviceType: "Agricultural Mechanization & Equipment Rental",
    description:
      "On-demand farm machinery booking and partner equipment listing platform serving rural agricultural clusters.",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MachineryView />
    </>
  )
}
