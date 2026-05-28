import React from "react";
import Container from "./container";
import { projects } from "@/constants/projects";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-zinc-50 dark:bg-[#090a0f] px-12 py-24">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-cyan-500 font-semibold uppercase tracking-[0.35em] text-sm">
              Projects
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Selected work with real business value.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-zinc-200 bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/80"
              >
                <div className="mb-5 flex items-center gap-3 text-cyan-500">
                  <Briefcase size={20} />
                  <span className="uppercase tracking-[0.25em] text-xs font-semibold">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
                  {project.description}
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {project.tech}
                </p>
                <Button
                  variant="link"
                  asChild
                  className="mt-8 inline-flex items-center gap-2 text-cyan-500 font-medium hover:text-cyan-400"
                >
                  <Link href={project.link}>
                    Learn more
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );

}
