"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

interface NavbarProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.services, href: "#services" },
    { label: dict.nav.games, href: "#games" },
    { label: dict.nav.media, href: `/${locale}/media` },
    { label: dict.nav.contact, href: "#contact" },
  ];

  const otherLocale = locale === "zh-hk" ? "en" : "zh-hk";
  const otherLocaleName = locale === "zh-hk" ? "EN" : "中文";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-bold text-sm text-white">
            DF
          </div>
          <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
            Deep Frame Studio
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* Language Switcher */}
          <a
            href={`/${otherLocale}`}
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1.5"
          >
            <Globe size={14} />
            {otherLocaleName}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`/${otherLocale}`}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors border border-white/10 rounded-full px-2.5 py-1"
          >
            <Globe size={12} />
            {otherLocaleName}
          </a>
          <button
            className="text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
