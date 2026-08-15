export const WHATSAPP_NUMBER = '5513996079947'
export const WHATSAPP_MESSAGE =
  'Olá, Liliane! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`
export const EMAIL = 'lilianelimafullstackdeveloper@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/liliane-lima-ti/'
export const GITHUB_URL = 'https://github.com/Li-code1'

export interface SkillGroup {
  endpoint: string
  label: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    endpoint: 'GET /stack/frontend',
    label: 'Front-end',
    items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Bootstrap', 'SASS'],
  },
  {
    endpoint: 'GET /stack/backend',
    label: 'Back-end',
    items: ['Python (FastAPI)', 'Programação Orientada a Objetos', 'Estruturas de Dados', 'Algoritmos', 'Concorrência'],
  },
  {
    endpoint: 'GET /stack/dados',
    label: 'Bancos de dados & cache',
    items: ['SQLite', 'Redis', 'SQLAlchemy (ORM)'],
  },
  {
    endpoint: 'GET /stack/qualidade',
    label: 'Testes & qualidade',
    items: ['Pytest', 'Cenários de sucesso e erro (404/400)', 'Validação de dados (422)'],
  },
  {
    endpoint: 'GET /stack/infra',
    label: 'DevOps & observabilidade',
    items: ['Docker', 'Kubernetes', 'ELK Stack'],
  },
  {
    endpoint: 'GET /stack/metodologia',
    label: 'Metodologias',
    items: ['Scrum', 'Kanban', 'Git / GitHub'],
  },
]

export interface Project {
  name: string
  period: string
  description: string
  tags: string[]
  repoUrl: string
  liveUrl: string
  liveLabel?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'PokeFast API',
    period: '06/2026',
    description:
      'API RESTful assíncrona construída com FastAPI, consumindo dados reais da PokéAPI e expondo endpoints paginados e padronizados. Testes unitários automatizados, cobertura de código, containerização em Docker e pipeline de CI/CD via GitHub Actions.',
    tags: ['FastAPI', 'Docker', 'CI/CD', 'Pytest'],
    repoUrl: 'https://github.com/Li-code1/pokefast-api.git',
    liveUrl: 'https://pokefast-api-ebac.onrender.com/docs',
  },
  {
    name: 'SmartFinance',
    period: '06/2026',
    description:
      'Ecossistema de Business Intelligence com React, TypeScript e Vite. Gráficos interativos com Recharts, exportação de relatórios em PDF e gestão de estado via Context API.',
    tags: ['React', 'TypeScript', 'Recharts', 'Context API'],
    repoUrl: 'https://github.com/Li-code1/smart-finance.git',
    liveUrl: 'https://smart-finance-teal-six.vercel.app/',
    liveLabel: 'Demo: admin@admin.com / 123',
  },
  {
    name: 'Portal de Viagens',
    period: '01/2026',
    description:
      'Portal turístico construído com Next.js 14, aplicando roteamento dinâmico, layouts reutilizáveis e estilização isolada com CSS Modules.',
    tags: ['Next.js 14', 'CSS Modules', 'Roteamento dinâmico'],
    repoUrl: 'https://github.com/Li-code1/portal-viagens.git',
    liveUrl: 'https://portal-viagens-mocha.vercel.app/',
  },
  {
    name: 'Pet&Style',
    period: '12/2025',
    description:
      'Loja virtual fictícia especializada em produtos para pets. Aplica HTML5, Tailwind CSS e responsividade completa, incluindo menu hambúrguer para mobile e footer com ano automático.',
    tags: ['Tailwind CSS', 'HTML5', 'Responsivo'],
    repoUrl: 'https://github.com/Li-code1/petstyle-loja-virtual.git',
    liveUrl: 'https://li-code1.github.io/petstyle-loja-virtual/',
  },
]

export interface ClientProject {
  name: string
  client: string
  description: string
  tags: string[]
  repoUrl: string
  liveUrl?: string
  testimonialName: string
}

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    name: 'Elaine Lima Psicanalista',
    client: 'Landing page para psicanalista clínica',
    description:
      'Landing page desenvolvida sob medida para a psicanalista Elaine Lima, com identidade visual e paleta definidas junto à cliente, apresentando seu método de atendimento e canais de contato.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Design responsivo'],
    repoUrl: 'https://github.com/Li-code1/Elaine-Lima-Site.git',
    liveUrl: 'https://elaine-lima-site.vercel.app/',
    testimonialName: 'Elaine Lima',
  },
  {
    name: 'Dra. Maria Carvalho Odontologia',
    client: 'Site institucional para cirurgiã-dentista',
    description:
      'Site institucional para a cirurgiã-dentista Dra. Maria Carvalho, com identidade visual própria, apresentação das especialidades da clínica e canal direto de agendamento via WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Identidade visual'],
    repoUrl: 'https://github.com/Li-code1/dra-maria-carvalho.git',
    liveUrl: 'https://dra-maria-carvalho-site.vercel.app/',
    testimonialName: 'Dra. Maria Carvalho',
  },
]

