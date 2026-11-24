import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
  title: "Terms & Conditions — Farmo",
  description: "Read the terms, rules, and guidelines for using the Farmo agricultural mechanization and labor platform.",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full min-h-screen py-12 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <ScrollReveal className="border-t border-border py-8">
          <div className="border-b border-border pb-6 mb-8">
            <span className="text-xs uppercase font-bold text-primary tracking-wider">
              Legal Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mt-1">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-muted-foreground mt-2">
              Effective Date: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          <div className="space-y-8 text-foreground/90 text-base leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Farmo website, mobile applications, or rural cluster services (&ldquo;Platform&rdquo;), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you must not access the platform. These Terms apply to all users, including farmers seeking machinery or labor (&ldquo;Customers&rdquo;) and equipment owners, drivers, or labor contractors (&ldquo;Partners/Providers&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">2. Nature of Platform &amp; Working Clusters</h2>
              <p>
                Farmo is an agricultural mechanization and workforce enablement platform. We establish digital coordination and physical working clusters to connect agricultural equipment owners and farm laborers with growers. Farmo verifies equipment fitness and operator credentials, and facilitates digital transparent dispatch through our cluster coordinators.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">3. Service Bookings &amp; Fuel Terms</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong className="text-foreground">Booking Confirmation:</strong> Bookings requested through the website or mobile application are scheduled based on machine and labor squad availability in your designated village cluster.</li>
                <li><strong className="text-foreground">Wet vs Dry Rent:</strong> If &ldquo;Wet Rent&rdquo; is selected, diesel is provided as part of the hourly/acreage fee. If &ldquo;Dry Rent&rdquo; is selected, the customer must supply clean, uncontaminated diesel at their field boundary.</li>
                <li><strong className="text-foreground">Hour Meter &amp; Acreage Calculation:</strong> Invoicing is strictly calculated based on digital GPS telemetry or cluster coordinator physical acre verification.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">4. Partner &amp; Provider Standards</h2>
              <p className="mb-2">
                All registered machinery owners and labor crew captains agree to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>Maintain valid registration certificates (RC) and safety inspection compliance.</li>
                <li>Ensure machine operators hold valid commercial driver licenses where legally mandated.</li>
                <li>Treat all agricultural labor crews with dignity and uphold fair wage compliance.</li>
                <li>Report punctually to scheduled field locations as directed by the cluster dispatch manager.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">5. Weather &amp; Force Majeure Grace</h2>
              <p>
                Agriculture is subject to sudden weather changes. In the event of unseasonal rains, hail, or flooded terrain that makes field mechanization technically impossible or unsafe, neither the farmer nor the equipment partner shall be penalized for rescheduling.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">6. Contact &amp; Grievance Redressal</h2>
              <p>
                For questions or dispute resolution regarding bookings or payments, contact our operations desk at{" "}
                <a href="mailto:support@farmo.in" className="text-primary font-bold hover:underline">
                  support@farmo.in
                </a>{" "}
                or call{" "}
                <a href="tel:+919175877571" className="text-primary font-bold hover:underline">
                  +91-9175877571
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <Link href="/" className="text-primary font-semibold hover:underline">
              &larr; Back to Farmo Home
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Read Privacy Policy &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
