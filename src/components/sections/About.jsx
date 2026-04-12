import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// Scrolling tech belt between hero and about
const techItems = [
  'Python', 'React', 'FastAPI', 'Docker', 'CrewAI', 'LangChain', 'Supabase',
  'Redis', 'Celery', 'Stripe API', 'Claude API', 'OpenAI', 'PaddleOCR', 'Azure AI',
  'Twilio', 'NGINX', 'GitHub Actions', 'Tailwind CSS', 'PostgreSQL', 'Whisper',
]
const doubled = [...techItems, ...techItems]

function TechMarquee() {
  return (
    <div
      className="overflow-hidden py-4 border-y border-white-6"
      style={{ background: 'rgba(12,12,30,0.5)' }}
    >
      <div
        className="flex gap-10 animate-marquee whitespace-nowrap"
        aria-hidden="true"
      >
        {doubled.map((tech, i) => (
          <span key={i} className="text-xs font-mono text-ink-faint uppercase tracking-widest flex-shrink-0 flex items-center gap-10">
            {tech}
            <span className="text-accent opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

const capabilities = [
  {
    title: 'Full-Stack Engineering',
    description:
      'React + FastAPI + Docker, shipped with Stripe billing, async job queues, CI/CD pipelines, OAuth, and Redis caching. I own the full stack.',
  },
  {
    title: 'AI Systems & Agents',
    description:
      'Multi-agent CrewAI pipelines, document processing with dual OCR, and WhatsApp-native AI assistants. Running in production, not just in demos.',
  },
  {
    title: 'Data Analysis',
    description:
      'SQL, dashboards, pipeline design, BI reporting. The data background means I build software that understands what the numbers actually need to do.',
  },
  {
    title: 'Systems Thinking',
    description:
      'Both LoopedAI and JargsAI required serious architecture: queueing, caching, failover, rate limiting, security middleware. I think in systems.',
  },
]

export default function About() {
  return (
    <>
      {/* Tech marquee strip */}
      <TechMarquee />

      <section id="about" className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Bio */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.span
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-widest text-accent"
              >
                About
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl sm:text-4xl font-bold text-ink leading-tight"
              >
                Software engineer. AI developer. Builder.
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-6 space-y-4 text-ink-muted leading-relaxed">
                <p>
                  Emmanuel Amarikwa studies Software Engineering at African Leadership University
                  in Kigali. He builds full-stack systems and AI-powered products,
                  with a strong foundation in how data moves through systems and what it needs to do.
                </p>
                <p>
                  He built LoopedAI, a production SaaS with a document review pipeline,
                  multi-agent AI crew, Celery task queues, and Stripe subscriptions. He also
                  built JargsAI, a WhatsApp-native AI secretary running CrewAI multi-agent flows
                  across your calendar, tasks, research, and content.
                </p>
                <p className="font-medium text-ink">
                  Both are running in production. That's the level.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-dim transition-colors"
                >
                  Get in touch
                </a>
                <a
                  href="https://github.com/Runweztt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-accent-20 text-ink-muted text-sm font-medium hover:text-ink hover:border-accent-30 transition-all"
                >
                  GitHub →
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Capabilities grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="card-glow p-5 rounded-xl bg-card border border-white-6"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mb-3" />
                  <h3 className="text-sm font-semibold text-ink mb-2">{cap.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
