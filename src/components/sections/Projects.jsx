import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../data/index.js'
import ProjectModal from '../ui/ProjectModal.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// Browser chrome frame for dashboard screenshots
function BrowserFrame({ src, alt, url }) {
  return (
    <div className="rounded-xl overflow-hidden border border-accent-20 shadow-accent">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border-b border-accent-10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-card rounded-md px-3 py-0.5 text-xs text-ink-faint font-mono ml-2 truncate">
          {url || 'app.loopedai.io/review'}
        </div>
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full block" />
    </div>
  )
}

// Interactive phone screenshot gallery
function PhoneGallery({ images }) {
  const [activeIdx, setActiveIdx] = useState(1)
  const visible = images.slice(0, 5)

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main phone */}
      <div className="relative">
        {/* Background phones for depth */}
        <div
          className="absolute -left-8 top-4 w-40 rounded-2xl overflow-hidden border border-accent-10 opacity-40"
          style={{ transform: 'rotate(-6deg)', zIndex: 0 }}
        >
          <img src={visible[0]} alt="" className="w-full" />
        </div>
        <div
          className="absolute -right-8 top-4 w-40 rounded-2xl overflow-hidden border border-accent-10 opacity-40"
          style={{ transform: 'rotate(6deg)', zIndex: 0 }}
        >
          <img src={visible[2]} alt="" className="w-full" />
        </div>

        {/* Active phone */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-52 rounded-3xl overflow-hidden border-2 border-accent-30 shadow-accent"
            style={{ zIndex: 1 }}
          >
            <img
              src={visible[activeIdx]}
              alt={`JargsAI screenshot ${activeIdx + 1}`}
              loading="lazy"
              className="w-full block"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2">
        {visible.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`View screenshot ${i + 1}`}
            className={`transition-all duration-200 rounded-full ${
              activeIdx === i
                ? 'w-6 h-2 bg-accent'
                : 'w-2 h-2 bg-ink-faint hover:bg-ink-muted'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Stats strip shown on flagship cards
function StatsStrip({ stats }) {
  if (!stats?.length) return null
  return (
    <div className="flex flex-wrap gap-5 pt-5 mt-5 border-t border-white-6">
      {stats.map((stat, i) => (
        <div key={i}>
          <div className="text-xl font-black text-ink tracking-tight">{stat.value}</div>
          <div className="text-xs text-ink-faint mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

// Full-width flagship card
function FlagshipCard({ project, onOpen, index }) {
  // Alternate layout direction per card
  const flip = index % 2 === 1

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="card-glow group relative rounded-2xl bg-card border border-white-6 overflow-hidden"
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}50, transparent)` }}
      />

      <div className={`grid lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>

        {/* ── Content side ─────────────────────────── */}
        <div className="p-8 lg:p-10 flex flex-col">
          <div>
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-accent-10 text-accent border border-accent-20">
                {project.type}
              </span>
              {project.status === 'Live' && (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-success">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-success opacity-60" />
                    <span className="relative h-2 w-2 rounded-full bg-success" />
                  </span>
                  Live in production
                </span>
              )}
              {project.status === 'Production' && (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Production system
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-black text-ink tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-sm font-semibold mt-1.5" style={{ color: project.color }}>
              {project.tagline}
            </p>

            {/* Summary */}
            <p className="mt-4 text-sm text-ink-muted leading-relaxed">{project.summary}</p>

            {/* Feature list */}
            <ul className="mt-5 space-y-2">
              {project.features.slice(0, 4).map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-ink-muted leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: project.color }}>▸</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Stack badges */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map(s => (
                <span
                  key={s}
                  className="px-2.5 py-0.5 text-xs rounded-full bg-surface text-ink-faint border border-white-6 hover:border-accent-15 hover:text-ink-muted transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Stats */}
            <StatsStrip stats={project.stats} />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onOpen(project)}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-accent-sm"
              style={{ background: project.color }}
            >
              Full Case Study
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-accent-20 text-accent text-sm font-medium hover:bg-accent-10 transition-all"
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>

        {/* ── Visual side ──────────────────────────── */}
        <div
          className={`relative p-6 lg:p-8 flex items-center justify-center min-h-64 border-t lg:border-t-0 ${flip ? 'lg:border-r' : 'lg:border-l'} border-white-6`}
          style={{ background: `radial-gradient(ellipse at center, ${project.color}08 0%, transparent 70%)` }}
        >
          {/* Visual label */}
          <div className="absolute top-4 left-4 text-xs font-mono text-ink-faint uppercase tracking-widest opacity-60">
            {project.imageType === 'phone'
              ? 'WhatsApp screenshots'
              : project.id === 'loopva'
              ? 'Platform preview'
              : 'Document review dashboard'}
          </div>

          {project.imageType === 'browser' && project.images[0] && (
            <BrowserFrame
              src={project.images[0]}
              alt={`${project.title} screenshot`}
              url={project.liveUrl ? project.liveUrl.replace('https://www.', '') : project.id + '.io'}
            />
          )}
          {project.imageType === 'phone' && project.images.length > 0 && (
            <PhoneGallery images={project.images} />
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Smaller project card for non-featured projects
function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="card-glow group p-6 rounded-xl bg-card border border-white-6 flex flex-col cursor-pointer"
      onClick={() => onOpen(project)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs font-medium" style={{ color: project.color }}>{project.type}</span>
          <h3 className="text-lg font-bold text-ink mt-1 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-ink-faint mt-0.5">{project.tagline}</p>
        </div>
        {project.status === 'Live' && (
          <span className="flex items-center gap-1 text-xs text-success flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            Live
          </span>
        )}
      </div>

      <p className="text-sm text-ink-muted leading-relaxed flex-1">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map(s => (
          <span key={s} className="px-2 py-0.5 text-xs rounded-full bg-surface text-ink-faint border border-white-6">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 items-center">
        <span className="text-xs font-medium text-accent group-hover:underline">
          Details →
        </span>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="text-xs font-medium text-ink-faint hover:text-ink transition-colors"
          >
            Live Site ↗
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent">
            Selected Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-ink">
            Shipped systems, not side projects.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-ink-muted max-w-xl leading-relaxed">
            LoopedAI and JargsAI are the flagships. Both are running in production, with real
            architecture decisions, real users, and real complexity behind them.
          </motion.p>
        </motion.div>

        {/* Flagship cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
          className="space-y-8"
        >
          {featured.map((project, i) => (
            <FlagshipCard key={project.id} project={project} onOpen={setSelectedProject} index={i} />
          ))}
        </motion.div>

        {/* Other projects */}
        {others.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {others.map(project => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </motion.div>
        )}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
