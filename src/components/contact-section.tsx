import React from "react";
import Container from "./container";
import { Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-50 dark:bg-[#090a0f] px-12 py-24">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-6">
          <p className="text-cyan-500 font-semibold uppercase tracking-[0.35em] text-sm">
            Contact
          </p>
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Let’s make your next idea happen.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 leading-8 text-lg">
            I’m available for freelance contracts, full-time roles, and product
            partnerships. Send a note with your project details and I’ll reply
            quickly with next steps.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/75">
              <div className="flex items-center gap-3 text-cyan-500">
                <Mail size={20} />
                <span className="font-semibold">Email</span>
              </div>
              <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                hello@provash.dev
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/75">
              <div className="flex items-center gap-3 text-cyan-500">
                <MapPin size={20} />
                <span className="font-semibold">Location</span>
              </div>
              <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                Remote — Available worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950/80">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Start a conversation
          </p>
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500">Project type</p>
              <p className="mt-2 font-semibold text-zinc-950 dark:text-zinc-100">
                Web App, SaaS, or Marketing Site
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500">Timeline</p>
              <p className="mt-2 font-semibold text-zinc-950 dark:text-zinc-100">
                2–6 weeks for MVP and launch-ready delivery
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500">Process</p>
              <p className="mt-2 font-semibold text-zinc-950 dark:text-zinc-100">
                Discovery, design, development, and launch support
              </p>
            </div>
          </div>
          <Button
            asChild
            className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            <Link href="mailto:hello@provash.dev">Email Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
