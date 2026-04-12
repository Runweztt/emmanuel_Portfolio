import { motion } from 'framer-motion'

function Block({ w = 'w-full', h = 'h-4', className = '' }) {
  return (
    <div className={`skeleton-pulse ${w} ${h} rounded-md ${className}`} />
  )
}

export default function PageSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-0 z-50 bg-canvas overflow-hidden"
      aria-hidden="true"
    >
      {/* Navbar bar */}
      <div className="h-[68px] border-b border-white-6 flex items-center px-6 justify-between">
        <Block w="w-28" h="h-5" />
        <div className="hidden md:flex items-center gap-6">
          {[80, 64, 72, 56, 64].map((w, i) => (
            <Block key={i} w={`w-[${w}px]`} h="h-3" style={{ width: w }} />
          ))}
        </div>
        <Block w="w-20" h="h-8" className="rounded-lg" />
      </div>

      {/* Hero skeleton */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-center">

        {/* Left: text column */}
        <div className="max-w-2xl space-y-5">
          {/* Availability badge */}
          <Block w="w-48" h="h-4" className="rounded-full" />

          {/* Name */}
          <div className="space-y-2 pt-1">
            <Block w="w-64" h="h-14" className="rounded-lg" />
            <Block w="w-52" h="h-14" className="rounded-lg" />
          </div>

          {/* Role pills */}
          <div className="flex gap-3 pt-1">
            <Block w="w-36" h="h-5" className="rounded-full" />
            <Block w="w-28" h="h-5" className="rounded-full" />
            <Block w="w-20" h="h-5" className="rounded-full" />
          </div>

          {/* Description lines */}
          <div className="space-y-2 pt-1">
            <Block w="w-full" h="h-4" />
            <Block w="w-5/6" h="h-4" />
            <Block w="w-4/6" h="h-4" />
          </div>

          {/* Location */}
          <Block w="w-72" h="h-3" />

          {/* CTA buttons */}
          <div className="flex gap-3 pt-2">
            <Block w="w-32" h="h-11" className="rounded-xl" />
            <Block w="w-28" h="h-11" className="rounded-xl" />
            <Block w="w-28" h="h-11" className="rounded-xl" />
          </div>

          {/* Stack pills */}
          <div className="flex gap-2 flex-wrap pt-2">
            {[56, 48, 52, 44, 48, 52, 44].map((w, i) => (
              <div
                key={i}
                className="skeleton-pulse h-6 rounded-full"
                style={{ width: w }}
              />
            ))}
          </div>
        </div>

        {/* Right: terminal card */}
        <div className="hidden lg:block">
          <div className="w-[340px] rounded-xl overflow-hidden border border-white-6">
            {/* Browser bar */}
            <div className="h-10 border-b border-white-6 skeleton-pulse" />
            {/* Card rows */}
            <div className="p-4 space-y-3 bg-card">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-white-6">
                  <Block w="w-6" h="h-6" className="rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <Block w="w-24" h="h-3" />
                    <Block w="w-16" h="h-2.5" />
                  </div>
                  <Block w="w-10" h="h-4" className="rounded-full" />
                </div>
              ))}
              {/* Stack bar */}
              <div className="pt-2 space-y-2">
                <Block w="w-10" h="h-3" />
                <div className="flex gap-1.5 flex-wrap">
                  {[40, 52, 44, 28, 52, 40].map((w, i) => (
                    <div key={i} className="skeleton-pulse h-5 rounded-full" style={{ width: w }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stat chips */}
          <div className="flex gap-3 mt-3 justify-end">
            <Block w="w-28" h="h-12" className="rounded-lg" />
            <Block w="w-36" h="h-12" className="rounded-lg" />
          </div>
        </div>

      </div>
    </motion.div>
  )
}
