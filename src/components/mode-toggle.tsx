"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="
            relative
            h-8
            w-8
            rounded-full
            bg-zinc-800
            text-zinc-300
            shadow-md
            transition-all
            duration-300
            hover:bg-zinc-700
            hover:text-cyan-400
            hover:scale-105
            border-0
            outline-none
            ring-0
            focus-visible:ring-0
            focus-visible:outline-none
          "
        >
          {/* Sun Icon */}
          <Sun
            className="
              h-[18px]
              w-[18px]
              rotate-0
              scale-100
              transition-all
              duration-300
              dark:-rotate-90
              dark:scale-0
            "
          />

          {/* Moon Icon */}
          <Moon
            className="
              absolute
              h-[18px]
              w-[18px]
              rotate-90
              scale-0
              transition-all
              duration-300
              dark:rotate-0
              dark:scale-100
            "
          />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-40
          rounded-xl
          bg-zinc-900
          p-2
          text-zinc-200
          shadow-xl
          border-0
        "
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`
            cursor-pointer
            rounded-md
            transition
            hover:bg-zinc-800
            focus:bg-zinc-800
            ${theme === "light" ? "bg-zinc-800 text-cyan-400" : ""}
          `}
        >
          Light
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`
            cursor-pointer
            rounded-md
            transition
            hover:bg-zinc-800
            focus:bg-zinc-800
            ${theme === "dark" ? "bg-zinc-800 text-cyan-400" : ""}
          `}
        >
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`
            cursor-pointer
            rounded-md
            transition
            hover:bg-zinc-800
            focus:bg-zinc-800
            ${theme === "system" ? "bg-zinc-800 text-cyan-400" : ""}
          `}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
