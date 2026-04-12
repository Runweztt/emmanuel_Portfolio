import { img1, img2, img3, img4, img6 } from '../assets/jargsai/index.js'
import { docuReview } from '../assets/loopedai/index.js'
import loopvaImg from '../assets/loopva.png'
import jiboImg from '../assets/jiboltd.png'

// ─── Projects ──────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'loopedai',
    title: 'LoopedAI',
    tagline: 'AI-Powered Immigration Advisory Platform',
    type: 'Full-Stack SaaS',
    status: 'Live',
    liveUrl: 'https://www.loopedai.io',
    featured: true,
    summary:
      'LoopedAI is a live SaaS platform that helps people navigate visa and immigration requirements. Users get AI-powered answers to immigration questions and can upload their documents for intelligent review, with a detailed compliance report showing exactly what is missing, incorrect, or ready.',
    problem:
      'Immigration compliance is slow, expensive, and opaque. Most people don\'t know if their documents are correct until an application is rejected.',
    solution:
      'LoopedAI gives users an AI immigration assistant and a document review tool in one platform. Ask it anything about visa requirements, or upload your documents and get a structured compliance report back. Accurate, fast, and without paying a lawyer for the initial check.',
    features: [
      'AI immigration chat: ask questions and get accurate answers based on your country and visa type',
      'Document review: upload your visa documents and receive a detailed compliance report',
      'Subscription billing with free and premium tiers',
      'Telegram bot for immigration queries directly from your phone',
      'Supports multiple countries and visa categories',
      'Secure authentication with Google OAuth and email/password',
    ],
    stack: [
      'FastAPI', 'React', 'Supabase', 'Redis', 'Docker',
      'Stripe', 'GitHub Actions', 'AI (multi-model)'
    ],
    stats: [],
    images: [docuReview],
    imageType: 'browser',
    color: '#6366f1',
  },
  {
    id: 'jargsai',
    title: 'JargsAI',
    tagline: 'WhatsApp-Based Agentic AI Secretary',
    type: 'Agentic AI System',
    status: 'Production',
    liveUrl: null,
    featured: true,
    summary:
      'A production-grade, WhatsApp-native AI secretary orchestrated with CrewAI multi-agent flows. You send a message. JargsAI classifies the intent, routes it to the right agent crew, executes the workflow, and replies. All inside WhatsApp.',
    problem:
      'Most AI tools live in their own apps, which means context-switching kills productivity. People already live in WhatsApp. JargsAI brings the automation to where the conversation is happening, not the other way around.',
    solution:
      'An agentic system built on CrewAI and modular OpenClaw skill handlers. Each incoming message gets classified, routed, and handled by a specific agent crew. High-stakes actions (deleting events, sending content) are gated behind explicit confirmation. Multi-step memory persists across the conversation.',
    features: [
      'CrewAI multi-agent orchestration with OpenClaw skill modules per intent type',
      'Google Calendar: read, create, update, and delete events via OAuth',
      'Live web research with structured PDF report generation and delivery',
      'Whisper voice transcription: send audio and get the action executed',
      'Notion task management: create, update, complete tasks by message',
      'Social media content generation (drafts + copy)',
      'Reminder scheduling and follow-up system',
      'Confirmation gating for high-stakes actions before execution',
    ],
    stack: [
      'FastAPI', 'CrewAI', 'LangChain', 'OpenAI', 'Claude API',
      'Whisper', 'Twilio', 'Supabase', 'Celery', 'Redis', 'NGINX', 'Docker'
    ],
    stats: [
      { value: '8+', label: 'Skill Modules' },
      { value: '12', label: 'Integrations' },
      { value: 'Zero', label: 'New UI Needed' },
    ],
    images: [img1, img2, img3, img4, img6],
    imageType: 'phone',
    color: '#22c55e',
  },
  {
    id: 'loopva',
    title: 'LoopVA',
    tagline: 'Virtual Assistant Platform',
    type: 'Full-Stack Web App',
    status: 'Live',
    liveUrl: 'https://www.loopva.co.uk',
    featured: true,
    summary:
      'A full-stack platform connecting businesses with skilled virtual assistants. Companies post their needs, assistants apply, and the platform handles the rest from discovery through to engagement.',
    problem:
      'Finding a reliable virtual assistant is slow. Job boards are generic, agencies are expensive, and vetting takes time businesses don\'t have.',
    solution:
      'LoopVA is a purpose-built marketplace for virtual assistant work. Built with React on the frontend and Python on the backend, deployed on Render.',
    features: [
      'Service discovery and matching between businesses and virtual assistants',
      'User authentication and profile management for both sides',
      'Service listing, application, and booking flow',
      'Full-stack React + Python architecture, deployed on Render',
    ],
    stack: ['React', 'Python', 'Render'],
    stats: [],
    images: [loopvaImg],
    imageType: 'browser',
    color: '#f59e0b',
  },
]

