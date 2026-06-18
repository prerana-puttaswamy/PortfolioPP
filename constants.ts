import { Code2, Server, Cloud, Database, BrainCircuit, Wrench, Layout } from 'lucide-react';
import { Project, Experience, SkillCategory } from './types';

export const EXPERIENCE: Experience[] = [
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineering Intern",
    duration: "2022 – 2023",
    location: "Bangalore, India",
    bullets: [
      "Designed RESTful APIs supporting enterprise platforms and increasing data retrieval speed by 15%.",
      "Improved service reliability through deep debugging and optimization of legacy codebases.",
      "Implemented structured logging and monitoring to reduce incident response time.",
      "Collaborated on code reviews and CI/CD deployment pipelines."
    ],
    tech: ["Python", "REST APIs", "Microservices", "Logging"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "kubegpt",
    title: "KubeGPT Dashboard",
    shortDescription: "Hybrid rule-based + LLM Kubernetes troubleshooting dashboard",
    fullDescription: "KubeGPT Dashboard is a local-first debugging assistant for Kubernetes pod failures. It collects diagnostics via kubectl, runs them through deterministic rule-based heuristics for common failure patterns, and falls back to a local LLM via Ollama for less common cases, turning raw cluster errors into structured, explainable root-cause analysis.",
    tech: ["Python", "FastAPI", "Kubernetes", "Ollama", "kubectl"],
    gradient: "from-cyan-500 to-blue-600",
    githubUrl: "https://github.com/prerana-puttaswamy/kubegpt-dashboard",
    features: [
      "Hybrid diagnosis pipeline: rule-based heuristics first, local LLM fallback via Ollama",
      "Structured output with issue, root cause, evidence, and recommended fix",
      "Detects common failure patterns: ImagePullBackOff, CrashLoopBackOff, probe failures",
      "Interactive dashboard built with FastAPI and HTML/CSS/JS"
    ],
    approach: "Built a collector that pulls kubectl describe/logs output, runs it through a rule-based analyzer for known failure signatures, and falls back to a locally-hosted LLM via Ollama when no rule matches, extending the troubleshooting-assistant pattern from my work on BUDHA at HPE.",
    impact: "Working end-to-end prototype covering the most common pod failure modes, giving me a concrete AI/LLM project that extends my real-world Kubernetes tooling experience."
  },
  {
    id: "budha",
    title: "BUDHA - Kubernetes Assistant",
    shortDescription: "Natural language interface for K8s diagnostics",
    fullDescription: "BUDHA is a conversational AI assistant designed to simplify Kubernetes cluster management. It allows DevOps engineers to query cluster health, pod status, and logs using natural language, abstracting complex kubectl commands.",
    tech: ["Python", "Flask", "Kubernetes", "REST APIs"],
    gradient: "from-blue-600 to-purple-600",
    features: [
      "Natural Language Processing for command interpretation",
      "Real-time cluster health monitoring",
      "Automated log analysis and error detection",
      "Role-based access control integration"
    ],
    approach: "Built a middleware service that translates NLP intents into Kubernetes API calls using a custom-trained model.",
    impact: "Reduced diagnostic time for common cluster issues by 40%."
  },
  {
    id: "streammind",
    title: "StreamMind AI",
    shortDescription: "Real-time event intelligence platform",
    fullDescription: "StreamMind AI is a full-stack, real-time event monitoring system that processes events asynchronously, detects anomalies, and streams live updates to a dashboard over WebSockets. It models patterns used in production event-driven architectures: queued background processing, pub/sub propagation, and instant UI sync.",
    tech: ["FastAPI", "Redis", "Celery", "Next.js", "WebSockets", "Docker"],
    gradient: "from-violet-500 to-pink-500",
    githubUrl: "https://github.com/prerana-puttaswamy/streammind-ai",
    features: [
      "Asynchronous event processing with Celery workers",
      "Real-time updates via Redis Pub/Sub and a FastAPI WebSocket endpoint",
      "Analytics dashboard with live failure-rate calculation and anomaly detection",
      "JWT authentication with bcrypt password hashing",
      "Fully Dockerized: independent services for frontend, backend, worker, and Redis"
    ],
    approach: "Built an event pipeline where incoming events are queued and processed by Celery workers, which write to the database and publish to a Redis channel; FastAPI listens on that channel and broadcasts updates to the Next.js frontend over WebSockets."
  },
  {
    id: "sign-language",
    title: "Sign Language Interpreter",
    shortDescription: "Real-time CNN-based sign language recognition",
    fullDescription: "An accessibility tool that translates American Sign Language (ASL) gestures into text and speech in real-time using computer vision. Optimized for edge deployment.",
    tech: ["Python", "PyTorch", "OpenCV", "MediaPipe"],
    gradient: "from-green-500 to-teal-500",
    features: [
      "Real-time hand tracking and landmark detection",
      "Support for static alphabet and dynamic words",
      "GPU acceleration for low latency",
      "Text-to-speech output"
    ],
    approach: "Fine-tuned a CNN on the ASL Alphabet dataset, preprocessing frames with MediaPipe for hand isolation.",
    impact: "Achieved 94% accuracy on test datasets with sub-100ms latency. Published as peer-reviewed research (IARJSET, Vol. 11, 2024)."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "C++", "SQL", "TypeScript"]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Flask", "FastAPI", "Spring Boot", "REST", "GraphQL", "Celery", "WebSockets"]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Git", "CI/CD", "AWS"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB"]
  },
  {
    title: "ML & AI",
    icon: BrainCircuit,
    skills: ["PyTorch", "OpenCV", "MediaPipe", "Ollama", "NumPy", "Pandas"]
  },
  {
    title: "Tools & Concepts",
    icon: Wrench,
    skills: ["Distributed Systems", "Observability", "System Design", "Agile"]
  }
];