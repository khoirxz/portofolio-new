import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export type SectionId = 'intro' | 'karya' | 'riwayat' | 'footer';

interface NavbarProps {
  activeSection: SectionId;
  onScrollToSection: (section: SectionId) => void;
}

const NAV_LINKS: { label: string; id: SectionId }[] = [
  { label: 'Intro', id: 'intro' },
  { label: 'Karya', id: 'karya' },
  { label: 'Riwayat', id: 'riwayat' },
  { label: 'Kontak', id: 'footer' },
];

export function Navbar({ activeSection, onScrollToSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (id: SectionId) => {
    setMobileOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 pt-3 pointer-events-none">
      <div className="pointer-events-auto max-w-[1200px] mx-auto bg-[#F6F6F4]/95 dark:bg-[#0B0B0B]/95 backdrop-blur-sm border-2 border-[#0A0A0A] dark:border-[#F5F5F3] shadow-[4px_4px_0_0_#0A0A0A] dark:shadow-[4px_4px_0_0_#2C2C2C] px-4 sm:px-5 h-14 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            handleSelect('intro');
          }}
          className="font-pixel-display text-lg font-bold tracking-wider px-2.5 py-1 bg-[#0A0A0A] text-[#F6F6F4] dark:bg-[#F5F5F3] dark:text-[#080808] whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A] dark:focus-visible:outline-[#F5F5F3]"
        >
          KALA.PX
        </a>

        {/* Zone 2: Stepped Monochrome Pixel Nav Cells */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center border border-[#D4D4D0] dark:border-[#2A2A2A] divide-x divide-[#D4D4D0] dark:divide-[#2A2A2A] bg-[#FFFFFF] dark:bg-[#121212]"
        >
          {NAV_LINKS.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(item.id);
                }}
                className={`relative px-4 py-1.5 font-pixel-display text-sm tracking-wide transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A] dark:focus-visible:outline-[#F5F5F3] ${
                  active
                    ? 'text-[#F6F6F4] dark:text-[#080808]'
                    : 'text-[#404040] dark:text-[#B5B5B8] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pixel-block"
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-[#0A0A0A] dark:bg-[#F5F5F3]"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Tactile Pixel CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('footer')}
            className="hidden md:inline-flex items-center justify-center px-4 py-1.5 font-pixel-display text-sm font-bold tracking-wide bg-[#FFFFFF] text-[#0A0A0A] dark:bg-[#121212] dark:text-[#F5F5F3] border border-[#0A0A0A] dark:border-[#F5F5F3] shadow-[3px_3px_0_0_#0A0A0A] dark:shadow-[3px_3px_0_0_#F5F5F3] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A] dark:focus-visible:outline-[#F5F5F3]"
          >
            Hubungi
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[#0A0A0A] dark:border-[#F5F5F3] text-[#0A0A0A] dark:text-[#F5F5F3] hover:bg-[#0A0A0A] hover:text-[#F6F6F4] dark:hover:bg-[#F5F5F3] dark:hover:text-[#080808] transition-colors duration-150 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto md:hidden max-w-[1200px] mx-auto mt-2 border-2 border-[#0A0A0A] dark:border-[#F5F5F3] shadow-[4px_4px_0_0_#0A0A0A] dark:shadow-[4px_4px_0_0_#2C2C2C] bg-[#F6F6F4] dark:bg-[#0B0B0B] px-5 py-4"
          >
            <nav aria-label="Navigasi seluler" className="flex flex-col divide-y divide-[#D4D4D0] dark:divide-[#242424]">
              {NAV_LINKS.map((item) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelect(item.id);
                    }}
                    className={`py-3 px-2 font-pixel-display text-base tracking-wide whitespace-nowrap transition-colors ${
                      active
                        ? 'bg-[#0A0A0A] text-[#F6F6F4] dark:bg-[#F5F5F3] dark:text-[#080808] font-bold'
                        : 'text-[#404040] dark:text-[#B5B5B8]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
