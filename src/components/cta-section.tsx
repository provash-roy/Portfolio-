import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-cyan-500/10 via-white to-zinc-50 dark:from-cyan-500/20 dark:via-zinc-950 dark:to-zinc-950">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-500/20 bg-white/80 p-10 shadow-xl backdrop-blur-xl dark:bg-zinc-950/80">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
              <Sparkles className="h-4 w-4" />
              Ready to build something great?
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&apos;s turn your idea into a polished product.
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              I&apos;m available for freelance projects, full-time
              opportunities, and product collaborations that need thoughtful
              design and reliable engineering.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="rounded-full bg-cyan-500 px-6 py-5 text-base font-semibold text-black hover:bg-cyan-400"
            >
              <Link href="#contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-cyan-500/30 px-6 py-5 text-base font-semibold text-cyan-600 hover:bg-cyan-500/10 dark:text-cyan-400"
            >
              <Link href="mailto:provashray94@gmail.com">Email Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
