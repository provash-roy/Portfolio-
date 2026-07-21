"use client";

import {
  BrainCircuit,
  Cloud,
  Database,
  GitBranch,
  LayoutPanelTop,
  ServerCog,
} from "lucide-react";

import {
  aiSkills,
  backendSkills,
  cloudSkills,
  databaseSkills,
  devopsSkills,
  frontendSkills,
} from "@/constants/skills";

import { Skill } from "@/constants/skills";
import SkillCard from "./skill-card";

export default function SkillSection() {
  return (
    <section id="skills" className="bg-white dark:bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-cyan-500 font-semibold uppercase tracking-[0.35em] text-sm">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Technologies I build with.
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 text-lg">
            A collection of technologies and tools I use to build scalable web
            applications, AI-powered systems, and production-ready software
            solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SkillCard
            title="Frontend"
            icon={LayoutPanelTop}
            skills={frontendSkills}
          />

          <SkillCard title="Backend" icon={ServerCog} skills={backendSkills} />

          <SkillCard title="Database" icon={Database} skills={databaseSkills} />

          <SkillCard title="AI / GenAI" icon={BrainCircuit} skills={aiSkills} />

          <SkillCard title="Cloud Storage" icon={Cloud} skills={cloudSkills} />

          <SkillCard
            title="DevOps & Tools"
            icon={GitBranch}
            skills={devopsSkills as Skill[]}
          />
        </div>
      </div>
    </section>
  );
}
