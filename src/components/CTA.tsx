import { useReveal } from '../hooks/useReveal'
import { WHATSAPP_URL, EMAIL, LINKEDIN_URL } from '../data'

export default function CTA() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contato" className="border-t border-line py-24">
      <div
        ref={ref}
        className="reveal mx-auto max-w-4xl rounded-2xl border border-line bg-gradient-to-br from-bg-alt to-bg px-6 py-14 text-center md:px-16"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-amber">Call /agendar</p>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
          Vamos marcar uma entrevista ou conversar sobre o seu projeto?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-muted">
          Resposta em até 24h. Aberta para vagas CLT, PJ e projetos freelance em Front-end, Back-end ou Full Stack.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 font-semibold text-bg transition-transform hover:scale-[1.03] hover:bg-amber-dim"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.48 1.36 4.98L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.9C21.96 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.14-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.6.83 2.06.9 2.21.07.15.12.32.02.51-.1.19-.15.31-.29.47-.14.16-.3.36-.43.48-.14.13-.3.28-.13.55.17.28.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.1 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
            </svg>
            Chamar no WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Enviar e-mail
          </a>
        </div>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-body text-sm text-muted transition-colors hover:text-ink"
        >
          ou conecte-se no LinkedIn ↗
        </a>
      </div>
    </section>
  )
}
