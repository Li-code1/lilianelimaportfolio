interface LogoProps {
  variant?: 'full' | 'mark'
  className?: string
}

/**
 * The mark reads "LL" built from two code-bracket strokes (</> turned into
 * initials), a literal nod to Liliane's discipline. Teal-to-amber gradient
 * carries the site's two-accent language: systems logic meeting the human
 * side of the work.
 */
export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        role="img"
        aria-label="Símbolo Liliane Lima"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#35D6C4" />
            <stop offset="1" stopColor="#C1577A" />
          </linearGradient>
        </defs>
        <rect x="0.75" y="0.75" width="32.5" height="32.5" rx="8" stroke="url(#logo-grad)" strokeWidth="1.5" />
        {/* Left bracket forms the first L */}
        <path d="M11 9v11a2 2 0 0 0 2 2h4" stroke="#EAF1F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Right bracket forms the second L, mirrored */}
        <path d="M23 25V14a2 2 0 0 0-2-2h-4" stroke="url(#logo-grad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {variant === 'full' && (
        <span className="font-mono text-[15px] leading-none text-ink tracking-tight">
          liliane<span className="text-teal">.</span>lima
        </span>
      )}
    </span>
  )
}
