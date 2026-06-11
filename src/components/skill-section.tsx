"use client";

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
  Box,
  Bug,
  Activity,
  Terminal,
  Laptop,
  Smartphone,
  Lightbulb,
  Coffee,
  //   Figma,
} from "lucide-react";

import Container from "./container";
import SkillCard from "./skill-card";

// ================= FRONTEND =================
const frontendSkills = [
  { id: "react", name: "React", icon: Atom },
  { id: "nextjs", name: "Next.js", icon: Globe },
  { id: "html", name: "HTML", icon: Code2 },
  { id: "css", name: "CSS", icon: Palette },
  { id: "tailwind", name: "Tailwind CSS", icon: Wind },
  { id: "typescript", name: "TypeScript", icon: Braces },
  { id: "uiux", name: "UI/UX Basics", icon: LayoutPanelTop },
];

// ================= BACKEND =================
const backendSkills = [
  { id: "node", name: "Node.js", icon: ServerCog },
  { id: "express", name: "Express.js", icon: Code2 },
  { id: "jwt", name: "JWT Authentication", icon: ShieldCheck },
  { id: "git", name: "Git & GitHub", icon: GitBranch },
];

// ================= DATABASE =================
const databaseSkills = [
  { id: "mongo", name: "MongoDB", icon: Database },
  { id: "mysql", name: "MySQL", icon: Database },
  { id: "prisma", name: "Prisma ORM", icon: LayoutPanelTop },
  { id: "firebase", name: "Firebase", icon: Database },
];

// ================= DEVOPS / TESTING =================
const devopsSkills = [
  { id: "cloud", name: "Cloud Basics", icon: Cloud },
  { id: "docker", name: "Docker Basics", icon: Box },
  { id: "ci", name: "CI/CD", icon: GitBranch },
  { id: "testing", name: "API Testing", icon: Bug },
  { id: "monitoring", name: "Monitoring", icon: Activity },
];

// ================= AI / ML =================
const aiSkills = [
  { id: "langchain", name: "LangChain", icon: BrainCircuit },
  { id: "langgraph", name: "LangGraph", icon: Network },
  { id: "vectordb", name: "Vector DB", icon: DatabaseZap },
  { id: "n8n", name: "n8n Automation", icon: Workflow },
  { id: "rag", name: "RAG Systems", icon: Sparkles },
  { id: "openai", name: "OpenAI API", icon: Bot },
];

// ================= OTHERS =================
const otherSkills = [
  { id: "terminal", name: "Terminal", icon: Terminal },
  //   { id: "figma", name: "Figma", icon: Figma },
  { id: "laptop", name: "System Design Basics", icon: Laptop },
  { id: "mobile", name: "Mobile Responsive Design", icon: Smartphone },
  { id: "idea", name: "Problem Solving", icon: Lightbulb },
  { id: "coffee", name: "Debugging Mindset", icon: Coffee },
];

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto min-h-screen bg-white dark:bg-[#020817]  py-20 px-12 "
    >
      <Container>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 text-center">
            <p className="text-cyan-500 font-semibold uppercase tracking-[0.35em] text-sm">
              Skills
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Core technologies I use every day.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
          <SkillCard
            title="Frontend"
            icon={LayoutPanelTop}
            skills={frontendSkills}
          />
          <SkillCard title="Backend" icon={ServerCog} skills={backendSkills} />
          <SkillCard title="Database" icon={Database} skills={databaseSkills} />
          <SkillCard title="AI / GenAI" icon={BrainCircuit} skills={aiSkills} />
          <SkillCard title="DevOps" icon={Cloud} skills={devopsSkills} />
          <SkillCard title="Other" icon={Terminal} skills={otherSkills} />
        </div>
      </Container>
    </section>
  );
}
