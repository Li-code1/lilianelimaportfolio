import { useState } from 'react'
import Logo from './Logo'
import { WHATSAPP_URL } from '../data'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#recomendacoes', label: 'Recomendações' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#topo" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-7 font-body text-sm text-muted">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] hover:bg-amber-dim focus-visible:scale-[1.03]"
          >
            Agendar conversa
          </a>
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-md border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navegação móvel" className="border-t border-line bg-bg md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4 font-body text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-muted hover:bg-bg-alt hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-amber px-4 py-2.5 text-center font-semibold text-bg"
              >
                Agendar conversa
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
