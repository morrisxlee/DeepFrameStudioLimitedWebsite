import { Mail, MapPin } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

interface ContactProps {
  dict: Dictionary;
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wide uppercase">
            {dict.contact.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            {dict.contact.title}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            {dict.contact.description}
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 mx-auto">
                <Mail size={24} className="text-violet-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                {dict.contact.emailLabel}
              </h3>
              <a
                href={`mailto:${dict.contact.email}`}
                className="text-zinc-400 hover:text-violet-400 transition-colors text-sm"
              >
                {dict.contact.email}
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 mx-auto">
                <MapPin size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                {dict.contact.locationLabel}
              </h3>
              <p className="text-zinc-400 text-sm">{dict.contact.location}</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`mailto:${dict.contact.email}`}
            className="inline-flex px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {dict.contact.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
