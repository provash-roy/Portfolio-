"use client";

import React from "react";

type Skill = {
  id: string;
  name: string;
  icon: any;
  x: string;
  y: string;
};

type Props = {
  title: string;
  icon: any;
  centerRef: React.RefObject<HTMLDivElement | null>;
  skills: Skill[];
};

export default function Card({ title, icon: Icon, centerRef, skills }: Props) {
  return (
    <div className="relative w-full max-w-[380px] h-[520px] rounded-[40px] border border-cyan-500/30 bg-white/70 dark:bg-cyan-950/10 backdrop-blur-xl overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />

      {/* center node */}
      <div
        ref={centerRef}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-40 h-40 rounded-full border-4 border-cyan-500 bg-white dark:bg-[#06141d] flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
          <Icon className="w-10 h-10 text-cyan-500 mb-2" />

          <h2 className="text-2xl font-black text-cyan-500 text-center">
            {title}
          </h2>
        </div>
      </div>

      {/* skill nodes */}
      {skills.map((s) => {
        const I = s.icon;

        return (
          <div
            key={s.id}
            id={s.id}
            style={{
              left: s.x,
              top: s.y,
            }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-white dark:bg-[#071a24] shadow-md hover:scale-110 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2">
                <I className="w-4 h-4 text-cyan-500" />

                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  {s.name}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
