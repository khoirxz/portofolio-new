import { useCallback, useEffect, useState } from 'react';
import { ArrowRight, Check, Download } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Navbar, SectionId } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResilientImage } from './components/ResilientImage';
import { ProjectLightbox } from './components/ProjectLightbox';
import ASCIIText from './components/ASCIIText';
import { AsciiJellyfish } from './components/AsciiJellyfish';
import {
  EXPERIENCES,
  HERO_MEDIA,
  PROFILE,
  PROJECTS,
  ProjectCategory,
  ProjectItem,
  triggerCVDownload,
} from './data/portfolio';

type FilterOption = 'Semua' | ProjectCategory;

const FILTER_OPTIONS: FilterOption[] = [
  'Semua',
  'Web App',
  'Desain Sistem',
  'Eksperimen Pixel',
];

const listContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.04,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.34,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState<SectionId>('intro');
  const [activeFilter, setActiveFilter] = useState<FilterOption>('Semua');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [cvDownloaded, setCvDownloaded] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const sectionIds: SectionId[] = ['intro', 'karya', 'riwayat', 'footer'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      let current: SectionId = 'intro';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        current = 'footer';
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: SectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handleDownloadCV = useCallback(() => {
    triggerCVDownload();
    setCvDownloaded(true);
    window.setTimeout(() => setCvDownloaded(false), 2400);
  }, []);

  const filteredProjects =
    activeFilter === 'Semua'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F6F6F4] dark:bg-[#080808] text-[#0A0A0A] dark:text-[#F5F5F3] pixel-grid-overlay transition-colors duration-200">
      {/* Full-Viewport Monochrome ASCII Jellyfish Background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none opacity-45 dark:opacity-55"
      >
        <AsciiJellyfish count={4} variant="mono" className="w-full h-full" />
      </div>

      <Navbar activeSection={activeSection} onScrollToSection={scrollToSection} />

      <main className="relative z-10 flex-1">
        {/* ================================================================
            SECTION 1: INTRO DENGAN PROFILE BERGAYA PIXELATED & TOMBOL UNDUH CV
            ================================================================ */}
        <section id="intro" className="scroll-mt-20">
          <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-14 lg:pt-14 lg:pb-16">
            {/* Minimalist Interactive Monochrome ASCIIText Hero */}
            <div className="relative w-full h-[200px] sm:h-[260px] border border-[#D4D4D0] dark:border-[#242424] bg-[#EFEFED]/50 dark:bg-[#0B0B0B]/80 overflow-hidden">
              <ASCIIText
                text="KALA.PX"
                asciiFontSize={7}
                fontFamily="'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
                colors={['#ffffff', '#d4d4d4', '#8a8a8a']}
                textColor="#ffffff"
                textScale={1.15}
                blocks={0.7}
                waves={0.45}
                waveSpeed={0.8}
                chroma={0}
                tilt={0.75}
                hueShift={0}
                scramble={0.55}
                clickRipple
                idle
                interactive
                theme={theme}
              />
            </div>

            {/* Minimalist Profile Row + Download CV CTA */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#D4D4D0] dark:border-[#242424] flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6">
              <div className="grid grid-cols-[76px_1fr] sm:grid-cols-[112px_1fr] items-center sm:items-start gap-x-4 sm:gap-x-5 gap-y-3 sm:gap-y-1.5">
                <div className="w-[76px] h-[76px] sm:w-28 sm:h-28 sm:row-span-2 shrink-0 border border-[#0A0A0A] dark:border-[#F5F5F3] bg-[#FFFFFF] dark:bg-[#111111] overflow-hidden">
                  <ResilientImage
                    src={HERO_MEDIA.image}
                    alt={HERO_MEDIA.alt}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1 min-w-0">
                  <h1 className="font-pixel-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] dark:text-[#FFFFFF] leading-tight">
                    {PROFILE.name}
                  </h1>
                  <p className="text-xs font-mono text-[#525252] dark:text-[#A1A1AA] leading-relaxed">
                    {PROFILE.role} · {PROFILE.location}
                  </p>
                </div>

                <p className="col-span-2 sm:col-span-1 sm:col-start-2 text-sm text-[#404040] dark:text-[#D4D4D4] max-w-lg leading-relaxed">
                  Merancang antarmuka web presisi bergaya monokrom dengan animasi transisi yang halus dan ringan.
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[44px] text-sm font-medium bg-[#0A0A0A] text-[#F6F6F4] dark:bg-[#F5F5F3] dark:text-[#080808] border border-[#0A0A0A] dark:border-[#F5F5F3] hover:bg-transparent hover:text-[#0A0A0A] dark:hover:bg-transparent dark:hover:text-[#F5F5F3] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {cvDownloaded ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span>CV Berhasil Diunduh</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" aria-hidden="true" />
                      <span>Unduh CV</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 2: KARYA DAN RIWAYAT KERJA (BENTUK DAFTAR)
            ================================================================ */}
        <section id="karya" className="scroll-mt-20 max-w-[1200px] mx-auto px-6 py-16 lg:py-20 space-y-16">
          {/* 2A. Daftar Karya Pilihan + Filter */}
          <div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#D4D4D0] dark:border-[#242424]">
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#525252] dark:text-[#A1A1AA]">
                  Bagian 01 · Daftar Proyek
                </p>
                <h2 className="font-pixel-display text-3xl md:text-4xl font-bold text-[#0A0A0A] dark:text-[#FFFFFF]">
                  Karya Pilihan
                </h2>
                <p className="text-sm text-[#525252] dark:text-[#A1A1AA] max-w-xl">
                  Daftar studi kasus pilihan dalam tema monokrom. Pilih salah satu item untuk membuka pratinjau visual dan detail proyek.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Filter kategori karya"
                className="flex flex-wrap items-center gap-1.5 p-1 border border-[#D4D4D0] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#111111] self-start lg:self-auto"
              >
                {FILTER_OPTIONS.map((option) => {
                  const isSelected = activeFilter === option;
                  return (
                    <button
                      key={option}
                      role="tab"
                      aria-selected={isSelected}
                      type="button"
                      onClick={() => setActiveFilter(option)}
                      className={`px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0A0A0A] text-[#F6F6F4] dark:bg-[#F5F5F3] dark:text-[#080808]'
                          : 'text-[#525252] dark:text-[#A1A1AA] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F3]'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div
              key={activeFilter}
              variants={listContainerVariants}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="mt-8 border border-[#D4D4D0] dark:border-[#262626] bg-[#FFFFFF]/88 dark:bg-[#111111]/85 backdrop-blur-[2px] divide-y divide-[#D4D4D0] dark:divide-[#262626]"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  variants={listItemVariants}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group w-full text-left p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#EFEFED] dark:hover:bg-[#171717] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0A0A0A] dark:focus-visible:outline-[#F5F5F3]"
                  >
                    <div className="md:col-span-3 flex items-center gap-2 font-mono text-xs text-[#525252] dark:text-[#A1A1AA] tabular-nums">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category}</span>
                    </div>

                    <div className="md:col-span-4 space-y-1">
                      <h3 className="font-pixel-display text-xl font-bold text-[#0A0A0A] dark:text-[#FFFFFF] group-hover:underline underline-offset-4">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#525252] dark:text-[#A1A1AA]">
                        {project.client} · {project.role}
                      </p>
                    </div>

                    <div className="md:col-span-4 text-sm text-[#404040] dark:text-[#D4D4D4] leading-relaxed">
                      {project.summary}
                    </div>

                    <div className="md:col-span-1 flex md:justify-end items-center text-xs font-mono text-[#0A0A0A] dark:text-[#F5F5F3] whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        Detail
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 2B. Daftar Riwayat Kerja */}
          <div id="riwayat" className="scroll-mt-24 pt-12 border-t border-[#D4D4D0] dark:border-[#242424] space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#525252] dark:text-[#A1A1AA]">
                Bagian 02 · Pengalaman Profesional
              </p>
              <h2 className="font-pixel-display text-3xl md:text-4xl font-bold text-[#0A0A0A] dark:text-[#FFFFFF]">
                Riwayat Kerja
              </h2>
            </div>

            <motion.div
              variants={listContainerVariants}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="border border-[#D4D4D0] dark:border-[#262626] bg-[#FFFFFF]/88 dark:bg-[#111111]/85 backdrop-blur-[2px] divide-y divide-[#D4D4D0] dark:divide-[#262626]"
            >
              {EXPERIENCES.map((exp) => (
                <motion.div
                  key={exp.period + exp.organization}
                  variants={listItemVariants}
                  className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
                >
                  <div className="md:col-span-3 font-mono text-xs text-[#525252] dark:text-[#A1A1AA] tabular-nums">
                    {exp.period}
                  </div>
                  <div className="md:col-span-4 space-y-1">
                    <h3 className="font-semibold text-base text-[#0A0A0A] dark:text-[#FFFFFF]">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-[#525252] dark:text-[#A1A1AA]">
                      {exp.organization} · {exp.location}
                    </p>
                  </div>
                  <div className="md:col-span-5 text-sm text-[#404040] dark:text-[#D4D4D4] leading-relaxed">
                    {exp.outcome}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* ================================================================
          SECTION 3: FOOTER
          ================================================================ */}
      <div className="relative z-10">
        <Footer
          theme={theme}
          onToggleTheme={toggleTheme}
          onScrollToSection={scrollToSection}
        />
      </div>

      {/* Case Study Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}
