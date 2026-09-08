"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { 
  Tractor, 
  Users, 
  Handshake, 
  PhoneCall, 
  Menu, 
  X, 
  Download, 
  ChevronRight,
  Sparkles,
  MapPin,
  BookOpen
} from "lucide-react"

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.farmoapp&pcampaignid=web_share"

interface NavLinkItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Machinery", href: "/machinery", icon: Tractor },
  { name: "Labors", href: "/labors", icon: Users },
  { name: "Working Clusters", href: "/working-clusters", icon: MapPin },
  { name: "Knowledge Bite", href: "/knowledge-bite", icon: BookOpen, badge: "New" },
  { name: "Partner", href: "/partner", icon: Handshake },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm border-b border-border/80 py-2.5"
          : "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-border/40 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                <Image
                  src="/farmo-logo.png"
                  alt="Farmo Logo"
                  width={150}
                  height={44}
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground/80 hover:text-primary hover:bg-muted/30"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-primary/15 text-primary">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Download App CTA */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full border border-border/80 bg-background hover:bg-muted/40 text-foreground transition-all duration-200 shadow-2xs hover:shadow-xs"
              title="Download Farmo App on Google Play"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Get App</span>
            </a>

            {/* Get in Touch CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#1a4570] hover:bg-[#153759] text-white transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-primary" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full bg-[#1a4570] text-white"
            >
              <PhoneCall className="w-3 h-3 text-primary" />
              <span>Contact</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-foreground hover:bg-muted/40 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Sheet Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="p-5 flex flex-col gap-4 max-w-md mx-auto">
            {/* Farmo intro badge */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-primary/10 via-background to-[#1a4570]/10 border border-primary/20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Farmo Agricultural Mechanization
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Smart machinery & verified labors at your farm doorstep
                </p>
              </div>
            </div>

            {/* Nav list */}
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/15 text-primary font-semibold"
                        : "text-foreground hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-muted/50 text-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-primary/20 text-primary">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                )
              })}
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-border flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1a4570] text-white font-medium text-sm shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Get in Touch with Farmo</span>
              </Link>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border bg-card text-foreground font-medium text-sm shadow-2xs hover:bg-muted/20"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Download Farmo Android App</span>
              </a>
            </div>

            {/* Quick Support Phone */}
            <div className="text-center pt-2 text-xs text-muted-foreground">
              Direct Farmer Helpline:{" "}
              <a href="tel:+919175877571" className="text-primary font-semibold">
                +91-9175877571
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
