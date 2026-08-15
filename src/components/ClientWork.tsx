import { useReveal } from '../hooks/useReveal'
import { CLIENT_PROJECTS, TESTIMONIALS, type ClientProject } from '../data'

function ClientProjectCard({ project, delay }: { project: ClientProject; delay: number }) {
  const ref = useReveal<HTMLElement>()
  const testimonial = TESTIMONIALS.find((t) => t.name === project.testimonialName)

  return (
    <article
      ref={ref}
      className="reveal flex flex-col rounded-xl border border-line bg-bg-alt/60 p-6 transition-all hover:-translate-y-1 hover:border-amber/60"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-mono text-xs text-amber">{project.client}</p>
      <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{project.name}</h3>
      <p className="mt-3 font-body text-[15px] leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-md bg-bg px-2 py-1 font-mono text-[11px] text-teal">
            {tag}
          </li>
        ))}
      </ul>

      {testimonial && (
        <blockquote className="mt-5 border-l-2 border-amber/60 pl-4 font-body text-sm italic leading-relaxed text-ink/85">
          "{testimonial.quote}"
          <footer className="mt-2 font-mono text-xs not-italic text-muted">— {testimonial.name}</footer>
        </blockquote>
      )}

      <div className="mt-5 flex items-center gap-5 border-t border-line pt-4 font-body text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink transition-colors hover:text-amber"
          >
            Ver ao vivo ↗
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-ink"
        >
          Repositório
        </a>
      </div>
    </article>
  )
}

export default function ClientWork() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="clientes" className="border-t border-line bg-bg-alt/30 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={headerRef} className="reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-amber">trabalhos freelance</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Sites sob medida, entregues para clientes reais.
          </h2>
          <p className="mt-4 font-body text-muted">
            Projetos desenvolvidos pela Liliane Lima.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CLIENT_PROJECTS.map((project, i) => (
            <ClientProjectCard key={project.name} project={project} delay={(i % 2) * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
