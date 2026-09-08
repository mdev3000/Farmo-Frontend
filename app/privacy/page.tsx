import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
  title: "Privacy Policy — Farmo",
  description: "Learn how Farmo collects, uses, and safeguards farmer and partner data across our agricultural platform.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen py-12 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <ScrollReveal className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="border-b border-border pb-6 mb-8">
            <span className="text-xs uppercase font-bold text-primary tracking-wider">
              Data Protection &amp; Trust
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          <div className="space-y-8 text-foreground/90 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">1. Introduction</h2>
              <p>
                Farmo (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and security of our farmers, machinery owners, and labor partners. This Privacy Policy details how we collect, process, and protect your information when you access our website, use our mobile application, or interact with our rural working cluster centers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong className="text-foreground">Contact Details:</strong> Your name, mobile telephone number, and village address for communication and identity verification.</li>
                <li><strong className="text-foreground">Agricultural Field Location:</strong> Precise GPS coordinates or village landmarks solely to dispatch machinery and labor teams accurately to your field boundary.</li>
                <li><strong className="text-foreground">Equipment &amp; Vehicle Data:</strong> Tractor registration certificates (RC), implement specifications, and maintenance history for partner machine owners.</li>
                <li><strong className="text-foreground">Service History:</strong> Acreage serviced, machine hours operated, and billing records.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">3. How We Use Your Data</h2>
              <p className="mb-2">We use information strictly for operational agricultural enablement:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>Dispatching machinery and skilled labor from the nearest cluster within 8 km.</li>
                <li>Sending booking status updates, OTP verifications, and arrival notifications via SMS and WhatsApp.</li>
                <li>Calculating fair and transparent billing based on GPS telemetry or acre measurements.</li>
                <li>Improving machine allocation algorithms to eliminate equipment downtime.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">4. Data Sharing &amp; Security</h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party advertisers. Information is shared only with assigned cluster coordinators, machine operators, or labor captains strictly necessary to fulfill your farm booking. All data is transmitted securely using industry-standard TLS encryption.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">5. Data Retention &amp; Rights</h2>
              <p>
                You have the right to request access to your stored records or request deletion of your account by contacting our privacy officer at{" "}
                <a href="mailto:privacy@farmo.in" className="text-primary font-bold hover:underline">
                  privacy@farmo.in
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <Link href="/" className="text-primary font-semibold hover:underline">
              &larr; Back to Farmo Home
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Read Terms of Service &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
