import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Farmo — Agricultural Mechanization & Farm Labor Platform",
    template: "%s | Farmo",
  },
  description:
    "Farmo connects farmers with verified tractors, combine harvesters, agricultural implements, and skilled farm labors across rural working clusters in India.",
  metadataBase: new URL("https://farmo.in"),
  keywords: [
    "Farmo",
    "farm equipment rental",
    "tractor rental India",
    "agricultural machinery",
    "farm labor hire",
    "combine harvester rental",
    "rural working clusters",
    "agritech India",
    "kisan machinery booking",
    "drone sprayer rental",
  ],
  authors: [{ name: "Farmo Technologies" }],
  creator: "Farmo",
  publisher: "Farmo",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://farmo.in",
    siteName: "Farmo",
    title: "Farmo — Agricultural Mechanization & Farm Labor Platform",
    description:
      "Find reliable machinery and skilled agricultural labors at your doorstep with Farmo.",
    images: [
      {
        url: "/farmo-logo.png",
        width: 1200,
        height: 630,
        alt: "Farmo — Farm Equipment & Labor Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmo — Agricultural Mechanization & Farm Labor Platform",
    description:
      "Find reliable machinery and skilled agricultural labors at your doorstep with Farmo.",
    images: ["/farmo-logo.png"],
  },
  icons: {
    icon: [
      { url: "/farmo-icon.ico", type: "image/x-icon" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/farmo mobile logo.png", type: "image/png" },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a4570",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
