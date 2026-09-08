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
                className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
              >
                About
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl sm:text-4xl font-bold text-ink leading-tight"
              >
                I build products that work in the real world, not just on a mockup.
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-6 space-y-4 text-ink-muted leading-relaxed">
                <p>
                  I’m Emmanuel Amarikwa, a software engineer who turns business problems into working digital products.
                </p>
                <p>
                  I build AI assistants, SaaS products, booking systems, and business websites from the first user flow to production.
                </p>
                <p className="font-medium text-ink">
                  The measure is simple: clearer experiences, better operations, and software people can depend on.
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

            {/* Right: concise capability summary */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
              className="space-y-4"
            >
              {[
                ['Product thinking', 'Clear flows and focused scope.'],
                ['Full-stack delivery', 'React, FastAPI, data, and deployment.'],
                ['Applied AI', 'Automation that removes real manual work.'],
              ].map(([title, description], i) => (
                <motion.div key={title} variants={fadeUp} className="flex items-center gap-4 border-b border-[#eadcc9] pb-4">
                  <span className="text-xs font-mono text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                    <p className="text-xs text-ink-muted mt-1">{description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
