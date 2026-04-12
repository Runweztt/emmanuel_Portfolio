import { motion } from 'framer-motion'
import { skillGroups } from '../../data/index.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const categoryIcons = {
  'Languages': '{ }',
  'Frontend': '⬡',
  'Backend': '◈',
  'Data & Databases': '◉',
  'DevOps & Infra': '⬢',
  'AI & Automation': '⬡',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-canvas">
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
            Technical Skills
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-ink">
            The stack behind the work.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-ink-muted max-w-xl leading-relaxed">
            These are what I have shipped production systems with.
          </motion.p>
        </motion.div>

        {/* Skill groups grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-white-6 hover:border-accent-20 transition-colors duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent font-mono text-sm">{categoryIcons[group.category] || '◈'}</span>
                <h3 className="text-sm font-semibold text-ink">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + si * 0.03, duration: 0.3 }}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-surface text-ink-muted border border-white-6 hover:border-accent-20 hover:text-ink transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
