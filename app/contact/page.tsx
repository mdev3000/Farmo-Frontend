"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    state: "Maharashtra",
    interest: "Machinery Booking",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.phoneNumber) return
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Header Banner - Full Viewport Height with AI Image */}
      <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col justify-end items-center overflow-hidden bg-black pb-6 sm:pb-8 pt-16 border-b border-border">
        <Image
          src="/contact-support-hub.jpg"
          alt="Farmo Operations Support Center"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Clean bottom gradient for text contrast while keeping support team and center completely visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-25% to-transparent" />

        <ScrollReveal className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-2">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-snug max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Talk Directly with the Farmo Team
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <a
                href="tel:+919175877571"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline: +91-9175877571</span>
              </a>

              <a
                href="https://wa.me/919175877571?text=Hello%20Farmo%2C%20I%20want%20to%20inquire%20about%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>Send Online Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Clean Helpline Timing Bar below Hero Image */}
      <div className="w-full bg-white dark:bg-zinc-950 border-b border-border py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-foreground/80 font-medium">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Helpline Hours: Daily, 6:00 AM – 9:00 PM
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Sub-30 Min Callback Time
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            On-Ground Cluster Assistance
          </span>
        </div>
      </div>

      {/* 2. Direct Contacts & Inquiry Form */}
      <section id="inquiry-form" className="py-14 sm:py-20 bg-white dark:bg-zinc-950 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Contacts */}
            <ScrollReveal className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-primary tracking-wider">
                  Contact Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  Reach Us Directly
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connect through our regional farmer helpline, WhatsApp support desk, or regional cluster hub.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#fafafa] dark:bg-zinc-900 border border-border flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Farmer Hotline &amp; Bookings</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Daily, 6:00 AM to 9:00 PM</p>
                    <a
                      href="tel:+919175877571"
                      className="inline-block mt-2 text-sm font-extrabold text-primary hover:underline"
                    >
                      +91-9175877571
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#fafafa] dark:bg-zinc-900 border border-border flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">WhatsApp Agricultural Support</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Availability updates, equipment photos &amp; voice notes</p>
                    <a
                      href="https://wa.me/919175877571?text=Hello%20Farmo%2C%20I%20want%20to%20inquire%20about%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:underline"
                    >
                      Chat on WhatsApp (+91-9175877571) &rarr;
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#fafafa] dark:bg-zinc-900 border border-border flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#1a4570]/10 text-[#1a4570] dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Email Communications</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Partnership, franchise, and vendor proposals</p>
                    <a
                      href="mailto:support@farmo.in"
                      className="inline-block mt-2 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      support@farmo.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-primary pl-4 py-2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1a4570] dark:text-sky-400 uppercase tracking-wide">
                  <MapPin className="w-4 h-4" />
                  <span>Farmo Operations Hub</span>
                </div>
                <p className="text-xs text-foreground/90 font-medium leading-relaxed">
                  Farmo Technologies Pvt. Ltd.<br />
                  National Agricultural Mechanization Centre<br />
                  Maharashtra, India
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Inquiry Form */}
            <ScrollReveal delay={100} className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-lg">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. A Farmo Cluster Coordinator from your region will call you at <strong>{formData.phoneNumber}</strong> within 30 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-xs uppercase font-bold text-primary tracking-wider">
                        Send an Inquiry
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-1">
                        How can we help your farm?
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Patil"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9175877571"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, phoneNumber: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">
                          State / Region
                        </label>
                        <select
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                          <option value="Maharashtra">Maharashtra (Active Clusters)</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Other">Other State</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">
                          I am interested in:
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) =>
                            setFormData({ ...formData, interest: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                          <option value="Machinery Booking">Machinery Booking</option>
                          <option value="Labor Squad Booking">Labor Squad Booking</option>
                          <option value="List My Machinery (Partner)">List My Machinery (Partner)</option>
                          <option value="Register as Labor Contractor">Register as Labor Contractor</option>
                          <option value="Cluster Franchise Lead">Cluster Franchise Lead</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Message / Field Requirements
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your crop, acres, machinery required, or preferred cluster location..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  )
}
