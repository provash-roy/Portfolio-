import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/90 px-12 py-10 text-zinc-700 dark:border-zinc-800 dark:bg-[#020205] dark:text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Provash • Full Stack Developer</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="https://www.linkedin.com/in/provash-roy-687a703a0/"
            target="_blank"
            className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={18} />
          </Link>

          <Link
            href="https://github.com/provash-roy"
            target="_blank"
            className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-cyan-400 transition"
          >
            <FaGithub size={18} />
          </Link>

          <Link
            href="mailto:provashray94@gmail.com"
            target="_blank"
            className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-cyan-400 transition"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="mt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-center pt-6">
        <p className="text-sm">
          © 2026{" "}
          <span className="font-semibold text-zinc-900 dark:text-white">
            Provash Roy
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
