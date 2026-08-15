import { useReveal } from '../hooks/useReveal'
import { SKILL_GROUPS } from '../data'

function SkillCard({ endpoint, label, items, delay }: (typeof SKILL_GROUPS)[number] & { delay: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal rounded-xl border border-line bg-bg-alt/60 p-6 transition-colors hover:border-teal/60"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-mono text-xs text-amber">{endpoint}</p>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink">{label}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Stack() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="stack" className="border-t border-line bg-bg-alt/30 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={headerRef} className="reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">stack técnica</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Cada endpoint, uma competência comprovada em projeto real.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.label} {...group} delay={(i % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
