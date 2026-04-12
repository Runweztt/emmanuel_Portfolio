import { motion } from 'framer-motion'
import { education } from '../../data/index.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Education() {
  return (
    <section id="education" className="py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-10"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent">
            Education
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-ink">
            Academic background.
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-white-6 hover:border-accent-20 transition-colors duration-300"
            >
              {/* Icon / badge area */}
              <div className="w-10 h-10 rounded-lg bg-accent-10 border border-accent-20 flex items-center justify-center mb-5">
                <span className="text-accent text-lg font-bold">ALU</span>
              </div>

              <h3 className="text-base font-bold text-ink">{edu.institution}</h3>
              <p className="text-sm font-semibold text-accent mt-1">{edu.degree}</p>
              <p className="text-xs text-ink-faint mt-0.5">{edu.location} · {edu.period}</p>

              <ul className="mt-4 space-y-1.5">
                {edu.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-2 text-xs text-ink-muted leading-relaxed">
                    <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
