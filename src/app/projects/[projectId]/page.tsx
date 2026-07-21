import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Rocket,
  Cpu,
  Target,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";

export default async function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = await params;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Container>
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Project Not Found
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            The project you are looking for does not exist.
          </p>
          <Button variant="outline" className="mt-6" asChild>
            <Link href="#projects">
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </Button>
        </div>
      </Container>
    );
  }

  const techStack = project.tech.split(" · ");

  return (
    <Container>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-12>
        ">
          {/* HERO */}
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-10 shadow-2xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-cyan-400">
                  <Briefcase size={16} />
                  Project Case Study
                </span>

                <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-white">
                  {project.title}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link href="/#projects">
                    <ArrowLeft size={16} />
                    Back
                  </Link>
                </Button>

                <Button asChild>
                  <Link href={project.live}>
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                </Button>

                <Button variant="secondary" asChild>
                  <Link href={project.github}>
                    <FaGithub size={16} />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
            {/* LEFT */}
            <div className="space-y-8">
              {/* OVERVIEW */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <h2 className="text-2xl font-bold text-white">
                  Project Overview
                </h2>

                <p className="mt-4 leading-8 text-zinc-300">
                  {project.description}
                </p>
              </div>

              {/* PROBLEM */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <h2 className="text-2xl font-bold text-white">
                  Problem Statement
                </h2>

                <p className="mt-4 leading-8 text-zinc-300">
                  {project.problem}
                </p>
              </div>

              {/* GOALS */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <div className="flex items-center gap-3">
                  <Target className="text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Goals & Objectives
                  </h2>
                </div>

                <ul className="mt-6 space-y-4">
                  {project.goals.map((goal: string) => (
                    <li key={goal} className="flex gap-3 text-zinc-300">
                      <ShieldCheck size={18} className="mt-1 text-cyan-400" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FEATURES */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <h2 className="text-2xl font-bold text-white">Key Features</h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.features.map((feature: string) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
                    >
                      <p className="text-zinc-200">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* HIGHLIGHTS */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Project Highlights
                  </h2>
                </div>

                <ul className="mt-6 space-y-4">
                  {project.highlights.map((item: string) => (
                    <li key={item} className="flex gap-3 text-zinc-300">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARCHITECTURE */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <div className="flex items-center gap-3">
                  <Cpu className="text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Architecture
                  </h2>
                </div>

                <ul className="mt-6 space-y-3">
                  {project.architecture.map((item: string) => (
                    <li key={item} className="text-zinc-300">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* PERFORMANCE */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <div className="flex items-center gap-3">
                  <Rocket className="text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Performance Optimizations
                  </h2>
                </div>

                <ul className="mt-6 space-y-3">
                  {project.performance.map((item: string) => (
                    <li key={item} className="text-zinc-300">
                      ⚡ {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECURITY */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <h2 className="text-2xl font-bold text-white">
                  Security Measures
                </h2>

                <ul className="mt-6 space-y-3">
                  {project.security.map((item: string) => (
                    <li key={item} className="text-zinc-300">
                      🔒 {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CHALLENGE */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <h2 className="text-2xl font-bold text-white">Challenge</h2>

                <p className="mt-4 leading-8 text-zinc-300">
                  {project.challenge}
                </p>
              </div>

              {/* LEARNING */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <h2 className="text-2xl font-bold text-white">
                  Lessons Learned
                </h2>

                <p className="mt-4 leading-8 text-zinc-300">
                  {project.learning}
                </p>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-6">
              <div className="sticky top-24 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <h3 className="text-2xl font-bold text-white">Project Info</h3>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Status
                    </p>

                    <p className="mt-2 text-white">Production Ready</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Type
                    </p>

                    <p className="mt-2 text-white">SaaS Platform</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Stack
                    </p>

                    <p className="mt-2 text-white">{project.tech}</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Role
                    </p>

                    <p className="mt-2 text-white">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Container>
  );
}
