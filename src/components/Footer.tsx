import { useState } from 'react';
import { Check, Copy, Download } from 'lucide-react';
import { PROFILE, triggerCVDownload } from '../data/portfolio';
import { SectionId } from './Navbar';

interface FooterProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onScrollToSection: (section: SectionId) => void;
}

export function Footer({ theme, onToggleTheme, onScrollToSection }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer
      id="footer"
      className="border-t border-[#D4D4D0] dark:border-[#242424] bg-[#F6F6F4]/88 dark:bg-[#080808]/88 backdrop-blur-[2px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-16 space-y-10">
        {/* Top Row: Contact & Direct Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          <div className="lg:col-span-6 space-y-3">
            <p className="font-pixel-display text-2xl md:text-3xl font-bold text-[#0A0A0A] dark:text-[#FFFFFF]">
              {PROFILE.brand} — {PROFILE.name}
            </p>
            <p className="text-sm text-[#525252] dark:text-[#A1A1AA] max-w-md leading-relaxed">
              {PROFILE.role}. Berbasis di {PROFILE.location} · {PROFILE.availability}.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row lg:justify-end items-start sm:items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono border border-[#D4D4D0] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#111111] text-[#0A0A0A] dark:text-[#F5F5F3] hover:border-[#0A0A0A] dark:hover:border-[#F5F5F3] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Email Tersalin ({PROFILE.email})</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{PROFILE.email}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={triggerCVDownload}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium bg-[#0A0A0A] text-[#F6F6F4] dark:bg-[#F5F5F3] dark:text-[#080808] border border-[#0A0A0A] dark:border-[#F5F5F3] hover:bg-transparent hover:text-[#0A0A0A] dark:hover:bg-transparent dark:hover:text-[#F5F5F3] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Unduh CV</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Links & Theme Toggle */}
        <div className="pt-8 border-t border-[#E5E5E2] dark:border-[#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#525252] dark:text-[#A1A1AA]">
            © 2026 {PROFILE.name} · Seluruh hak cipta dilindungi.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a
              href="#intro"
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection('intro');
              }}
              className="text-[#525252] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F3] transition-colors whitespace-nowrap"
            >
              Intro
            </a>
            <a
              href="#karya"
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection('karya');
              }}
              className="text-[#525252] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F3] transition-colors whitespace-nowrap"
            >
              Karya Pilihan
            </a>
            <a
              href="#riwayat"
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection('riwayat');
              }}
              className="text-[#525252] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F3] transition-colors whitespace-nowrap"
            >
              Riwayat Kerja
            </a>

            <button
              type="button"
              onClick={onToggleTheme}
              className="px-3 py-1.5 font-mono border border-[#D4D4D0] dark:border-[#262626] text-[#0A0A0A] dark:text-[#F5F5F3] hover:bg-[#0A0A0A] hover:text-[#F6F6F4] dark:hover:bg-[#F5F5F3] dark:hover:text-[#080808] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {theme === 'dark' ? 'Mode Kertas Putih' : 'Mode Tinta Hitam'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
