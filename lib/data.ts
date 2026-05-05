export type BriefImpact = {
  number: string | null
  caption: string
}

export type BriefSource = {
  label: string
  href: string | null
}

export type BriefData = {
  id: string
  domain: string
  subject: string
  assessment: string
  impact: BriefImpact
  systems: string[]
  source: BriefSource
  hasRedaction: boolean
}

export type CompetitionEntry = {
  placement: string
  event: string
  institution: string
  isPodium: boolean
}

export type ResearchPaper = {
  title: string
  journal: string
  year: number
  role: string
}

export type StackGroup = {
  label: string
  items: string[]
}

export const briefs: BriefData[] = [
  {
    id: '01',
    domain: 'DEVOPS AUTOMATION',
    subject: 'DevOps teams waste hours translating intent into CLI sequences.',
    assessment:
      "The gap isn't tooling — it's the translation layer. Every senior engineer becomes a human router for teammates who know what they want but not how to say it to a machine. SYNAPSE eliminates that role.",
    impact: {
      number: '3',
      caption: 'conversational turns replaces multi-step CLI workflows end-to-end',
    },
    systems: ['LangGraph', 'FastAPI', 'Socket.IO', 'React', 'AWS', 'Gemini'],
    source: { label: 'github.com/arduvey29/SYNAPSE', href: 'https://github.com/arduvey29/SYNAPSE' },
    hasRedaction: false,
  },
  {
    id: '02',
    domain: 'DEFENSE COMMS',
    subject: '1.4M+ defense personnel communicating over insecure foreign-owned platforms.',
    assessment:
      "The problem isn't encryption — it's that no domestic alternative existed that could pass operational scrutiny. SurakshaNet was built for Smart India Hackathon 2025 to be that alternative.",
    impact: {
      number: '8',
      caption: 'security-first features including remote wipe, Chameleon Mode, and real-time OPSEC scanning',
    },
    systems: ['React Native', 'TypeScript', 'Socket.io', 'AWS', 'RBAC'],
    source: {
      label: 'github.com/dimension-drifter/suraksha-net',
      href: 'https://github.com/dimension-drifter/suraksha-net',
    },
    hasRedaction: true,
  },
  {
    id: '03',
    domain: 'SAAS PLATFORM',
    subject: 'Multi-tenant teams working blind — no shared visibility, all manual reporting.',
    assessment:
      "The reporting gap isn't a data problem — it's an architecture problem. ClubIn's real-time sync across 3 user roles eliminated the need for manual coordination entirely.",
    impact: {
      number: '50%',
      caption: 'reduction in manual reporting effort across cross-functional teams',
    },
    systems: ['AWS Amplify Gen 2', 'React', 'Real-time Sync', 'Multi-tenant RBAC'],
    source: { label: '— PRODUCTION / CLIENT', href: null },
    hasRedaction: false,
  },
  {
    id: '04',
    domain: 'CONTENT AUTOMATION',
    subject: 'Social media ops burn hours on decisions a model can make in seconds.',
    assessment:
      'The bottleneck is the last mile — uploading a video and knowing exactly when and how to post it. TuViral handles the entire decision layer automatically.',
    impact: {
      number: '30%',
      caption: 'reduction in manual workflow steps reported by 30 early testers',
    },
    systems: ['Next.js', 'Python', 'Node.js', 'AWS', 'Agentic AI'],
    source: { label: 'tu-viral.vercel.app', href: 'https://tu-viral.vercel.app' },
    hasRedaction: false,
  },
  {
    id: '05',
    domain: 'VOICE AI LENDING',
    subject: 'Loan origination requires human literacy, physical presence, and hours of back-and-forth.',
    assessment:
      "The accessibility gap in formal credit isn't about willingness — it's about interface. A voice-first pipeline removes every barrier that a form-based system creates.",
    impact: {
      number: null,
      caption: 'End-to-end origination — eligibility to sanction — via natural voice in one call',
    },
    systems: ['FastAPI', 'LangChain', 'Groq', 'ASR', 'TTS', 'Twilio'],
    source: {
      label: 'github.com/dimension-drifter/tezloan',
      href: 'https://github.com/dimension-drifter/tezloan',
    },
    hasRedaction: false,
  },
  {
    id: '06',
    domain: 'REMOTE SYSTEMS',
    subject: 'Remote admin tasks require chaining SSH commands across a fragile session.',
    assessment:
      "The friction isn't technical expertise — it's the cognitive overhead of remembering command sequences for routine work. RemoteShell collapses that overhead into a single interface.",
    impact: {
      number: '40%',
      caption: 'reduction in task completion time vs native SSH sessions',
    },
    systems: ['Python', 'Paramiko', 'SSH', 'SCP', 'Linux'],
    source: {
      label: 'github.com/arduvey29/Remote-Shell',
      href: 'https://github.com/arduvey29/Remote-Shell',
    },
    hasRedaction: false,
  },
]

export const competitionEntries: CompetitionEntry[] = [
  {
    placement: 'Selected — Top Team',
    event: 'India Innovates 2026',
    institution: 'Delhi Municipal Corporation · 15,000+ teams',
    isPodium: true,
  },
  {
    placement: 'Top 15',
    event: 'Convolve 4.0',
    institution: 'Pan-IIT Hackathon',
    isPodium: true,
  },
  {
    placement: 'Phase 2',
    event: 'RBI × Tryst',
    institution: 'IIT Delhi',
    isPodium: false,
  },
  {
    placement: '2nd Place',
    event: 'ImaGenAI Hackathon',
    institution: 'IIT Delhi',
    isPodium: true,
  },
  {
    placement: '4th Place',
    event: 'SynthQuest Hackathon',
    institution: 'IIT Delhi',
    isPodium: true,
  },
  {
    placement: '8th Place',
    event: 'Codefiesta 3.0',
    institution: '—',
    isPodium: false,
  },
]

export const researchPapers: ResearchPaper[] = [
  {
    title: 'AI for Early Detection of Mental Health via Passive Mobile Health Sensing',
    journal: 'IJRRR',
    year: 2025,
    role: 'PRIMARY CONTRIBUTOR',
  },
  {
    title:
      'Multimodal Agentic AI for Zero-Click Social Media Content Optimization on a Serverless Cloud-Native Architecture',
    journal: 'IJRRR',
    year: 2025,
    role: 'PRIMARY CONTRIBUTOR',
  },
]

export const stackGroups: StackGroup[] = [
  {
    label: 'AI & AGENTS',
    items: [
      'Agentic AI',
      'LangGraph',
      'LangChain',
      'Gemini',
      'Groq',
      'NLP',
      'ASR',
      'TTS',
      'Prompt Engineering',
    ],
  },
  {
    label: 'CLOUD & DEVOPS',
    items: [
      'AWS (Amplify, Lambda, S3)',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'GitHub Actions',
      'Socket.IO',
      'WebSockets',
      'LiveKit',
    ],
  },
  {
    label: 'FRONTEND',
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite'],
  },
  {
    label: 'LANGUAGES & SYSTEMS',
    items: [
      'Python',
      'JavaScript',
      'TypeScript',
      'FastAPI',
      'Node.js',
      'Linux',
      'SSH',
      'Paramiko',
      'REST APIs',
      'SIP/WebRTC',
    ],
  },
]
