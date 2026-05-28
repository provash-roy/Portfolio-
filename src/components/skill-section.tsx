import React from "react";
import Container from "./container";
import { skills } from "@/constants/skills";

export default function SkillSection() {
  return (
    <section id="skills" className="px-12 py-24">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-cyan-500 font-semibold uppercase tracking-[0.35em] text-sm">
              Skills
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Core technologies I use every day.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-3xl border border-zinc-200 bg-white/80 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/70"
              >
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
