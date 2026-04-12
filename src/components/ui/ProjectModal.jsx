import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-accent-20 shadow-accent pointer-events-auto scrollbar-none"
        >
          {/* Accent top line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color || '#6366f1'}, transparent)` }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg text-ink-faint hover:text-ink hover:bg-white/8 transition-colors text-sm"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-10 text-accent border border-accent-20">
                  {project.type}
                </span>
                {project.status === 'Live' && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    Live in production
                  </span>
                )}
                {project.status === 'Production' && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Production system
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-black text-ink tracking-tight">{project.title}</h2>
              <p className="text-sm font-semibold mt-1" style={{ color: project.color || '#6366f1' }}>
                {project.tagline}
              </p>
            </div>

            {/* Screenshot */}
            {project.imageType === 'browser' && project.images[0] && (
              <div className="mb-6 rounded-xl overflow-hidden border border-accent-20">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border-b border-accent-10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-ink-faint font-mono ml-1">Document Review Dashboard</span>
                </div>
                <img src={project.images[0]} alt={project.title} className="w-full" />
              </div>
            )}

            {project.imageType === 'phone' && project.images.length > 0 && (
              <div className="mb-6 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {project.images.slice(0, 5).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="w-28 flex-shrink-0 rounded-xl border border-accent-20"
                  />
                ))}
              </div>
            )}

            {/* Stats (if any) */}
            {project.stats?.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-6 p-4 rounded-xl bg-surface border border-white-6">
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl font-black text-ink" style={{ color: project.color }}>{stat.value}</div>
                    <div className="text-xs text-ink-faint">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Problem / Solution */}
            <div className="space-y-5 mb-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-2">
                  The Problem
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-2">
                  What I Built
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* All features */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-3">
                Key Features & Architecture
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-muted leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: project.color || '#6366f1' }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-surface text-ink-muted border border-white-6"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white hover:brightness-110 transition-all"
                style={{ background: project.color || '#6366f1' }}
              >
                Visit Live Site ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  )
}
