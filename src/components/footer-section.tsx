import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/90 px-12 py-10 text-zinc-700 dark:border-zinc-800 dark:bg-[#020205] dark:text-zinc-400">
     
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Provash • Full Stack Developer</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-cyan-500 transition"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-cyan-500 transition"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:hello@provash.dev"
              className="hover:text-cyan-500 transition"
            >
              hello@provash.dev
            </Link>
          </div>
        </div>
     
    </footer>
  );
}
