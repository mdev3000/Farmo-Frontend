"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { PLAY_STORE_URL } from "@/lib/links";
export { PLAY_STORE_URL } from "@/lib/links";
const links = [
  ["Machinery", "/machinery"],
  ["Farm workers", "/labors"],
  ["Working clusters", "/working-clusters"],
  ["Knowledge Bite", "/knowledge-bite"],
  ["Partner", "/partner"],
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="sticky top-0 z-50 bg-[#f5f3e9]/95 backdrop-blur border-b border-[#cbd1c4] text-[#20372b]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 h-[72px] flex items-center justify-between gap-6">
        <Link href="/" aria-label="Farmo home">
          <Image
            src="/farmo-logo.png"
            alt="Farmo"
            width={150}
            height={44}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`text-[13px] font-medium hover:text-[#66805e] transition-colors ${pathname === href ? "text-[#66805e]" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/contact" className="text-[13px] font-medium">
            Contact
          </Link>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#264838] text-white px-5 py-3 text-[13px] font-semibold flex gap-3 items-center hover:bg-[#365b46]"
          >
            Get the app <ArrowUpRight size={15} />
          </a>
        </div>
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden absolute top-full inset-x-0 bg-[#f5f3e9] border-b border-[#cbd1c4] max-h-[calc(100dvh-72px)] overflow-y-auto px-5 pb-6"
        >
          {[...links, ["Contact", "/contact"]].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="flex justify-between items-center border-b border-[#d5dbd0] py-4 text-base font-medium"
            >
              {label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex bg-[#264838] text-white px-5 py-3 text-sm font-semibold"
          >
            Get the app
          </a>
        </nav>
      )}
    </header>
  );
}
