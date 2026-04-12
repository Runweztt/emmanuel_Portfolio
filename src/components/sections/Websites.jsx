import { motion } from 'framer-motion'
import { websites } from '../../data/index.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function getDomain(url) {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}

function SiteInitials({ name }) {
  const initials = name.split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2)
  return (
    <div className="w-9 h-9 rounded-lg bg-accent-10 border border-accent-20 flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-bold text-accent">{initials}</span>
    </div>
  )
}

// Card with a real screenshot — shows mini browser frame
function SiteCardWithImage({ site }) {
  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-glow group rounded-xl bg-card border border-white-6 overflow-hidden flex flex-col"
    >
      {/* Mini browser frame */}
      <div className="border-b border-white-6">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-surface">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 ml-2 bg-card rounded px-2 py-0.5">
            <span className="text-xs text-ink-faint font-mono">{getDomain(site.url)}</span>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: '180px' }}>
          <img
            src={site.image}
            alt={`${site.name} website`}
            loading="lazy"
            className="w-full block object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
            {site.name}
          </h3>
          <span className="text-xs text-ink-faint">{site.label}</span>
          <p className="text-xs text-ink-muted mt-1.5 leading-relaxed">{site.description}</p>
        </div>
        <span className="text-ink-faint group-hover:text-accent transition-colors text-sm flex-shrink-0 mt-0.5">
          ↗
        </span>
      </div>
    </motion.a>
  )
}

// Card without screenshot — clean minimal card
function SiteCardNoImage({ site }) {
  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-glow group p-5 rounded-xl bg-card border border-white-6 flex flex-col gap-4"
    >
      <div className="flex items-start gap-3">
        <SiteInitials name={site.name} />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
            {site.name}
          </h3>
          <span className="text-xs text-ink-faint">{site.label}</span>
        </div>
        <span className="text-ink-faint group-hover:text-accent transition-colors text-sm flex-shrink-0">
          ↗
        </span>
      </div>

      <p className="text-xs text-ink-muted leading-relaxed">{site.description}</p>

      <div className="text-xs font-mono text-ink-faint border-t border-white-6 pt-3">
        {getDomain(site.url)}
      </div>
    </motion.a>
  )
}

export default function Websites() {
  const withImages = websites.filter(s => s.image)
  const withoutImages = websites.filter(s => !s.image)

  return (
    <section id="websites" className="py-24 bg-surface">
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
            Shipped Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-ink">
            Products & websites I've built.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-ink-muted max-w-xl leading-relaxed">
            Live sites. Real domains. These are things people actually use.
          </motion.p>
        </motion.div>

        {/* Screenshot cards row */}
        {withImages.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid sm:grid-cols-2 gap-5 mb-5"
          >
            {withImages.map(site => (
              <SiteCardWithImage key={site.id} site={site} />
            ))}
          </motion.div>
        )}

        {/* No-image cards row */}
        {withoutImages.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {withoutImages.map(site => (
              <SiteCardNoImage key={site.id} site={site} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