export interface Testimonial {
  name: string
  role: string
  context: string
  quote: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Luciara Pereira',
    role: 'React | JavaScript | Java | Spring Boot | MySQL | PostgreSQL',
    context: 'Colegas no Programa Elas Tech da Ada Tech, trabalharam juntas em um Hackathon na trilha de Front-End',
    quote:
      'A Liliane é uma desenvolvedora excepcionalmente dedicada, com raciocínio lógico afiado e facilidade para transformar requisitos em interfaces dinâmicas, responsivas e funcionais. Sob pressão, manteve o foco, a organização do código e uma comunicação impecável com o time.',
  },
  {
    name: 'Cicera Passos',
    role: 'Especialista em Conteúdo Digital | IA Generativa | WordPress | SEO',
    context: 'Estudaram e desenvolveram projetos pessoais juntas',
    quote:
      'Durante nossa colaboração, a Liliane sempre se destacou pela dedicação, raciocínio lógico e facilidade para resolver problemas complexos em React, JavaScript e estilização responsiva. É uma dev completa e uma parceira de equipe incrível.',
  },
  {
    name: 'Elaine Lima',
    role: 'Psicanalista clínica',
    context: 'Cliente — landing page desenvolvida pela LC Visia Digital',
    quote:
      'O site ficou muito mais elegante e dinâmico do que eu esperava. A Liliane entendeu exatamente o que eu queria transmitir e entregou algo com muito mais qualidade técnica do que eu imaginava ser possível.',
  },
  {
    name: 'Dra. Maria Carvalho',
    role: 'Cirurgiã-dentista',
    context: 'Cliente — site institucional desenvolvido pela LC Visia Digital',
    quote:
      'Fiquei super satisfeita com o resultado. O site ficou moderno, elegante e muito fácil para meus pacientes encontrarem o que precisam e me chamarem no WhatsApp.',
  },
]

export interface TimelineItem {
  period: string
  title: string
  place: string
  detail?: string
  kind: 'formacao' | 'experiencia'
}

export const TIMELINE: TimelineItem[] = [
  {
    period: '12/2025 — 06/2026',
    title: 'Desenvolvedora Full Stack em Python',
    place: 'EBAC — Escola Britânica de Artes Criativas e Tecnologia',
    kind: 'formacao',
  },
  {
    period: '03/2025 — 07/2027',
    title: 'Análise e Desenvolvimento de Sistemas (EAD- Cursando)',
    place: 'Faculdade IMES',
    kind: 'formacao',
  },
  {
    period: '03/2012 — 06/2013',
    title: 'Pós-graduação em Liderança e Trabalho em Equipe',
    place: 'UNIBR Faculdade de São Vicente',
    kind: 'formacao',
  },
  {
    period: '08/2007 — 12/2014',
    title: 'Caixa Bancário',
    place: 'Banco Itaú Unibanco — Praia Grande/SP',
    detail:
      'Atendimento ao cliente, pagamentos, cobranças, depósitos e saques. Entre 2007 e 2009, venda de produtos financeiros (empréstimos consignados, seguros de vida, cartões de crédito e previdência) para públicos de alta renda e prioridade.',
    kind: 'experiencia',
  },
  {
    period: '03/2007 — 12/2011',
    title: 'Administração de Empresas',
    place: 'UNIBR Faculdade de São Vicente',
    kind: 'formacao',
  },
]

export const COMPLEMENTARY_COURSES: string[] = [
  'Especialização em DevOps e DevSecOps — Programa Hackers do Bem (Softex, SENAI, RNP e Ministério da Ciência), 2026',
  'Front-end React — EBAC, 2026',
  'Fundamentos de IA Generativa — Dio.me, 2025',
  'Versionamento de código com Git e GitHub — Dio.me, 2025',
  'Cibersegurança — Dio.me, 2025',
]
