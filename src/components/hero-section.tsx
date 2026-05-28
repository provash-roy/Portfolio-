"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center items-center lg:justify-start">
          <div className="relative w-[280px] h-[380px] md:w-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
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

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
              Turning Vision Into Reality With Code & Design
            </h1>

            <p className="text-zinc-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build modern, scalable web applications using React, Next.js and
              Node.js. I love turning ideas into real-world digital products
              with clean UI and strong backend logic.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <Link
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition shadow-md"
            >
              View Resume
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl border border-zinc-300 text-black font-medium hover:bg-zinc-100 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
