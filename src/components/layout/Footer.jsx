export default function Footer() {
  return (
    <footer className="border-t border-white-6 bg-canvas py-10 mt-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-ink">EA</span>
          <span className="text-accent font-bold">.</span>
          <span className="text-ink-faint text-sm ml-2">Emmanuel Chetachi Amarikwa</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-ink-faint">
          <a
            href="https://github.com/Runweztt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:runweztcheta@gmail.com"
            className="hover:text-ink transition-colors"
          >
            Email
          </a>
          <span>Kigali, Rwanda</span>
        </div>

        <p className="text-ink-faint text-sm">
          © {new Date().getFullYear()} Emmanuel Amarikwa
        </p>
      </div>
    </footer>
  )
}
