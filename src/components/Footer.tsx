import Logo from './Logo'
import { WHATSAPP_URL, EMAIL, LINKEDIN_URL, GITHUB_URL } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center md:flex-row md:justify-between md:text-left">
        <Logo />

        <nav aria-label="Contato">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-sm text-muted">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-ink">
                E-mail
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        <p className="font-mono text-xs text-muted">© {year} Liliane Lima</p>
      </div>
    </footer>
  )
}
