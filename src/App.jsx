import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageSkeleton from './components/layout/PageSkeleton'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Websites from './components/sections/Websites'
import Contact from './components/sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const MIN_DISPLAY = 2000 // ms — always show skeleton for at least this long
    const start = Date.now()

    const dismiss = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, MIN_DISPLAY - elapsed)
      setTimeout(() => setLoading(false), remaining)
    }

    if (document.readyState === 'complete') {
      dismiss()
    } else {
      window.addEventListener('load', dismiss, { once: true })
      // Hard cap: never block longer than 4s
      const fallback = setTimeout(() => setLoading(false), 4000)
      return () => {
        window.removeEventListener('load', dismiss)
        clearTimeout(fallback)
      }
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <PageSkeleton key="skeleton" />}
      </AnimatePresence>

      <div className="min-h-screen bg-canvas text-ink font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Websites />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
