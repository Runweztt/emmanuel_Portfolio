import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// Visual card — shows what I build, not how LoopedAI works internally
function TerminalCard() {
  const items = [
    { label: 'Full-Stack SaaS', tag: 'LoopedAI', color: '#6366f1', icon: '⬡' },
    { label: 'Agentic AI System', tag: 'JargsAI', color: '#22c55e', icon: '◉' },
    { label: 'Web Platform', tag: 'LoopVA', color: '#f59e0b', icon: '◈' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="animate-float w-full max-w-[380px] select-none"
    >
      {/* Shipped products card */}
      <div className="rounded-xl overflow-hidden border border-accent-20 shadow-accent bg-card">
        <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-accent-10">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-ink-faint font-mono">projects.json</span>
        </div>

        <div className="p-5 space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
              className="flex items-center gap-3 p-3 rounded-lg border border-white-6 bg-surface hover:border-accent-20 transition-colors"
            >
              <span className="text-base" style={{ color: item.color }}>{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-ink truncate">{item.tag}</div>
                <div className="text-xs text-ink-faint">{item.label}</div>
              </div>
              <span className="text-xs font-medium text-success flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Live
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stack bar */}
        <div className="px-5 pb-5">
          <div className="text-xs text-ink-faint mb-2">Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {['React', 'FastAPI', 'Docker', 'AI', 'Supabase', 'Redis'].map(t => (
              <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-accent-8 text-ink-muted border border-accent-15">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat chips below the card */}
      <div className="flex gap-3 mt-3 justify-end">
        {[
          { value: '5+', label: 'Products shipped' },
          { value: '3', label: 'Running in production' },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + i * 0.1 }}
            className="px-4 py-2 rounded-lg bg-card border border-white-6 text-center"
          >
            <div className="text-sm font-black text-ink">{s.value}</div>
            <div className="text-xs text-ink-faint">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-canvas hero-grid"
      aria-label="Introduction"
    >
      {/* Ambient glow — left */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-64 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 65%)' }}
      />
      {/* Ambient glow — right */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-center">

          {/* ── Left: text ────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Availability */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-success opacity-70" />
                <span className="relative h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tight leading-[1.0]"
            >
              <span className="text-ink">Emmanuel</span>
              <br />
              <span className="text-gradient">Amarikwa</span>
            </motion.h1>

            {/* Role line */}
            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-2">
              {['Software Engineer', 'AI Developer', 'Builder'].map((role, i) => (
                <span key={i} className="flex items-center gap-2 text-base font-semibold text-ink-muted">
                  {i > 0 && <span className="text-ink-faint text-xs">·</span>}
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Description — specific, not fluffy */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg leading-relaxed text-ink-muted max-w-lg"
            >
              I build full-stack systems, AI-powered tools, and data-driven applications.
              My work runs from the database schema to production deployment: React, FastAPI,
              Python, Docker, Supabase, multi-agent AI pipelines.
            </motion.p>

            {/* Location */}
            <motion.p variants={fadeUp} className="mt-2 text-sm text-ink-faint">
              Based in Kigali, Rwanda · Software Engineering at African Leadership University
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dim transition-colors duration-200 shadow-accent-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-3 rounded-xl border border-accent-30 text-accent font-semibold text-sm hover:bg-accent-10 transition-all duration-200"
              >
                Contact Me
              </a>
              <a
                href="/emmanuel-amarikwa-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white-10 text-ink-muted font-semibold text-sm hover:text-ink hover:border-accent-20 transition-all duration-200"
              >
                Download CV
              </a>
            </motion.div>

            {/* Stack pills */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
              {['Python', 'React', 'FastAPI', 'CrewAI', 'Docker', 'Supabase', 'Redis'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-accent-8 text-ink-muted border border-accent-15"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: floating terminal ───────────── */}
          <div className="hidden lg:flex items-center justify-center">
            <TerminalCard />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-ink-faint to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
