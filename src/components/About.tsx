import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="sobre" className="border-t border-line py-24">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal">sobre</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Da linha de frente do banco ao desenvolvimento Full Stack: empatia e código lado a lado.
            </h2>

            <div className="relative mt-8 hidden md:block">
              <div
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-teal/25 to-amber/25 blur-lg"
                aria-hidden="true"
              />
              <img
                src="/images/liliane-lima-2.jpg"
                alt="Retrato de Liliane Lima, desenvolvedora Full Stack"
                width={800}
                height={800}
                loading="lazy"
                className="relative aspect-square w-full rounded-2xl border border-line object-cover"
              />
            </div>
          </div>

          <div className="space-y-5 font-body text-[17px] leading-relaxed text-muted">
            <div className="relative mb-2 w-40 md:hidden">
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-teal/25 to-amber/25 blur-lg"
                aria-hidden="true"
              />
              <img
                src="/images/liliane-lima-2.jpg"
                alt="Retrato de Liliane Lima, desenvolvedora Full Stack"
                width={800}
                height={800}
                loading="lazy"
                className="relative aspect-square w-full rounded-2xl border border-line object-cover"
              />
            </div>
            <p>
              Antes do código, foram sete anos no Banco Itaú Unibanco: atendimento ao caixa, vendas de produtos
              financeiros para públicos de alta renda, resolução de problemas em tempo real e uma rotina que exigia
              precisão e escuta. Nesse período, também concluí uma pós-graduação em Liderança e Trabalho em Equipe.
            </p>
            <p>
              Essa bagagem virou base para uma migração de carreira deliberada: graduação em Análise e
              Desenvolvimento de Sistemas em andamento na Faculdade IMES e formação Full Stack em Python pela EBAC.
              Hoje construo APIs assíncronas, interfaces em React e TypeScript e testes automatizados, sempre com
              o mesmo cuidado que aprendi lidando com pessoas e dinheiro real.
            </p>
            <p className="text-ink">
              O resultado é um perfil com: comunicação assertiva, raciocínio analítico e a disciplina técnica para
              transformar isso em software que funciona e que é testado antes de chegar à produção.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
