import { ExternalLink, Gamepad2, Sparkles } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

interface GamesProps {
  dict: Dictionary;
}

export default function Games({ dict }: GamesProps) {
  const g = dict.games;

  return (
    <section id="games" className="py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-violet-400 mb-3 tracking-wide uppercase">
            {g.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            {g.title}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {g.description}
          </p>
        </div>

        {/* Featured Game: Isekai HKV */}
        <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-violet-500/20 transition-all mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Cover */}
            <div className="h-64 lg:h-auto bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)"
              }} />
              <div className="relative text-center px-8">
                <Gamepad2 size={48} className="text-white/40 mx-auto mb-4" />
                <span className="text-white/60 text-4xl sm:text-5xl font-bold tracking-tight">
                  {g.isekaiHKV.title}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {g.isekaiHKV.genre}
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full text-amber-400 bg-amber-400/10">
                  {g.isekaiHKV.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {g.isekaiHKV.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {g.isekaiHKV.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {g.isekaiHKV.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <Sparkles size={14} className="text-violet-400 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Steam CTA */}
              <a
                href="https://store.steampowered.com/app/3948940/V/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {g.isekaiHKV.steamCta}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="rounded-2xl p-8 border border-white/5 bg-white/[0.02] text-center">
          <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 mx-auto">
            <Sparkles size={24} className="text-zinc-500" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            {g.comingSoon.title}
          </h3>
          <p className="text-zinc-500 text-sm">{g.comingSoon.description}</p>
        </div>
      </div>
    </section>
  );
}
