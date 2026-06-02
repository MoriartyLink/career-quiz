import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "When a complex, seemingly unsolvable problem arises, what is your initial reaction? (High Plant & INTJ trait)",
    options: [
      { text: "I retreat into my thoughts, trying to design a completely novel, overarching system to solve it.", scores: { architect: 3, ai_engineer: 2 } },
      { text: "I look for a new tool, technology, or external idea I can adapt to hack together a solution.", scores: { devops: 2, backend: 1 } },
      { text: "I try to structure the chaos by breaking it into defined tasks and assigning them to the right people.", scores: { pm: 3, tech_lead: 2 } },
      { text: "I dig deep into the data or the core algorithms to find the hidden pattern causing the issue.", scores: { data_analyst: 3, backend: 2, ai_engineer: 2 } }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to handle routine maintenance and repetitive tasks? (ADHD trait)",
    options: [
      { text: "I despise them. I want to automate everything so I never have to do it twice.", scores: { devops: 3, backend: 2, architect: 1 } },
      { text: "I find them draining, so I try to delegate them while I focus on the strategic vision.", scores: { tech_lead: 2, pm: 2, architect: 1 } },
      { text: "I use them as a break from deep thinking, just knocking out tickets while listening to music.", scores: { software_engineer: 3, backend: 1 } },
      { text: "I write scripts or build small AI models to handle them, turning boring tasks into an interesting project.", scores: { ai_engineer: 3, data_analyst: 2 } }
    ]
  },
  {
    id: 3,
    text: "When working in a team, what role do you naturally fall into? (Belbin Plant & Resource Investigator)",
    options: [
      { text: "The visionary. I come up with the big ideas and architecture, then let others figure out the details.", scores: { architect: 3, tech_lead: 2 } },
      { text: "The networker. I find out what other teams are doing and bring back resources or APIs we can use.", scores: { pm: 2, other: 2 } },
      { text: "The technical expert. I go deep into a specific domain and people come to me for specialized answers.", scores: { ai_engineer: 2, data_analyst: 2, backend: 2 } },
      { text: "The problem-solver. I jump between different parts of the stack wherever there's a fire.", scores: { devops: 3, software_engineer: 2 } }
    ]
  },
  {
    id: 4,
    text: "How do you experience 'hyper-focus' (an ADHD trait)?",
    options: [
      { text: "Tuning complex systems, pipelines, or infrastructure until they run perfectly.", scores: { devops: 3, architect: 1 } },
      { text: "Writing complex algorithms, training models, or analyzing massive datasets.", scores: { ai_engineer: 3, data_analyst: 3 } },
      { text: "Mapping out the entire architecture of a new application on a whiteboard or diagram.", scores: { architect: 3, tech_lead: 1 } },
      { text: "Building out a specific, complex backend feature from start to finish.", scores: { backend: 3, software_engineer: 2 } }
    ]
  },
  {
    id: 5,
    text: "As an INTJ, you value efficiency and competence. What frustrates you the most in a work environment?",
    options: [
      { text: "A poorly designed system architecture that is fundamentally flawed.", scores: { architect: 3, backend: 2 } },
      { text: "Manual, inefficient processes that could be automated in five minutes.", scores: { devops: 3, data_analyst: 1 } },
      { text: "Meetings without agendas and people who don't follow the plan.", scores: { pm: 3, tech_lead: 2 } },
      { text: "Having to write boilerplate code instead of solving actual logic problems.", scores: { ai_engineer: 2, backend: 2 } }
    ]
  },
  {
    id: 6,
    text: "When exploring a new opportunity (Resource Investigator trait), what do you look for?",
    options: [
      { text: "New cloud services, deployment tools, or infrastructure paradigms.", scores: { devops: 3, architect: 2 } },
      { text: "New frameworks, libraries, or APIs that make building features faster.", scores: { software_engineer: 3, backend: 2 } },
      { text: "New ways to organize the team or project methodologies to increase velocity.", scores: { pm: 3, tech_lead: 3 } },
      { text: "Cutting-edge research papers, new AI models, or novel data science techniques.", scores: { ai_engineer: 3, data_analyst: 2 } }
    ]
  },
  {
    id: 7,
    text: "How do you prefer to structure your code or projects?",
    options: [
      { text: "Highly modular, perfectly abstracted, with a clear separation of concerns.", scores: { architect: 3, backend: 2 } },
      { text: "As declarative as possible. Infrastructure as code, configuration over script.", scores: { devops: 3, architect: 1 } },
      { text: "Pragmatic and clean. It just needs to work well and be easy for others to read.", scores: { software_engineer: 3, tech_lead: 1 } },
      { text: "Data-driven. The structure should flow logically around how data is processed.", scores: { data_analyst: 3, ai_engineer: 2 } }
    ]
  },
  {
    id: 8,
    text: "What type of technical debt bothers you the most?",
    options: [
      { text: "Architectural debt. Tightly coupled services and monolithic tangles.", scores: { architect: 3, tech_lead: 1 } },
      { text: "Operational debt. Flaky CI/CD pipelines and manual deployment steps.", scores: { devops: 3, backend: 1 } },
      { text: "Knowledge debt. When only one person understands how a crucial system works.", scores: { tech_lead: 3, pm: 2 } },
      { text: "Algorithmic debt. Inefficient queries, unoptimized data models, or slow processing.", scores: { data_analyst: 2, backend: 2, ai_engineer: 2 } }
    ]
  },
  {
    id: 9,
    text: "How do you deal with shifting project requirements (a common challenge for INTJs)?",
    options: [
      { text: "I try to design systems so abstractly that they can handle any requirement change.", scores: { architect: 3, ai_engineer: 1 } },
      { text: "I build robust pipelines so we can deploy changes instantly without fear.", scores: { devops: 3, software_engineer: 1 } },
      { text: "I push back and demand clear scope definition and impact analysis.", scores: { pm: 3, tech_lead: 2 } },
      { text: "I focus on the core logic, isolating the volatile business rules to a single module.", scores: { backend: 3, software_engineer: 2 } }
    ]
  },
  {
    id: 10,
    text: "Which sounds like the most fun 'weekend project'?",
    options: [
      { text: "Designing a microservices framework or a custom state management library.", scores: { architect: 3, backend: 2 } },
      { text: "Setting up a home lab with Kubernetes, Docker, and automated home routines.", scores: { devops: 3, other: 1 } },
      { text: "Training a custom LLM on your own notes or building a predictive data dashboard.", scores: { ai_engineer: 3, data_analyst: 3 } },
      { text: "Building a full-stack app to solve a specific personal problem, end-to-end.", scores: { software_engineer: 3, other: 2 } }
    ]
  },
  {
    id: 11,
    text: "When someone says 'the system is slow', what is your first instinct?",
    options: [
      { text: "Check the overall architecture and look for systemic bottlenecks.", scores: { architect: 3, tech_lead: 1 } },
      { text: "Check server metrics, network latency, and database connection pools.", scores: { devops: 3, backend: 1 } },
      { text: "Write a script to analyze logs and identify the slowest running queries or functions.", scores: { data_analyst: 3, backend: 2 } },
      { text: "Organize a task force to investigate the issue methodically.", scores: { pm: 3, tech_lead: 2 } }
    ]
  },
  {
    id: 12,
    text: "Your 'Plant' (PT) score is very high (23), meaning you are a creative problem solver. Where do you apply this creativity?",
    options: [
      { text: "Inventing entirely new ways to structure code or connect systems.", scores: { architect: 3, other: 2 } },
      { text: "Finding clever hacks to bypass infrastructure limitations or automate the impossible.", scores: { devops: 3, backend: 1 } },
      { text: "Developing novel algorithms or applying math in unique ways.", scores: { ai_engineer: 3, data_analyst: 2 } },
      { text: "Finding creative ways to motivate a team and align their strengths to a complex project.", scores: { tech_lead: 3, pm: 2 } }
    ]
  },
  {
    id: 13,
    text: "Your 'Resource Investigator' (RI) score is moderate (10). How do you use external resources?",
    options: [
      { text: "I read whitepapers and blogs to find architectural patterns used by big tech companies.", scores: { architect: 3, backend: 1 } },
      { text: "I constantly evaluate new SaaS tools and open-source projects to improve our tooling.", scores: { devops: 3, tech_lead: 1 } },
      { text: "I network with stakeholders to ensure our technical direction aligns with business goals.", scores: { pm: 3, tech_lead: 2 } },
      { text: "I search GitHub and research datasets to find models or data I can leverage.", scores: { ai_engineer: 3, data_analyst: 2 } }
    ]
  },
  {
    id: 14,
    text: "How do you prefer to communicate technical concepts?",
    options: [
      { text: "High-level diagrams and system models (UML, flowcharts).", scores: { architect: 3, pm: 1 } },
      { text: "Detailed API documentation, schemas, and data flow diagrams.", scores: { backend: 3, data_analyst: 2 } },
      { text: "Dashboard metrics, graphs, and visualizations showing performance or trends.", scores: { data_analyst: 3, devops: 2 } },
      { text: "Strategic roadmaps and clear, concise bullet points for action items.", scores: { pm: 3, tech_lead: 3 } }
    ]
  },
  {
    id: 15,
    text: "What gives you the greatest sense of accomplishment?",
    options: [
      { text: "Seeing a massive, complex system I designed run smoothly under heavy load.", scores: { architect: 3, devops: 2 } },
      { text: "Deleting thousands of lines of legacy code and replacing it with a clean, efficient module.", scores: { backend: 3, software_engineer: 3 } },
      { text: "Delivering a project on time that completely changes how the business operates.", scores: { pm: 3, tech_lead: 2 } },
      { text: "Discovering an insight in the data or an AI breakthrough that no one else saw.", scores: { ai_engineer: 3, data_analyst: 3 } }
    ]
  },
  {
    id: 16,
    text: "How do you handle 'context switching' (often difficult for INTJ/ADHD)?",
    options: [
      { text: "I hate it. I need long blocks of uninterrupted time to design or code.", scores: { architect: 3, backend: 2, ai_engineer: 2 } },
      { text: "I automate as much as possible so I'm not interrupted by operational emergencies.", scores: { devops: 3, tech_lead: 1 } },
      { text: "I structure my day rigidly, with specific times for specific types of tasks.", scores: { pm: 3, data_analyst: 1 } },
      { text: "I actually thrive on a bit of chaos and use it to jump between interesting problems.", scores: { software_engineer: 2, other: 3 } }
    ]
  },
  {
    id: 17,
    text: "What is your stance on writing tests?",
    options: [
      { text: "Crucial for system integrity. I prefer testing at the integration and contract level.", scores: { architect: 3, backend: 2 } },
      { text: "Tests should be completely automated in the CI/CD pipeline, and they must be fast.", scores: { devops: 3, software_engineer: 1 } },
      { text: "Necessary, but testing complex logic or models often requires creative, statistical approaches.", scores: { ai_engineer: 3, data_analyst: 2 } },
      { text: "I write pragmatic unit tests for edge cases, but rely on code reviews for architecture.", scores: { tech_lead: 3, software_engineer: 2 } }
    ]
  },
  {
    id: 18,
    text: "When managing your ADHD in a professional setting, what tool or strategy do you rely on most?",
    options: [
      { text: "Creating massive 'mind maps' or architecture documents to dump all my ideas.", scores: { architect: 3, tech_lead: 1 } },
      { text: "Using scripts and automated reminders to manage my environment and tasks.", scores: { devops: 3, other: 2 } },
      { text: "Strict kanban boards and project management tools to force structure.", scores: { pm: 3, backend: 1 } },
      { text: "Working in intensive 'sprints' of hyper-focus, then taking time to recharge.", scores: { software_engineer: 3, ai_engineer: 2 } }
    ]
  },
  {
    id: 19,
    text: "Which of these best describes your approach to learning new tech?",
    options: [
      { text: "I learn the underlying theory and design patterns first before writing code.", scores: { architect: 3, ai_engineer: 2 } },
      { text: "I set up the environment, deploy a hello-world, and then tear it apart to see how it works.", scores: { devops: 3, software_engineer: 2 } },
      { text: "I read the documentation to understand the API surface, then build a small feature.", scores: { backend: 3, software_engineer: 2 } },
      { text: "I look at practical use-cases and evaluate if it's worth the team's time to adopt.", scores: { pm: 2, tech_lead: 3 } }
    ]
  },
  {
    id: 20,
    text: "Ultimately, what legacy do you want to leave in a company?",
    options: [
      { text: "The foundational architecture that powers their core products for years.", scores: { architect: 3, backend: 1 } },
      { text: "The automated infrastructure that makes developers' lives infinitely easier.", scores: { devops: 3, tech_lead: 1 } },
      { text: "The highly capable team I built and the efficient processes I put in place.", scores: { tech_lead: 3, pm: 3 } },
      { text: "The intelligence or data pipelines that provided a massive competitive advantage.", scores: { ai_engineer: 3, data_analyst: 3 } }
    ]
  }
];