// ─── Websites Built ────────────────────────────────────────────────────────
export const websites = [
  {
    id: 'loopedai-site',
    name: 'LoopedAI',
    url: 'https://www.loopedai.io',
    label: 'SaaS · Immigration AI',
    description: 'Production SaaS with multi-agent AI, 7-stage document review pipeline, and Stripe subscriptions.',
    image: null,
  },
  {
    id: 'loopva-site',
    name: 'LoopVA',
    url: 'https://www.loopva.co.uk',
    label: 'Platform · Virtual Assistants',
    description: 'Full-stack platform connecting businesses with virtual assistants.',
    image: loopvaImg,
  },
  {
    id: 'jibo-site',
    name: 'Jibo Ltd',
    url: 'https://www.jiboltd.com',
    label: 'Corporate · Financial Services',
    description: 'Corporate web presence for a financial services firm.',
    image: jiboImg,
  },
  {
    id: 'jargscormark-site',
    name: 'Jargs Cormark',
    url: 'https://www.jargscormark.com',
    label: 'Corporate · Analytics',
    description: 'Business site for a data analytics and consulting firm.',
    image: null,
  },
  {
    id: 'ptoc-site',
    name: 'PTOC',
    url: 'https://www.ptoc.io',
    label: 'Platform · Professional Services',
    description: 'Professional services platform.',
    image: null,
  },
]

// ─── Skills ────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'REST APIs', 'JWT Auth', 'Stripe API', 'WebSockets', 'NGINX'],
  },
  {
    category: 'Data & Databases',
    items: ['Supabase', 'PostgreSQL', 'Redis', 'SQL', 'Data Analysis', 'Data Visualization', 'Data Cleaning'],
  },
  {
    category: 'DevOps & Infra',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'Celery', 'Linux', 'Render', 'VPS Deploy', 'Git'],
  },
  {
    category: 'AI & Automation',
    items: ['CrewAI', 'LangChain', 'Claude API', 'OpenAI API', 'PaddleOCR', 'Azure AI', 'Whisper', 'Twilio', 'Agentic Pipelines'],
  },
]

// ─── Experience ────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    company: 'KINT TECH',
    role: 'Software Engineer Intern',
    period: '2024',
    type: 'Engineering',
    description: [
      'Worked on backend API development and system design for client-facing software products.',
      'Contributed to data pipeline development, database architecture, and cross-functional feature delivery.',
      'Operated across multiple concurrent projects, the kind of environment where you have to make architectural decisions quickly.',
    ],
  },
  {
    id: 2,
    company: 'JARGS CORMARK',
    role: 'Data Analyst',
    period: '2023 – 2024',
    type: 'Data',
    description: [
      'Delivered data analysis and business intelligence projects across client datasets.',
      'Built reporting dashboards, data pipelines, and structured data models for operational decisions.',
      'Cleaned and transformed messy real-world datasets. This is where the instinct for what data actually needs came from.',
    ],
  },
  {
    id: 3,
    company: 'GETWORKINGUK',
    role: 'Virtual Assistant',
    period: '2023',
    type: 'Operations',
    description: [
      'Managed client communications, scheduling, and multi-timezone coordination.',
      'This role became the product spec for both LoopVA and JargsAI, built to automate exactly what a good VA does.',
    ],
  },
]

// ─── Education ─────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    institution: 'African Leadership University',
    degree: 'B.Sc. Software Engineering',
    location: 'Kigali, Rwanda',
    period: '2023 – Present',
    highlights: [
      'Studying software engineering with a focus on systems design, full-stack development, and AI.',
      'The expectation at ALU is to ship real things, not just pass courses. That is what I have been doing.',
    ],
  },
]
