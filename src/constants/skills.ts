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
  Cloud,
  Container,
  UploadCloud,
  Terminal,
  Layers,
} from "lucide-react";
import type { ElementType } from "react";
import { FaGithub } from "react-icons/fa";
// ================= TOP SKILLS =================
export type Skill = {
  id: string;
  name: string;
  icon: ElementType;
};

export type SkillCategory = {
  title: string;
  icon: ElementType;
  skills: Skill[];
};
// ================= FRONTEND =================

export const frontendSkills = [
  { id: "react", name: "React.js", icon: Atom },
  { id: "nextjs", name: "Next.js", icon: Globe },
  { id: "typescript", name: "TypeScript", icon: Braces },
  { id: "zustand", name: "Zustand", icon: Layers },
  { id: "html", name: "HTML5", icon: Code2 },
  { id: "css", name: "CSS3", icon: Palette },
  { id: "tailwind", name: "Tailwind CSS", icon: Wind },
  { id: "shadcn", name: "Shadcn UI", icon: Braces },
];

// ================= BACKEND =================

export const backendSkills = [
  { id: "node", name: "Node.js", icon: ServerCog },
  { id: "express", name: "Express.js", icon: Code2 },
  { id: "prisma", name: "Prisma ORM", icon: DatabaseZap },
  { id: "mongoose", name: "Mongoose", icon: Database },
  { id: "rest", name: "REST API", icon: Workflow },
  { id: "trpc", name: "tRPC", icon: Network },

  { id: "clerk", name: "Clerk Auth", icon: ShieldCheck },
  { id: "authjs", name: "Auth.js", icon: ShieldCheck },
];

// ================= DATABASE =================

export const databaseSkills = [
  { id: "mongodb", name: "MongoDB", icon: Database },
  { id: "postgresql", name: "PostgreSQL", icon: Database },

  { id: "redis", name: "Redis", icon: LayoutPanelTop },
  { id: "pinecone", name: "Pinecone", icon: DatabaseZap },
  { id: "qdrant", name: "Qdrant", icon: ShieldCheck },
];

// ================= AI ENGINEERING =================

export const aiSkills = [
  {
    id: "langchain",
    name: "LangChain",
    icon: BrainCircuit,
  },
  {
    id: "langgraph",
    name: "LangGraph",
    icon: Network,
  },
  {
    id: "rag",
    name: "RAG",
    icon: Sparkles,
  },
  {
    id: "agents",
    name: "AI Agents",
    icon: Bot,
  },

  {
    id: "mcp",
    name: "Model Context Protocol",
    icon: Workflow,
  },
  {
    id: "openai",
    name: "OpenAI API",
    icon: Bot,
  },
];

// ================= CLOUD STORAGE =================

export const cloudSkills = [
  {
    id: "cloudinary",
    name: "Cloudinary",
    icon: Cloud,
  },
  {
    id: "uploadthing",
    name: "UploadThing",
    icon: UploadCloud,
  },
  {
    id: "s3",
    name: "AWS S3",
    icon: Cloud,
  },
  {
    id: "r2",
    name: "Cloudflare R2",
    icon: Cloud,
  },
];

// ================= DEVOPS & TOOLS =================

export const devopsSkills = [
  {
    id: "git",
    name: "Git",
    icon: GitBranch,
  },
  {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
  },
  {
    id: "docker",
    name: "Docker",
    icon: Container,
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: Globe,
  },
  {
    id: "terminal",
    name: "Linux Terminal",
    icon: Terminal,
  },
];
