import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────
// Get your free access key at https://web3forms.com
// Enter runweztcheta@gmail.com → they email you the key → paste it here
const WEB3FORMS_KEY = 'bf65d878-17b5-4b1f-8eef-931f28e524f5'
// ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Runweztt',
    description: 'github.com/Runweztt',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/emmanuel-amarikwa',
    description: 'linkedin.com/in/emmanuel-amarikwa',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:runweztcheta@gmail.com',
    description: 'runweztcheta@gmail.com',
    external: false,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: '',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const sending = status === 'sending'
  const sent = status === 'sent'
  const error = status === 'error'

  return (
    <section id="contact" className="py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left ───────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-accent">
              Contact
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-ink">
              Let's build something.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-ink-muted leading-relaxed max-w-md">
              Whether you're building something ambitious and need an engineer who can own it
              end-to-end, or you're exploring what's possible with AI and automation. I'm interested.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-3 text-ink-muted leading-relaxed max-w-md">
              Fill in the form and it lands straight in my inbox. Or reach out directly below.
            </motion.p>

            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
              className="mt-8 space-y-3"
            >
              {socialLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white-6 hover:border-accent-20 hover:bg-accent-5 transition-all duration-200 group"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted w-16 flex-shrink-0">
                    {link.label}
                  </span>
                  <span className="text-sm text-ink-faint group-hover:text-ink transition-colors truncate">
                    {link.description}
                  </span>
                  <span className="ml-auto text-ink-faint group-hover:text-accent transition-colors flex-shrink-0">
                    ↗
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Form ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="p-7 rounded-2xl bg-card border border-accent-20 flex flex-col items-center justify-center text-center gap-4 min-h-64"
                >
                  <div className="w-12 h-12 rounded-full bg-success/15 border border-success/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink">Message sent.</h3>
                    <p className="text-sm text-ink-muted mt-1">
                      It's in my inbox. I'll get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* ── Form state ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="p-7 rounded-2xl bg-card border border-white-6 space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-ink-muted mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      disabled={sending}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-white-6 text-ink text-sm placeholder-ink-faint focus:outline-none focus:border-accent-30 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-ink-muted mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      disabled={sending}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-white-6 text-ink text-sm placeholder-ink-faint focus:outline-none focus:border-accent-30 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-ink-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are you working on?"
                      disabled={sending}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-white-6 text-ink text-sm placeholder-ink-faint focus:outline-none focus:border-accent-30 transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="text-xs text-red-400 text-center">
                      Something went wrong. Email me directly at{' '}
                      <a href="mailto:runweztcheta@gmail.com" className="underline">
                        runweztcheta@gmail.com
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dim disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-accent-sm flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
