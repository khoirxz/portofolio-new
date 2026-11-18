import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PROJECTS, ProjectItem } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectLightbox({
  project,
  onClose,
  onSelectProject,
}: ProjectLightboxProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  const currentIndex = project
    ? PROJECTS.findIndex((item) => item.slug === project.slug)
    : -1;
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const prevProject = PROJECTS[(safeIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(safeIndex + 1) % PROJECTS.length];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-project-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#080808]/85 backdrop-blur-sm overflow-y-auto px-4 py-8 sm:px-6 lg:py-12"
          onClick={onClose}
        >
          <motion.div
            key={project.slug}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[960px] mx-auto border border-[#D4D4D0] dark:border-[#2E2E2E] bg-[#F6F6F4] dark:bg-[#0D0D0D] text-[#0A0A0A] dark:text-[#F5F5F3]"
          >
            {/* Modal Top Bar */}
            <div className="px-6 py-4 border-b border-[#D4D4D0] dark:border-[#242424] flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#525252] dark:text-[#A1A1AA] tabular-nums">
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.client}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail proyek"
                className="inline-flex items-center justify-center w-10 h-10 border border-[#D4D4D0] dark:border-[#262626] text-[#0A0A0A] dark:text-[#F5F5F3] hover:bg-[#0A0A0A] hover:text-[#F6F6F4] dark:hover:bg-[#F5F5F3] dark:hover:text-[#080808] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="space-y-3">
                <h2
                  id="lightbox-project-title"
                  className="font-pixel-display text-3xl sm:text-4xl font-bold text-[#0A0A0A] dark:text-[#FFFFFF]"
                >
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-[#404040] dark:text-[#D4D4D4] leading-relaxed max-w-3xl">
                  {project.summary}
                </p>
              </div>

              <div className="aspect-[16/9] w-full border border-[#D4D4D0] dark:border-[#262626] overflow-hidden">
                <ResilientImage
                  src={project.image}
                  alt={project.imageAlt}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#D4D4D0] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#121212] divide-y sm:divide-y-0 sm:divide-x divide-[#D4D4D0] dark:divide-[#262626]">
                {project.outcomes.map((outcome) => (
                  <div key={outcome.label} className="p-4 sm:p-5">
                    <p className="font-pixel-display text-2xl font-bold text-[#0A0A0A] dark:text-[#FFFFFF] tabular-nums">
                      {outcome.value}
                    </p>
                    <p className="mt-1 text-xs text-[#525252] dark:text-[#A1A1AA]">
                      {outcome.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h3 className="font-pixel-display text-lg font-bold text-[#0A0A0A] dark:text-[#FFFFFF]">
                    01. Tantangan
                  </h3>
                  <p className="text-sm text-[#404040] dark:text-[#D4D4D4] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-pixel-display text-lg font-bold text-[#0A0A0A] dark:text-[#FFFFFF]">
                    02. Solusi Arsitektur
                  </h3>
                  <p className="text-sm text-[#404040] dark:text-[#D4D4D4] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E2] dark:border-[#242424] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs font-mono text-[#525252] dark:text-[#A1A1AA]">
                  {project.stack.join(' · ')}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(prevProject)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono border border-[#D4D4D0] dark:border-[#262626] hover:border-[#0A0A0A] dark:hover:border-[#F5F5F3] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Sebelumnya</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectProject(nextProject)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono border border-[#D4D4D0] dark:border-[#262626] hover:border-[#0A0A0A] dark:hover:border-[#F5F5F3] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Berikutnya</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
