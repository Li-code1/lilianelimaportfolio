import { useReveal } from '../hooks/useReveal'
import { TIMELINE, COMPLEMENTARY_COURSES, type TimelineItem } from '../data'

function TimelineRow({ item, delay }: { item: TimelineItem; delay: number }) {
  const ref = useReveal<HTMLLIElement>()
  const isFormacao = item.kind === 'formacao'
  return (
    <li ref={ref} className="reveal relative pl-9" style={{ transitionDelay: `${delay}ms` }}>
      <span
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
          isFormacao ? 'border-teal bg-bg' : 'border-amber bg-bg'
        }`}
        aria-hidden="true"
      />
      <p className="font-mono text-xs text-muted">{item.period}</p>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink">{item.title}</h3>
      <p className={`mt-0.5 font-body text-sm ${isFormacao ? 'text-teal' : 'text-amber'}`}>{item.place}</p>
      {item.detail && <p className="mt-2 max-w-2xl font-body text-[15px] leading-relaxed text-muted">{item.detail}</p>}
    </li>
  )
}

export default function Timeline() {
  const headerRef = useReveal<HTMLDivElement>()
  const coursesRef = useReveal<HTMLDivElement>()

  // Chronological order — oldest first — so the pivot from banking to tech reads as a real arc.
  // Periods look like "MM/YYYY — MM/YYYY"; sort by the start date's year then month.
  const sortKey = (period: string) => {
    const [month, year] = period.split('—')[0].trim().split('/')
    return Number(year) * 100 + Number(month)
  }
  const ordered = [...TIMELINE].sort((a, b) => sortKey(a.period) - sortKey(b.period))

  return (
    <section id="trajetoria" className="border-t border-line bg-bg-alt/30 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={headerRef} className="reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">trajetória</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Linha do tempo
          </h2>
        </div>

        <ol className="mt-12 space-y-10 border-l border-line pl-2">
          {ordered.map((item, i) => (
            <TimelineRow key={item.title} item={item} delay={(i % 3) * 90} />
          ))}
        </ol>

        <div ref={coursesRef} className="reveal mt-16 rounded-xl border border-line bg-bg/60 p-6">
          <h3 className="font-display text-lg font-semibold text-ink">Formação complementar</h3>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {COMPLEMENTARY_COURSES.map((course) => (
              <li key={course} className="flex gap-2.5 font-body text-sm text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
