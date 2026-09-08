import { img1, img2, img3, img4, img6 } from '../assets/jargsai/index.js'
import { docuReview } from '../assets/loopedai/index.js'
import loopvaImg from '../assets/loopva.png'
import canweeImg from '../assets/canwee.png'

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
      'LoopedAI helps users understand visa requirements and check their documents before applying.',
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
    status: 'Live',
    liveUrl: 'https://www.jargsai.tech',
    featured: true,
    summary:
      'JargsAI is a WhatsApp AI secretary that routes messages to the right workflow and completes tasks.',
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
      'LoopVA connects businesses with virtual assistants through a structured service marketplace.',
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
  {
    id: 'canwee',
    title: 'Canwee Apartments',
    tagline: 'Customer-facing hospitality brand website',
    type: 'Hospitality Brand Website',
    status: 'Live',
    liveUrl: 'https://www.canweeapartments.com',
    featured: true,
    summary:
      'Canwee Apartments is a hospitality website for property discovery, guest trust, and booking inquiries.',
    problem:
      'Hospitality brands need a trustworthy online presence that explains the value quickly and helps customers feel confident before they book.',
    solution:
      'I built a clear, conversion-focused website with strong property presentation, location visibility, and a smoother guest journey across desktop and mobile.',
    features: [
      'Location-based property discovery for Ikeja, Gbagada, and Abeokuta',
      'Guest-facing property presentation with clear amenity positioning',
      'Booking and inquiry flow designed for trust and ease of use',
      'Responsive brand website built for hospitality marketing and conversion',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Booking UX', 'Responsive Design'],
    stats: [
      { value: '3', label: 'Key Locations' },
      { value: 'Multi', label: 'Stay Options' },
    ],
    images: [canweeImg],
    imageType: 'browser',
    color: '#0ea5e9',
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
    role: 'Software Engineer',
    period: 'Mar 2025 – Feb 2026',
    location: 'Remote, UK',
    type: 'Engineering',
    description: [
      'Contributed to the development and optimisation of software applications, improving functionality, system efficiency, and user experience.',
      'Collaborated with senior developers to debug, test, and resolve technical issues, ensuring timely delivery of stable software releases.',
      'Applied Python, React, SQL, and Git to implement features and follow best practices in coding standards and version control.',
      'Participated in Agile ceremonies including sprint planning and code reviews, gaining practical experience in the full software development lifecycle.',
      'Produced technical documentation and user guides to support internal knowledge sharing and streamline onboarding for new team members.',
    ],
  },
  {
    id: 2,
    company: 'JARGS CORMARK',
    role: 'Software Engineer',
    period: 'Jul 2022 – Jan 2025',
    location: 'Remote, NG',
    type: 'Engineering',
    description: [
      'Developed internal tools and automation scripts in Python that reduced manual reporting time by 60%, processing data from Meta and Google APIs.',
      'Built interactive dashboards that tracked campaign performance across 15+ client accounts, helping the team improve ad ROI by 25%.',
      'Designed and maintained data pipelines handling 1000+ records monthly, automating data collection, cleaning, and visualisation workflows.',
    ],
  },
  {
    id: 3,
    company: 'GETWORKINGUK',
    role: 'Web Developer',
    period: 'Feb 2023 – Oct 2023',
    location: 'Remote, UK',
    type: 'Engineering',
    description: [
      'Built and delivered 10+ responsive client-facing websites using React and CSS, reducing average project turnaround time by 30% through reusable component architecture.',
      'Improved page load performance by 40% across multiple sites through code splitting, lazy loading, and asset optimisation.',
      'Collaborated directly with clients to translate business requirements into functional UIs, maintaining a 95% client satisfaction rate across delivered projects.',
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
