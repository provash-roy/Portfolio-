"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto p-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/#home"
          className="text-2xl font-bold text-black dark:text-zinc-100 tracking-wide"
        >
          Provash<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="shadow-md bg-white/20 dark:bg-black/20 backdrop-blur-md p-2 rounded-md hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black dark:text-zinc-100 hover:text-cyan-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />

          <Link
            href="https://www.linkedin.com/in/provash-roy-687a703a0/"
            target="_blank"
            className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-cyan-400"
          >
            <FaLinkedin size={18} />
          </Link>

          <Link
            href="https://github.com/provash-roy"
            target="_blank"
            className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-cyan-400"
          >
            <FaGithub size={18} />
          </Link>

          <Button
            onClick={() => router.push("/#contact")}
            className="px-5 rounded-xl bg-cyan-400 text-black hover:bg-cyan-300"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black dark:text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden backdrop-blur-md bg-black/50 px-6 py-4 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
