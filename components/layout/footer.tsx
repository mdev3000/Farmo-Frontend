import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-[#203c2e] text-[#f5f3e9]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block bg-[#f5f3e9] p-2">
              <Image
                src="/farmo-logo.png"
                alt="Farmo"
                width={130}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="font-serif text-3xl sm:text-4xl leading-tight mt-6 max-w-sm">
              Farm machinery and workers.
            </p>
            <p className="text-sm text-[#c3d0c2] max-w-sm mt-4 leading-relaxed">
              Connecting farmers with machinery and farm workers.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[.18em] text-[#a8bca7] mb-5">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              {[
                ["Machinery", "/machinery"],
                ["Farm workers", "/labors"],
                ["Working clusters", "/working-clusters"],
                ["Knowledge Bite", "/knowledge-bite"],
                ["Become a partner", "/partner"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#b8cba9]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[.18em] text-[#a8bca7] mb-5">
              Farmo
            </p>
            <ul className="space-y-3 text-sm">
              {[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Terms", "/terms"],
                ["Privacy", "/privacy"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#b8cba9]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[.18em] text-[#a8bca7] mb-5">
              Get in touch
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <a href="tel:+919175877571">+91 91758 77571</a>
              </p>
              <p>
                <a href="mailto:support@farmo.in">support@farmo.in</a>
              </p>
              <p>
                <a href="https://wa.me/919175877571?text=Hello%20Farmo%2C%20I%20want%20to%20inquire%20about%20services">
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[#a8bca7] pb-1 mt-3"
                >
                  Get the Farmo app <ArrowUpRight size={15} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#56705c] pt-6 flex flex-wrap gap-3 justify-between text-xs text-[#b8c8b7]">
          <span>© {new Date().getFullYear()} Farmo Technologies Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  );
}
