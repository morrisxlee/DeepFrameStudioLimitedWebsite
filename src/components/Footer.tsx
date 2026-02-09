import type { Dictionary, Locale } from "@/i18n/dictionaries";

interface FooterProps {
  dict: Dictionary;
  locale?: Locale;
}

export default function Footer({ dict, locale = "zh-hk" }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Company */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo/DEEP FRAME STUDIO LOGO black background.png"
              alt="Deep Frame Studio"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <div>
              <p className="text-white font-semibold text-sm">
                Deep Frame Studio Limited
              </p>
              <p className="text-zinc-500 text-xs">深幀工作室有限公司</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href={`/${locale}#about`} className="hover:text-zinc-300 transition-colors">
              {dict.nav.about}
            </a>
            <a
              href={`/${locale}#services`}
              className="hover:text-zinc-300 transition-colors"
            >
              {dict.nav.services}
            </a>
            <a href={`/${locale}#games`} className="hover:text-zinc-300 transition-colors">
              {dict.nav.games}
            </a>
            <a
              href={`/${locale}#contact`}
              className="hover:text-zinc-300 transition-colors"
            >
              {dict.nav.contact}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-600 text-xs">
            &copy; {year} Deep Frame Studio Limited. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
