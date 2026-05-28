import Link from "next/link";
import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <section className=" px-12 py-24">
      <div className="max-w-7xl mx-auto rounded-[2rem] bg-cyan-500/10 border border-cyan-200/40 p-10 text-center dark:border-cyan-400/20 dark:bg-cyan-500/10">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">
          Ready to build something great?
        </p>
        <h2 className="mt-4 text-4xl font-extrabold text-zinc-950 dark:text-zinc-100 sm:text-5xl">
          Let’s turn your next project into a polished product.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-700 dark:text-zinc-300 leading-8">
          If you need a growth-minded partner for product development, design
          handoff, or launch-ready web applications, I’d love to help.
        </p>
        <Button
          asChild
          className="mt-8 inline-flex w-full justify-center rounded-full px-8 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 sm:w-auto"
        >
          <Link href="#contact">Hire Me</Link>
        </Button>
      </div>
    </section>
  );
}
