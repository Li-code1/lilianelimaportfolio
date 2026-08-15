import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import ClientWork from './components/ClientWork'
import Recommendations from './components/Recommendations'
import Timeline from './components/Timeline'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-body text-ink">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <Nav />

      <main id="conteudo">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <ClientWork />
        <Recommendations />
        <Timeline />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
