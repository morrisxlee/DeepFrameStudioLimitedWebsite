import { Gamepad2 } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeroProps {
  dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-400 mb-8">
          <Gamepad2 size={16} className="text-violet-400" />
          {dict.hero.badge}
        </div>

        {/* Company Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-4">
          {dict.hero.title1}
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {dict.hero.title2}
          </span>
        </h1>

        {/* Chinese Name */}
        <p className="text-xl sm:text-2xl text-zinc-500 font-medium mb-6">
          {dict.hero.chineseName}
        </p>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {dict.hero.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#games"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {dict.hero.cta1}
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/10 text-zinc-300 font-medium text-sm hover:bg-white/5 transition-colors"
          >
            {dict.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center">
          <div className="w-1 h-2.5 bg-zinc-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
