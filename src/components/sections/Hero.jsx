import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// Visual card showing what I build
function TerminalCard() {
  const items = [
    { label: 'AI SaaS', tag: 'LoopedAI', color: '#6366f1', icon: '⬡' },
    { label: 'WhatsApp automation', tag: 'JargsAI', color: '#22c55e', icon: '◉' },
    { label: 'Hospitality brand', tag: 'Canwee', color: '#0ea5e9', icon: '◈' },
    { label: 'Architecture brand', tag: 'SunArch', color: '#b7772f', icon: '◌' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="animate-float w-full max-w-[420px] select-none"
    >
      <div className="rounded-[28px] overflow-hidden border border-[#dccbbb] bg-[#fffdfb] shadow-[0_25px_80px_rgba(58,41,32,0.13)]">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#f7efe8] border-b border-[#e7d7c9]">
          <div className="w-3 h-3 rounded-full bg-[#d76d5a]" />
          <div className="w-3 h-3 rounded-full bg-[#d9b265]" />
          <div className="w-3 h-3 rounded-full bg-[#5b9e75]" />
          <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-ink-faint font-mono">featured work</span>
        </div>

        <div className="p-5 space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
              className="flex items-center gap-3 p-3 rounded-2xl border border-[#efe1d5] bg-[#fffaf5] hover:border-accent-20 transition-colors"
            >
              <span className="text-base" style={{ color: item.color }}>{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-ink truncate">{item.tag}</div>
                <div className="text-xs text-ink-faint">{item.label}</div>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-success flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Live
              </span>
            </motion.div>
          ))}
        </div>

        <div className="px-5 pb-5">
          <div className="text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-2">Core stack</div>
          <div className="flex flex-wrap gap-1.5">
            {['React', 'Python', 'FastAPI', 'AI', 'Supabase', 'Docker'].map(t => (
              <span key={t} className="px-2 py-0.5 text-[10px] rounded-full bg-[#f4e9df] text-ink-muted border border-[#eadcc9]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-4 justify-end">
        {[
          { value: '8+', label: 'Products built' },
          { value: '5+', label: 'Live domains' },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + i * 0.1 }}
            className="px-4 py-2 rounded-2xl bg-[#fffaf5] border border-[#eadcc9] text-center shadow-[0_12px_20px_rgba(58,41,32,0.04)]"
          >
            <div className="text-sm font-black text-ink">{s.value}</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-ink-faint">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-canvas hero-grid"
      aria-label="Introduction"
      style={{ backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02)), radial-gradient(circle at top left, rgba(122,79,56,0.08), transparent 30%)' }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-64 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(122,79,56,0.14) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(122,79,56,0.09) 0%, transparent 65%)' }}
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
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-[72px] font-black tracking-[-0.06em] leading-[0.95]"
            >
              <span className="text-ink">I build</span>
              <br />
              <span className="text-gradient">systems</span>
              <br />
              <span className="text-ink text-4xl sm:text-5xl lg:text-[56px]">that make businesses work better.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-2">
              {['AI assistants', 'SaaS products', 'Booking systems', 'Business software'].map((role, i) => (
                <span key={i} className="flex items-center gap-2 text-base font-semibold text-ink-muted">
                  {i > 0 && <span className="text-ink-faint text-xs">·</span>}
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg leading-relaxed text-ink-muted max-w-xl"
            >
              I build AI assistants, booking systems, and business software. My products help companies answer customers, manage bookings, and run daily work.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-2 text-sm text-ink-faint">
              Based in Kigali, Rwanda. I build for hospitality, SaaS, automation, and growing brands.
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
