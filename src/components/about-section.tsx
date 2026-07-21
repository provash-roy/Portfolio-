import React from "react";
import Container from "./container";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-zinc-50 dark:bg-[#090a0f] px-6 py-24">
      <Container>
        <div className="max-w-7xl mx-auto px-12 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-cyan-500 font-semibold uppercase tracking-[0.35em]">
              About Me
            </p>

            <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
              Building scalable web applications with AI
            </h2>

            <p className="text-zinc-600 dark:text-zinc-300 leading-8 text-lg">
              I’m Provash Roy, a Full Stack Developer passionate about building modern, scalable,
              and user-focused applications. I specialize in JavaScript
              ecosystems, MERN stack development, Next.js, and backend
              engineering.
            </p>

            <p className="text-zinc-600 dark:text-zinc-300 leading-8 text-lg">
              Beyond web development, I’m exploring Artificial Intelligence,
              AI-powered applications, and intelligent systems to create
              software solutions that solve real-world problems. I enjoy
              designing clean architectures, building efficient APIs, and
              transforming ideas into production-ready products.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Expertise
                </p>

                <p className="mt-4 text-3xl font-semibold">Full Stack</p>

                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Modern web apps with scalable frontend and backend systems.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Passion
                </p>

                <p className="mt-4 text-3xl font-semibold">AI + Web</p>

                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Creating intelligent products with emerging technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950/80">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              What I Bring
            </p>

            <ul className="mt-8 space-y-5 text-zinc-600 dark:text-zinc-300">
              <li className="flex gap-3 items-start">
                <Sparkles className="mt-1 h-5 w-5 text-cyan-500 shrink-0" />

                <span>
                  Strong foundation in React, Next.js, Node.js, Express,
                  databases, and modern web development practices.
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <Sparkles className="mt-1 h-5 w-5 text-cyan-500 shrink-0" />

                <span>
                  Experience building REST APIs, authentication systems, payment
                  integrations, and production-ready applications.
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <Sparkles className="mt-1 h-5 w-5 text-cyan-500 shrink-0" />

                <span>
                  Curiosity for AI engineering, LLM applications, RAG systems,
                  and intelligent automation.
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <Sparkles className="mt-1 h-5 w-5 text-cyan-500 shrink-0" />

                <span>
                  Focused on writing clean, maintainable code and creating
                  meaningful user experiences.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
