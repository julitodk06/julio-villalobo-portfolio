export const profile = {
  name: "Julio Antonio Villalobo",
  role: "Full-Stack Web Developer",
  location: "Yerba Buena, Tucumán, Argentina",
  email: "juliov@lexiacode.com",
  links: {
    github: "https://github.com/julitodk06",
    linkedin: "https://www.linkedin.com/in/julio-antonio-villalobo-770b22296",
    lexiacode: "https://lexiacode.com",
    fundatur: "https://fundacionfundatur.org"
  }
};

export const metrics = [
  {
    value: "AI",
    label: "Human-supervised automation",
    detail:
      "Workflow design with review points, approval controls and responsible use of Generative AI."
  },
  {
    value: "CRM",
    label: "Commercial operations",
    detail:
      "Modular workflows, lead management, reporting and role-based controls."
  },
  {
    value: "QA",
    label: "Staged product delivery",
    detail:
      "Requirements, milestones, validation, security review and delivery coordination."
  },
  {
    value: "RWA",
    label: "Preliminary structuring",
    detail:
      "Tokenization concepts, architecture and due diligence without claiming asset issuance or capital raised."
  }
];

export const capabilities = [
  {
    number: "01",
    title: "AI Product Strategy",
    description:
      "Turn business goals into bounded product roadmaps, measurable milestones and responsible AI operating models.",
    items: ["LLM integrations", "AI-agent workflows", "Human approval gates"]
  },
  {
    number: "02",
    title: "Enterprise Architecture",
    description:
      "Design modular systems with explicit security boundaries, resilient integrations and observable delivery paths.",
    items: ["CRM architecture", "APIs and data layers", "Multi-tenant controls"]
  },
  {
    number: "03",
    title: "Transformation Delivery",
    description:
      "Coordinate technical and business stakeholders through requirements, QA, risk management and staged execution.",
    items: [
      "Product roadmaps",
      "Cross-functional leadership",
      "QA and security"
    ]
  },
  {
    number: "04",
    title: "RWA & Web3 Systems",
    description:
      "Structure digital-asset concepts and architectures around legal separation, compliance logic, auditability and least privilege.",
    items: ["RWA tokenization", "Smart contracts", "Compliance workflows"]
  }
];

