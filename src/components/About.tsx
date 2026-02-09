import { Target, Lightbulb, Users } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

interface AboutProps {
  dict: Dictionary;
}

export default function About({ dict }: AboutProps) {
  const icons = [Target, Lightbulb, Users];
  const values = [dict.about.mission, dict.about.vision, dict.about.culture];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-violet-400 mb-3 tracking-wide uppercase">
            {dict.about.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            {dict.about.title}
            <span className="text-zinc-500">{dict.about.titleFaded}</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {dict.about.description}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                  <Icon size={24} className="text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
