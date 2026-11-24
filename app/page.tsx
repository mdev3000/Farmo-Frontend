import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/links";
import { VideoSection } from "@/components/sections/video-section";

export const metadata: Metadata = {
  title: { absolute: "Farmo — Farm machinery and workers" },
  description: "Find farm machinery and agricultural workers with Farmo.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Farmo",
    url: "https://farmo.in",
    logo: "https://farmo.in/farmo-logo.png",
  };
  return (
    <div className="bg-[#f5f3e9] text-[#20372b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 pt-7 lg:pt-12 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 lg:py-10">
            <h1 className="font-serif text-[clamp(3.25rem,6vw,6rem)] leading-[1.02] tracking-[-.045em]">
              Machinery and workers for your farm.
            </h1>
            <p className="mt-7 max-w-md text-base sm:text-lg leading-relaxed text-[#56665b]">
              Find tractors, implements and local crews for planting, spraying and harvest.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/machinery"
                className="inline-flex items-center gap-5 bg-[#264838] text-white px-6 py-4 text-sm font-semibold hover:bg-[#365b46] transition-colors"
              >
                Explore machinery <ArrowRight size={17} />
              </Link>
              <Link
                href="/labors"
                className="inline-flex items-center gap-5 border border-[#aab6a3] px-6 py-4 text-sm font-semibold hover:bg-white/50 transition-colors"
              >
                Find farm workers <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="relative h-[390px] sm:h-[520px] lg:h-[650px] overflow-hidden bg-[#c5d0bb]">
              <Image
                src="/farmo-workers-field.jpg"
                alt="Farm workers tending a field"
                fill
                priority
                sizes="(min-width:1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 pb-20 lg:pb-28"
      >
        <div className="grid md:grid-cols-12 gap-6 mb-10 items-end">
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-4">
              Farm services
            </h2>
          </div>
          <p className="md:col-span-5 md:max-w-sm md:ml-auto text-[#5f6e62] leading-relaxed">
            Choose the type of work you need.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Link href="/machinery" className="group block">
            <div className="relative h-[280px] sm:h-[390px] overflow-hidden bg-[#c5d0bb]">
              <Image
                src="/farmo-tractor-road.jpg"
                alt="A tractor on its way to work"
                fill
                sizes="(min-width:768px) 50vw,100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex justify-between gap-5 border-b border-[#b9c4b5] py-5">
              <div>
                <h3 className="font-serif text-3xl mt-2">
                  Machinery for the job
                </h3>
                <p className="text-sm text-[#657367] mt-2">
                  Tractors, implements, harvesters and more.
                </p>
              </div>
              <ArrowUpRight className="mt-2 shrink-0" />
            </div>
          </Link>
          <Link href="/labors" className="group block">
            <div className="relative h-[280px] sm:h-[390px] overflow-hidden bg-[#c5d0bb]">
              <Image
                src="/farmo-workers-field.jpg"
                alt="Agricultural workers in a field"
                fill
                sizes="(min-width:768px) 50vw,100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex justify-between gap-5 border-b border-[#b9c4b5] py-5">
              <div>
                <h3 className="font-serif text-3xl mt-2">Farm workers</h3>
                <p className="text-sm text-[#657367] mt-2">
                  Find workers for a range of agricultural tasks.
                </p>
              </div>
              <ArrowUpRight className="mt-2 shrink-0" />
            </div>
          </Link>
        </div>
      </section>
      <section className="bg-[#dfe7d8] py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative min-h-[340px] lg:min-h-[480px]">
            <Image
              src="/farmo-ravgaon-cluster-30km.jpg"
              alt="Farmo's Ravgaon working cluster"
              fill
              sizes="(min-width:768px) 50vw,100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-5">
              Find services close to your farm.
            </h2>
            <p className="mt-6 text-[#526458] leading-relaxed">
              Farmo brings machinery owners, workers and farmers together
              through local working clusters.
            </p>
            <Link
              href="/working-clusters"
              className="inline-flex items-center gap-5 border-b border-[#365b46] pb-2 mt-8 font-semibold text-sm"
            >
              Explore working clusters <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <VideoSection />
      <section className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 py-20 lg:py-28 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-5">
            Offer your services with Farmo.
          </h2>
          <p className="mt-6 max-w-md text-[#5f6e62] leading-relaxed">
            Own machinery or provide farm services? Join the network and connect
            with farmers looking for your skills.
          </p>
          <Link
            href="/partner"
            className="inline-flex items-center gap-5 bg-[#264838] text-white px-6 py-4 text-sm font-semibold mt-8 hover:bg-[#365b46]"
          >
            Become a partner <ArrowRight size={17} />
          </Link>
        </div>
        <div className="border-t border-[#b9c4b5] pt-6 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[.18em] text-[#71816d]">
              Keep exploring
            </p>
            <Link
              href="/knowledge-bite"
              className="group flex justify-between gap-4 items-center border-b border-[#cbd1c4] py-6"
            >
              <span>
                <span className="block font-serif text-3xl">
                  Knowledge Bite
                </span>
                <span className="block text-sm text-[#657367] mt-2">
                  Ideas and information for the field.
                </span>
              </span>
              <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 font-semibold text-sm"
          >
            Get the Farmo app <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
