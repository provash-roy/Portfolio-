"use client";

import Link from "next/link";
import { Menu, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black tracking-wide">
          Provash<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="bg-white shadow-md bg-opacity-50 p-3 rounded-md hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Button */}
          <ModeToggle />

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={18} />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com"
            target="_blank"
            className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-cyan-400 transition"
          >
            <FaGithub size={18} />
          </Link>

          {/* Hire Me Button */}
          <button className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black px-6 py-4 flex flex-col gap-5">
          {/* Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
            <button className="p-2 rounded-full bg-zinc-800 text-zinc-300">
              <Moon size={18} />
            </button>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 rounded-full bg-zinc-800 text-zinc-300"
            >
              <FaLinkedin size={18} />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              className="p-2 rounded-full bg-zinc-800 text-zinc-300"
            >
              <FaGithub size={18} />
            </Link>
          </div>

          <button className="w-full py-2 rounded-xl bg-cyan-400 text-black font-semibold">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
