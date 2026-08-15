import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../data'

const RESPONSE_LINES = [
  '{',
  '  "cargo": "Full Stack Developer",',
  '  "stack": ["Python", "FastAPI", "React", "TypeScript"],',
  '  "formação": "EBAC + ADS — Faculdade IMES (Cursando)",',
  '  "disponibilidade": "aberta para entrevistas e freelas",',
  '  "tempo_de_resposta": "até 24h"',
  '}',
]

/**
 * Types out a mock API response, line by line — the literal artifact of
 * Liliane's own work (she builds APIs), doubling as proof of front-end
 * craft and a quiet flex of attention to detail.
 */
function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState(0)
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLines(RESPONSE_LINES.length)
      return
    }
    if (visibleLines >= RESPONSE_LINES.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 260)
    return () => clearTimeout(t)
  }, [visibleLines, prefersReducedMotion])

  return (
    <div
      className="w-full max-w-full sm:max-w-md overflow-hidden rounded-xl border border-line bg-bg-alt/80 shadow-[0_0_60px_-15px_rgba(53,214,196,0.25)]"
      role="img"
      aria-label="Painel de terminal simulando uma chamada de API que retorna o status profissional de Liliane"
    >
      <div className="flex items-center gap-1.5 rounded-t-xl border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">status.api</span>
      </div>
      <div className="px-4 py-4 sm:px-5 sm:py-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto">
        <p className="text-teal">
          <span className="text-muted">$</span> curl /liliane/status
        </p>
        <div className="mt-3 min-h-[168px]">
          {RESPONSE_LINES.slice(0, visibleLines).map((line, i) => (
            <p key={i} className="whitespace-pre-wrap break-words text-ink/90">
              {line}
            </p>
          ))}
          {visibleLines < RESPONSE_LINES.length && (
            <span className="inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-amber" aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-grid pt-28 pb-16 sm:pt-40 md:pt-44 md:pb-32">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl md:h-96 md:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-14 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div className="min-w-0">
          <div className="mb-5 flex items-center gap-3">
            <img
              src="/images/liliane-lima-1.jpg"
              alt="Foto de Liliane Lima"
              width={160}
              height={160}
              loading="lazy"
              className="h-20 w-20 shrink-0 rounded-full border-2 border-teal/60 object-cover sm:h-24 sm:w-24"
            />
            <p className="font-display text-lg font-semibold text-ink sm:text-xl">Liliane Lima</p>
          </div>

          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-teal max-w-full">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
            <span className="truncate">disponível para entrevistas</span>
          </p>
          
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.2] sm:leading-[1.15] text-ink break-words">
            Desenvolvedora Full Stack que entende{' '}
            <span className="bg-gradient-to-r from-teal to-amber bg-clip-text text-transparent inline-block">
              sistemas
            </span>{' '}
            , e entende pessoas.
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl font-body text-sm sm:text-lg leading-relaxed text-muted break-words">
            Sete anos lidando com pessoas e processos reais no setor bancário, formação em liderança e, agora, Full
            Stack em Python, React e FastAPI. Código testado, documentado e pronto para produção, não só para
            portfólio.
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 font-semibold text-bg transition-transform hover:scale-[1.03] hover:bg-amber-dim text-center"
            >
              Agendar conversa no WhatsApp
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5 shrink-0" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 font-semibold text-ink transition-colors hover:border-teal hover:text-teal text-center"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full min-w-0">
          <div className="animate-float w-full max-w-md">
            <TerminalPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
