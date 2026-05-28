"use client";

import React, { useEffect, useRef, useState } from "react";
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

import Card from "./card";

type Arrow = {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export default function SkillMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const frontendCenterRef = useRef<HTMLDivElement | null>(null);
  const backendCenterRef = useRef<HTMLDivElement | null>(null);
  const databaseCenterRef = useRef<HTMLDivElement | null>(null);
  const aiCenterRef = useRef<HTMLDivElement | null>(null);

  const [arrows, setArrows] = useState<Arrow[]>([]);

  // ================= FRONTEND =================
  const frontendSkills = [
    { id: "react", name: "React", icon: Atom, x: "18%", y: "18%" },
    { id: "nextjs", name: "Next.js", icon: Globe, x: "50%", y: "8%" },
    { id: "html", name: "HTML", icon: Code2, x: "82%", y: "18%" },
    { id: "css", name: "CSS", icon: Palette, x: "82%", y: "82%" },
    { id: "tailwind", name: "Tailwind", icon: Wind, x: "50%", y: "92%" },
    { id: "ts", name: "TypeScript", icon: Braces, x: "18%", y: "82%" },
  ];

  // ================= BACKEND =================
  const backendSkills = [
    { id: "node", name: "Node.js", icon: ServerCog, x: "20%", y: "22%" },
    { id: "express", name: "Express", icon: Code2, x: "80%", y: "22%" },
    { id: "jwt", name: "JWT", icon: ShieldCheck, x: "20%", y: "78%" },
    { id: "git", name: "Git", icon: GitBranch, x: "80%", y: "78%" },
    { id: "giit", name: "Git", icon: GitBranch, x: "80%", y: "78%" },
    { id: "giiit", name: "Git", icon: GitBranch, x: "80%", y: "78%" },
  ];

  // ================= DATABASE =================
  const databaseSkills = [
    { id: "mongo", name: "MongoDB", icon: Database, x: "22%", y: "22%" },
    { id: "mysql", name: "MySQL", icon: Database, x: "78%", y: "22%" },
    { id: "prisma", name: "Prisma", icon: LayoutPanelTop, x: "22%", y: "78%" },
    { id: "firebase", name: "Firebase", icon: Database, x: "78%", y: "78%" },
  ];

  // ================= AI =================
  const aiSkills = [
    {
      id: "langchain",
      name: "LangChain",
      icon: BrainCircuit,
      x: "20%",
      y: "20%",
    },
    { id: "langgraph", name: "LangGraph", icon: Network, x: "80%", y: "20%" },
    {
      id: "vectordb",
      name: "Vector DB",
      icon: DatabaseZap,
      x: "20%",
      y: "80%",
    },
    { id: "n8n", name: "n8n", icon: Workflow, x: "80%", y: "80%" },
    { id: "rag", name: "RAG", icon: Sparkles, x: "50%", y: "10%" },
    { id: "openai", name: "OpenAI", icon: Bot, x: "50%", y: "90%" },
  ];

  const createArrows = (
    skills: any[],
    centerRef: any,
    section: string,
  ): Arrow[] => {
    if (!containerRef.current || !centerRef.current) return [];

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();

    const cx = centerRect.left + centerRect.width / 2 - containerRect.left;
    const cy = centerRect.top + centerRect.height / 2 - containerRect.top;

    return skills
      .map((skill) => {
        const el = document.getElementById(skill.id);
        if (!el) return null;

        const rect = el.getBoundingClientRect();

        const tx = rect.left + rect.width / 2 - containerRect.left;
        const ty = rect.top + rect.height / 2 - containerRect.top;

        const angle = Math.atan2(ty - cy, tx - cx);

        return {
          id: `${section}-${skill.id}`,
          x1: cx + Math.cos(angle) * 45,
          y1: cy + Math.sin(angle) * 45,
          x2: tx - Math.cos(angle) * 45,
          y2: ty - Math.sin(angle) * 30,
        };
      })
      .filter((arrow): arrow is Arrow => arrow !== null);
  };

  const updateArrows = () => {
    setArrows([
      ...createArrows(frontendSkills, frontendCenterRef, "frontend"),
      ...createArrows(backendSkills, backendCenterRef, "backend"),
      ...createArrows(databaseSkills, databaseCenterRef, "database"),
      ...createArrows(aiSkills, aiCenterRef, "ai"),
    ]);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const Card = ({ title, icon: Icon, centerRef, skills }: any) => (
    <div className="relative w-full max-w-[380px] h-[520px] rounded-[40px] border border-cyan-500/30 bg-white/70 dark:bg-cyan-950/10 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />

      <div
        ref={centerRef}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-40 h-40 rounded-full border-4 border-cyan-500 bg-white dark:bg-[#06141d] flex flex-col items-center justify-center shadow-lg">
          <Icon className="w-10 h-10 text-cyan-500 mb-2" />
          <h2 className="text-2xl font-black text-cyan-500">{title}</h2>
        </div>
      </div>

      {skills.map((s: any) => {
        const I = s.icon;
        return (
          <div
            key={s.id}
            id={s.id}
            style={{ left: s.x, top: s.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-white dark:bg-[#071a24] hover:scale-110 transition">
              <div className="flex items-center gap-2">
                <I className="w-4 h-4 text-cyan-500" />
                <span className="text-sm text-zinc-800 dark:text-white">
                  {s.name}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-white dark:bg-[#020817] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-5xl font-black text-cyan-500">My Tech Universe</h1>
      </div>

      <div
        ref={containerRef}
        className="relative flex flex-wrap items-center justify-center gap-10"
      >
        {/* SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="7"
              markerHeight="7"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-cyan-500" />
            </marker>
          </defs>

          {arrows.map((a) => (
            <line
              key={a.id}
              x1={a.x1}
              y1={a.y1}
              x2={a.x2}
              y2={a.y2}
              stroke="#06b6d4"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
          ))}
        </svg>

        <Card
          title="Frontend"
          icon={LayoutPanelTop}
          centerRef={frontendCenterRef}
          skills={frontendSkills}
        />
        <Card
          title="Backend"
          icon={ServerCog}
          centerRef={backendCenterRef}
          skills={backendSkills}
        />
        <Card
          title="Database"
          icon={Database}
          centerRef={databaseCenterRef}
          skills={databaseSkills}
        />
        <Card
          title="AI / GenAI"
          icon={BrainCircuit}
          centerRef={aiCenterRef}
          skills={aiSkills}
        />
      </div>
    </section>
  );
}
