"use client";

import { LucideIcon } from "lucide-react";

type Skill = {
  id: string;
  name: string;
  icon: LucideIcon;
};

type Props = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

export default function SkillCard({ title, icon: CardIcon, skills }: Props) {
  return (
    <div className="relative w-full max-w-[380px] h-[300px] rounded-[2rem] border border-cyan-500/30 bg-white/70 dark:bg-cyan-950/10 backdrop-blur-xl overflow-hidden p-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl ">
          <CardIcon className="w-10 h-10 text-cyan-500" />
        </div>
        <h2 className="text-3xl font-bold text-cyan-500">{title}</h2>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const SkillIcon = skill.icon;

          return (
            <div
              key={skill.id}
              className="w-fit px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-white dark:bg-[#071a24] hover:scale-110 transition transform   inline-flex items-center justify-center gap-2"
            >
              <SkillIcon className="w-4 h-4 text-cyan-500" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
