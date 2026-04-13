import { motion } from 'framer-motion'
import { experiences } from '../../data/index.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const typeBadgeColors = {
  Engineering: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Data: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Operations: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-14"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent">
            Experience
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-ink">
            Where the work happened.
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-0 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent"
          />

          <div className="space-y-10 pl-6 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  className="absolute -left-9 md:-left-[52px] top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-canvas shadow-accent-sm"
                />

                <div className="p-6 rounded-xl bg-card border border-white-6 hover:border-accent-20 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-ink">{exp.company}</h3>
                      <p className="text-sm font-medium text-accent mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-sm text-ink-faint">{exp.period}</span>
                      {exp.location && (
                        <span className="text-xs text-ink-faint font-mono">{exp.location}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-sm text-ink-muted leading-relaxed">
                        <span className="text-accent mt-0.5 flex-shrink-0 text-xs">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
