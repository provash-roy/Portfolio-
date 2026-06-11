import {
  Database,
  LayoutPanelTop,
  ServerCog,
  Code2,
  Palette,
  Wind,
  Braces,
  Atom,
  GitBranch,
  ShieldCheck,
  Globe,
  BrainCircuit,
  Network,
  Workflow,
  DatabaseZap,
  Bot,
  Sparkles,
} from "lucide-react";

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Prisma",
  "GraphQL",
  "REST APIs",
  "PostgreSQL",
  "Vercel",
];

// ================= FRONTEND =================
export const frontendSkills = [
  { id: "react", name: "React", icon: Atom },
  { id: "nextjs", name: "Next.js", icon: Globe },
  { id: "html", name: "HTML", icon: Code2 },
  { id: "css", name: "CSS", icon: Palette },
  { id: "tailwind", name: "Tailwind", icon: Wind },
  { id: "ts", name: "TypeScript", icon: Braces },
];

// ================= BACKEND =================
export const backendSkills = [
  { id: "node", name: "Node.js", icon: ServerCog },
  { id: "express", name: "Express", icon: Code2 },
  { id: "jwt", name: "JWT", icon: ShieldCheck },
  { id: "git", name: "Git", icon: GitBranch },
  { id: "giit", name: "Git", icon: GitBranch },
  { id: "giiit", name: "Git", icon: GitBranch },
];

// ================= DATABASE =================
export const databaseSkills = [
  { id: "mongo", name: "MongoDB", icon: Database },
  { id: "mysql", name: "MySQL", icon: Database },
  { id: "prisma", name: "Prisma", icon: LayoutPanelTop },
  { id: "firebase", name: "Firebase", icon: Database },
];

// ================= AI =================
export const aiSkills = [
  {
    id: "langchain",
    name: "LangChain",
    icon: BrainCircuit,
  },
  { id: "langgraph", name: "LangGraph", icon: Network },
  {
    id: "vectordb",
    name: "Vector DB",
    icon: DatabaseZap,
  },
  { id: "n8n", name: "n8n", icon: Workflow },
  { id: "rag", name: "RAG", icon: Sparkles },
  { id: "openai", name: "OpenAI", icon: Bot },
];
