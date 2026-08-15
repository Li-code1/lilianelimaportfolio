import { useReveal } from '../hooks/useReveal'
import { TESTIMONIALS } from '../data'

const PEER_TESTIMONIALS = TESTIMONIALS.filter((t) => t.name === 'Luciara Pereira' || t.name === 'Cicera Passos')

function TestimonialCard({ testimonial, delay }: { testimonial: (typeof TESTIMONIALS)[number]; delay: number }) {
  const ref = useReveal<HTMLElement>()
  return (
    <figure ref={ref} className="reveal rounded-xl border border-line bg-bg-alt/60 p-7" style={{ transitionDelay: `${delay}ms` }}>
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-teal/50" aria-hidden="true">
        <path
          d="M0 20V11.4C0 4.8 4.4 0.6 11.2 0L12 3.4C7.8 4.4 5.8 6.8 5.6 10H11.2V20H0ZM16.8 20V11.4C16.8 4.8 21.2 0.6 28 0L28.8 3.4C24.6 4.4 22.6 6.8 22.4 10H28V20H16.8Z"
          fill="currentColor"
        />
      </svg>
      <blockquote className="mt-3 font-body text-[15px] leading-relaxed text-ink/90">{testimonial.quote}</blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <p className="font-display text-base font-semibold text-ink">{testimonial.name}</p>
        <p className="mt-0.5 font-body text-xs text-muted">{testimonial.role}</p>
        <p className="mt-1 font-mono text-[11px] text-teal">{testimonial.context}</p>
      </figcaption>
    </figure>
  )
}

export default function Recommendations() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="recomendacoes" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={headerRef} className="reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">recomendações</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            O que quem trabalhou comigo diz.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PEER_TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
