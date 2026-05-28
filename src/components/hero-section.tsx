"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className=" bg-zinc-50 dark:bg-[#090a0f] min-h-[85vh] flex items-center  ">
      <div className="max-w-7xl mx-auto px-12 py-10 grid lg:grid-cols-2 gap-12 items-center ">
        {/* Left Image */}
        <div className="flex justify-center items-center ">
          <div className="relative w-[280px] h-[380px] md:w-[360px] md:h-[420px] rounded-xl overflow-hidden ">
            <Image
              src="/hero.png"
              alt="Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Right Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Heading */}
          <div className="space-y-5">
            <p className="text-sm tracking-widest text-zinc-500 uppercase">
              Full Stack Developer
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-zinc-100">
              Turning Vision Into Reality With Code & Design
            </h1>

            <p className="text-zinc-600 dark:text-zinc-100 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build modern, scalable web applications using React, Next.js and
              Node.js. I love turning ideas into real-world digital products
              with clean UI and strong backend logic.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <Button
              asChild
              size="lg"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3"
            >
              <Link href="/resume.pdf">
                View Resume
                <ArrowUpRight size={18} />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl px-6 py-3"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
