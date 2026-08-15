# Site — Liliane Lima, Desenvolvedora Full Stack

Site pessoal em React + TypeScript + Tailwind CSS, focado em conversão: o objetivo de cada seção é levar recrutadores e clientes a agendar uma conversa pelo WhatsApp.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Gerar build de produção

```bash
npm run build
npm run preview   # opcional, para conferir o build localmente
```

Os arquivos finais ficam em `dist/`.

## Publicar (grátis)

Qualquer uma destas opções funciona bem com este projeto:

- **Vercel**: importe o repositório em vercel.com, framework "Vite" é detectado automaticamente.
- **Netlify**: `npm run build`, depois arraste a pasta `dist/` em app.netlify.com/drop, ou conecte o repositório (build command `npm run build`, publish directory `dist`).
- **GitHub Pages**: adicione o pacote `gh-pages` ou publique a pasta `dist/` via GitHub Actions.

## Onde editar o conteúdo

Todo o conteúdo real (textos de projetos, stack, linha do tempo, WhatsApp, e-mail, links) está centralizado em **`src/data.ts`** — não é preciso mexer nos componentes para atualizar informações. Basta editar esse arquivo e o site inteiro reflete a mudança.

## Estrutura

```
src/
  App.tsx              — monta as seções na ordem da página
  data.ts               — todo o conteúdo (edite aqui)
  index.css             — fontes, cores base e acessibilidade
  components/
    Nav.tsx              — menu fixo + CTA de WhatsApp
    Hero.tsx             — abertura com o painel "API" animado
    About.tsx            — a trajetória banco → tecnologia
    Stack.tsx             — competências técnicas
    Projects.tsx          — os 4 projetos reais, com links
    Timeline.tsx           — formação, experiência e cursos complementares
    CTA.tsx                — chamada final para agendamento
    Footer.tsx              — contato e redes
    Logo.tsx                 — a marca (monograma "LL")
  hooks/
    useReveal.ts              — animação de entrada ao rolar a página
```

## Notas de acessibilidade já aplicadas

- Skip link para pular direto ao conteúdo.
- Contraste alto entre texto e fundo em todo o site.
- Foco de teclado sempre visível (`:focus-visible`).
- `prefers-reduced-motion` respeitado — quem desativa animações no sistema não vê nenhuma.
- Marcação semântica (`header`, `main`, `nav`, `footer`, `article`, hierarquia de `h1`–`h3`) e `aria-label`/`aria-expanded` no menu mobile.