export const projects = [
  {
    name: "LexiaCode OS",
    category: "Full-Stack Operations & CRM Platform",
    status: "Private system",
    image: "assets/lexiacodeLogo.svg",
    description:
      "A full-stack modular CRM and commercial operations platform built with React, Node.js, Express, and Prisma ORM, featuring role-based access control and human-in-the-loop workflows.",
    evidence: [
      "Modular full-stack CRM architecture with SQLite (development) and PostgreSQL (production-ready)",
      "Role-based access control (RBAC) middleware, JWT authentication, and structured approval gates",
      "Security hardening with CORS restrictions, input sanitization, rate limiting, and automated Vitest regression suites"
    ],
    stack: ["React 19", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "SQLite", "Tailwind CSS"],
    links: [
      {
        label: "Architecture case study",
        url: "https://github.com/julitodk06/lexiacode-os-case-study"
      },
      {label: "LexiaCode Production", url: "https://lexiacode.com"}
    ]
  },
  {
    name: "Bot de Arbitraje Financiero",
    category: "High-Frequency Data & Algorithmic Trading",
    status: "Production release v3.5",
    image: "assets/botLogo.svg",
    description:
      "A high-fidelity financial scanner and deterministic arbitrage simulation engine (Direct & Multi-Leg Triangular) across Argentine crypto and fiat markets.",
    evidence: [
      "Deterministic graph cycle traversal (DFS) simulating multi-tier orderbooks with exact fee accounting",
      "Real-time market feeds integrating Binance P2P/Spot, Bybit, and local CriptoYa exchange gateways",
      "Fail-closed operational alerts, Telegram bot control interface, rate limiting, and structured JSON telemetry"
    ],
    stack: ["Python 3.11", "Asyncio", "Docker", "PostgreSQL", "Alembic", "Redis", "REST APIs", "Telegram API"],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/julitodk06/bot-arbitraje"
      }
    ]
  },
  {
    name: "Lexia Tokenization Platform",
    category: "Institutional B2B RWA Infrastructure",
    status: "Phase 1 & 2 Foundation",
    image: "assets/rwaLogo.svg",
    description:
      "An institutional asset tokenization backend platform featuring PostgreSQL Row-Level Security (RLS), multi-tenant isolation, and KYC/compliance verification boundaries.",
    evidence: [
      "Modular-monolith backend architecture in NestJS with clean bounded contexts and strict tenant isolation",
      "Database-enforced Row-Level Security (RLS) fail-closed policies with least-privilege roles",
      "Immutable append-only audit event trails and deterministic chain-adapter decoupling"
    ],
    stack: ["NestJS", "Next.js", "TypeScript", "PostgreSQL RLS", "Redis", "TypeORM", "Docker"],
    links: [
      {
        label: "Architecture case study",
        url: "https://github.com/julitodk06/rwa-tokenization-architecture"
      }
    ]
  },
  {
    name: "Institutional AI Modernization",
    category: "Responsible operational automation",
    status: "Program portfolio",
    image: "assets/aiOpsLogo.svg",
    description:
      "Blueprints that translate Generative AI capabilities into governed routines for institutions, SMEs and productive sectors.",
    evidence: [
      "Human review and low-risk adoption patterns",
      "Standardized project briefs and automated reporting",
      "Transformation and AI-adoption proposals for institutional and productive-sector needs"
    ],
    stack: ["Python", "LLMs", "AI workflows", "REST APIs", "Reporting"],
    links: [{label: "Fundatur", url: "https://fundacionfundatur.org"}]
  }
];

export const experience = [
  {
    period: "Jan 2023 - Present",
    role: "Full-Stack Web Developer & Technical Lead",
    organization: "LexiaCode",
    description:
      "Architect and ship production-ready web platforms, CRM systems, and automated workflows using Next.js, React, Node.js, and TypeScript.",
    outcomes: [
      "Engineered LexiaCode OS modular CRM platform using React, Node.js, Express, and Prisma ORM with role-based access control.",
      "Deployed official LexiaCode platform (lexiacode.com) with 100% static export across 28 routes and automated CI/CD pipelines.",
      "Built deterministic client-side interactive modules, automated Vitest test suites, and strict type-safety checks."
    ]
  },
  {
    period: "Mar 2021 - Present",
    role: "Web & IT Project Specialist",
    organization: "Fundacion Fundatur",
    description:
      "Connect digital transformation, workflow automation and structured web platforms with institutional and regional productive-sector needs.",
    outcomes: [
      "Created web portals, internal dashboards, and digital workflows to streamline operational communications.",
      "Connected third-party REST APIs and automated recurring reporting pipelines using Python scripts.",
      "Introduced standardized briefs, reporting and approval workflows across regional initiatives."
    ]
  }
];

export const education = [
  {
    institution: "National University of Tucumán (UNT)",
    program: "Programming Studies",
    date: "2020"
  },
  {
    institution: "Saylor Academy",
    program: "Strategic Project Management (BUS605)",
    date: "July 2026 | Credential 4490503854JV"
  },
  {
    institution: "Cyfrin Updraft",
    program: "Smart Contract Security & Auditing",
    date: "Ongoing"
  },
  {
    institution: "Advanced Technical Training",
    program: "Blockchain & Smart Contracts Specialization",
    date: "2022"
  }
];

export const stack = [
  "Python",
  "React",
  "Node.js",
  "Express",
  "Prisma",
  "SQL",
  "PostgreSQL",
  "SQLite",
  "REST APIs",
  "Azure",
  "Docker",
  "Git/GitHub",
  "Linux",
  "Nginx",
  "Redis",
  "Vite",
  "CI/CD Concepts"
];
