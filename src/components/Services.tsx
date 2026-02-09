import { Monitor, Palette, Code, Music, Clapperboard, Globe } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

interface ServicesProps {
  dict: Dictionary;
}

const icons = [Palette, Code, Monitor, Clapperboard, Music, Globe];

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wide uppercase">
            {dict.services.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            {dict.services.title}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {dict.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
