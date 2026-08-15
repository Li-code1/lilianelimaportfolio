import { useReveal } from '../hooks/useReveal'
import { PROJECTS, type Project } from '../data'

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useReveal<HTMLElement>()
  return (
    <article
      ref={ref}
      className="reveal group flex flex-col rounded-xl border border-line bg-bg-alt/60 p-6 transition-all hover:-translate-y-1 hover:border-teal/60 hover:shadow-[0_20px_40px_-25px_rgba(53,214,196,0.4)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
        <span className="shrink-0 font-mono text-xs text-muted">{project.period}</span>
      </div>

      <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-md bg-bg px-2 py-1 font-mono text-[11px] text-teal">
            {tag}
          </li>
        ))}
      </ul>

      {project.liveLabel && <p className="mt-3 font-mono text-xs text-amber">{project.liveLabel}</p>}

      <div className="mt-5 flex items-center gap-5 border-t border-line pt-4 font-body text-sm">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ink transition-colors hover:text-teal"
        >
          Ver ao vivo ↗
        </a>
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

export default function Projects() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="projetos" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={headerRef} className="reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">projetos</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Código em produção.
          </h2>
          <p className="mt-4 font-body text-muted">
            Todos os projetos abaixo estão publicados e com repositório aberto,clique para testar ou ler o código.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={(i % 2) * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
