import React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Tractor, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Heart
} from "lucide-react"
import { PLAY_STORE_URL } from "./navbar"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-border/80 text-foreground pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/farmo-logo.png"
                alt="Farmo Logo"
                width={150}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed pr-4">
              Farmo is India&apos;s pioneering agricultural mechanization and labor platform. 
              We connect farmers with high-efficiency machinery rentals and skilled farm workers through verified hyper-local clusters.
            </p>
            
            {/* Google Play Download Badge */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-foreground/80 mb-2">Book Faster on Our Mobile App:</p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  alt="Get Farmo on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  className="h-12 w-auto object-contain -ml-2"
                />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Machine Owners & Trained Rural Labor</span>
            </div>
          </div>

          {/* Quick Links 1: Offerings & Ecosystem */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-foreground">
              Offerings & Clusters
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/machinery"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Tractor className="w-3.5 h-3.5 text-primary" />
                  <span>Farm Machinery Rental</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/labors"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Skilled Farm Labors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/working-clusters"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#1a4570]" />
                  <span>Working Clusters</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-primary"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Company & Knowledge */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-foreground">
              Company & Insights
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-bite"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span>Knowledge Bite (Articles)</span>
                  <span className="px-1.5 py-0.2 text-[10px] uppercase font-bold rounded bg-primary/20 text-primary">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-foreground">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Agricultural Hub & Operations, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919175877571" className="hover:text-primary transition-colors font-medium">
                  +91-9175877571
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:support@farmo.in" className="hover:text-primary transition-colors">
                  support@farmo.in
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1a4570] hover:text-primary transition-colors"
              >
                <span>Request a Call Back</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Farmo Technologies Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>&bull;</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-foreground/80">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for Indian Agriculture
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
