import React from "react";
import Container from "./container";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-zinc-50 dark:bg-[#090a0f] px-16 py-24">
      <Container>
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <p className="text-cyan-500 font-semibold uppercase tracking-[0.35em]">
              About Me
            </p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">
              I build meaningful digital experiences that accelerate growth.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-8 text-lg">
              I’m a full-stack developer with a passion for building scalable
              web applications, elegant interfaces, and strong backend systems.
              I collaborate with product teams to transform complex ideas into
              reliable products that users love.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Experience
                </p>
                <p className="mt-4 text-3xl font-semibold">5+ years</p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Delivering product-grade web apps.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Focus
                </p>
                <p className="mt-4 text-3xl font-semibold">Performance</p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Fast, accessible, and maintainable solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950/80">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              What I bring
            </p>
            <ul className="mt-8 space-y-4 text-zinc-600 dark:text-zinc-300">
              <li className="flex gap-3 items-start">
                <Sparkles className="mt-1 h-5 w-5 text-cyan-500" />
                <span>
                  High-impact interfaces with polished UI and clean
                  interactions.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Sparkles className="mt-1 h-5 w-5 text-cyan-500" />
                <span>
                  Solid architecture and API design for fast product iterations.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Sparkles className="mt-1 h-5 w-5 text-cyan-500" />
                <span>
                  Responsive builds with accessibility and SEO best practices.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
