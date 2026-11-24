"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  X,
  Sparkles,
  Tag,
} from "lucide-react"

interface Article {
  id: string
  title: string
  category: string
  readTime: string
  date: string
  author: string
  summary: string
  content: string[]
  tags: string[]
  image: string
}

const ALL_ARTICLES: Article[] = [
  {
    id: "drone-sprayers-revolution-rural-india",
    title: "How Agricultural Drone Sprayers Are Slashing Chemical Costs by 40%",
    category: "Agri-Tech & Drones",
    readTime: "5 min read",
    date: "Aug 28, 2026",
    author: "Farmo Agritech Research",
    image: "/drone-spray-field.jpg",
    summary: "Ultra-low volume spraying technology reduces pesticide runoff, saves groundwater, and eliminates hazardous manual chemical exposure for farm labor.",
    content: [
      "Traditional knapsack spraying requires between 150 to 200 liters of water per acre, leading to heavy chemical runoff, soil compaction, and severe chemical inhalation risks for farm labor.",
      "Agricultural multi-rotor drones equipped with centrifugal atomizers atomize pesticide into ultra-fine 100-micron droplets. This requires only 10 to 12 liters of water per acre while achieving complete canopy coverage through downward propeller rotor thrust.",
      "In extensive cluster trials across 5,000 acres of cotton, soybean, and paddy in Maharashtra and Punjab, Farmo documented a 38% reduction in active chemical expenditure, 90% water conservation, and complete elimination of human pesticide intoxication.",
      "Through Farmo's working cluster model, smallholders can book certified drone pilots on-demand without buying a ₹6-8 Lakh drone setup."
    ],
    tags: ["Drones", "Precision Farming", "Crop Protection", "Paddy & Cotton"],
  },
  {
    id: "smam-government-subsidies-custom-hiring-centers",
    title: "Government Subsidies for Custom Hiring Centers (CHC) in 2026",
    category: "Policies & Subsidies",
    readTime: "4 min read",
    date: "Jul 30, 2026",
    author: "Farmo Policy Advisory",
    image: "/govt-subsidy-chc.jpg",
    summary: "How farmers, FPOs, and rural entrepreneurs can avail 40% to 50% financial assistance for agricultural machinery pools under SMAM.",
    content: [
      "The Sub-Mission on Agricultural Mechanization (SMAM) continues to be the flagship central scheme providing direct financial assistance to establish village-level Custom Hiring Centers (CHCs).",
      "Individual rural entrepreneurs and farmers are eligible for 40% project cost subsidy (up to ₹10 Lakhs), while registered Farmer Producer Organizations (FPOs) and Primary Agricultural Credit Societies (PACS) can claim up to 80% subsidy (up to ₹40 Lakhs).",
      "Farmo cluster teams assist applicants with detailed project reports (DPRs), manufacturer empanelment, and portal submissions under the State Agriculture Department windows.",
      "By integrating with Farmo's cluster network, subsidized equipment achieves peak year-round operating utilization instead of sitting idle."
    ],
    tags: ["Subsidies", "SMAM", "FPO", "Rural Entrepreneurship"],
  },
]

const CATEGORIES = [
  "All",
  "Agri-Tech & Drones",
  "Policies & Subsidies",
]

export default function KnowledgeBitePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)

  const filteredArticles = ALL_ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === "All" || art.category === selectedCategory
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Header Banner - Full Viewport Height with AI Image */}
      <section className="relative isolate flex min-h-[430px] md:min-h-[520px] flex-col justify-end overflow-hidden bg-foreground py-14 md:py-20 border-b border-border">
        <Image
          src="/drone-spray-field.jpg"
          alt="Farmo Agritech Research & Knowledge"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Clean bottom gradient for text contrast while keeping drone sprayer and field completely visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        <ScrollReveal className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-left">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.08] max-w-3xl">
              Practical Knowledge for Better Farm Decisions
            </h1>

            <div className="max-w-md mx-auto relative pt-1">
              <Search className="w-4 h-4 text-white/70 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search drone tech, CHC subsidies, trials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/25 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-md shadow-lg transition-all"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Category Filters */}
      <section className="py-4 bg-background border-b border-border/60 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-sm scale-102"
                    : "bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Articles Grid: Exactly 2 Featured Articles */}
      <section className="py-12 sm:py-16 bg-muted/30 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-2xl border border-border p-8 max-w-md mx-auto">
              <BookOpen className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground">No articles found</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Try searching for keywords like &quot;drone&quot; or &quot;subsidy&quot;.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article, idx) => (
                <ScrollReveal key={article.id} delay={idx * 100}>
                  <article
                    id={article.id}
                    className="flex flex-col justify-between rounded-3xl bg-card border border-border shadow-xs hover:shadow-lg transition-all duration-300 group overflow-hidden h-full"
                  >
                    {/* Visual Image Banner */}
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{article.readTime}</span>
                        </div>

                        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </h2>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {article.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{article.date}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveArticle(article)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform cursor-pointer"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Reading Modal Dialog */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card rounded-3xl border border-border p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs">
                {activeArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close article"
                title="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative h-56 w-full rounded-2xl overflow-hidden border border-border">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground leading-tight">
                {activeArticle.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm text-foreground/90 leading-relaxed border-t border-border pt-4">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
