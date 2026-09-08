import React from "react"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, ArrowRight, Calendar, Clock } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export interface Article {
  slug: string
  title: string
  category: string
  summary: string
  date: string
  readTime: string
  author: string
  image: string
}

export const FEATURED_ARTICLES: Article[] = [
  {
    slug: "drone-sprayers-revolution-rural-india",
    title: "How Agricultural Drone Sprayers Are Slashing Chemical Usage by 40%",
    category: "Agri-Tech & Drones",
    summary: "Ultra-low volume spraying technology reduces pesticide runoff, saves groundwater, and protects farm labor health.",
    date: "Aug 28, 2026",
    readTime: "4 min read",
    author: "Farmo Tech Team",
    image: "/drone-spray-field.jpg",
  },
  {
    slug: "smam-government-subsidies-custom-hiring-centers",
    title: "Government Subsidies for Custom Hiring Centers (CHC) in 2026",
    category: "Policy & Subsidies",
    summary: "How farmers and rural entrepreneurs can avail up to 40-50% financial assistance for agricultural machinery pools.",
    date: "Jul 30, 2026",
    readTime: "5 min read",
    author: "Farmo Advisory",
    image: "/govt-subsidy-chc.jpg",
  },
]

export function KnowledgeBitePreview() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Knowledge Bite — Tech &amp; Agri Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Learn What&apos;s New in Agricultural Mechanization
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Practical guides, drone field trials, and government subsidy breakdowns written for progressive Indian growers.
            </p>
          </div>

          <Link
            href="/knowledge-bite"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-foreground hover:text-primary hover:border-primary/40 font-semibold text-sm transition-all shadow-2xs group shrink-0"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-primary" />
          </Link>
        </ScrollReveal>

        {/* 2 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FEATURED_ARTICLES.map((article, idx) => (
            <ScrollReveal key={article.slug} delay={idx * 100}>
              <article className="flex flex-col justify-between rounded-3xl bg-[#fafafa] dark:bg-zinc-900 border border-border/80 shadow-2xs hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden h-full">
                {/* Article Image Banner */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      <Link href={`/knowledge-bite#${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>

                    <Link
                      href={`/knowledge-bite#${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
