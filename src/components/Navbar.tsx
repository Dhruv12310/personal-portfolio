"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

const LINKS = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// offset so section sits slightly below navbar
const SCROLL_OFFSET = 80;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    // absolute so it visually merges with hero background
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Left: name with gradient hover */}
        <div className="flex items-center gap-2">
          <span
            className="
              text-lg font-semibold tracking-tight
              text-slate-900 dark:text-slate-100
              transition
              hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500
              hover:bg-clip-text hover:text-transparent
            "
          >
            Dhruv Bhatt
          </span>
        </div>

        {/* Center: desktop links */}
        <div className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="transition hover:text-slate-900 dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: theme toggle + Get in Touch */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="
              flex h-9 w-9 items-center justify-center rounded-full
              border border-slate-200 bg-white/80 text-slate-700 shadow-sm
              transition hover:bg-slate-100
              dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100
              dark:hover:bg-slate-800
            "
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="h-4 w-4" />
            ) : (
              <FiMoon className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="
              rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow
              transition hover:bg-slate-800
              dark:bg-violet-600 dark:hover:bg-violet-500
            "
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="
            inline-flex h-9 w-9 items-center justify-center rounded-full
            border border-slate-200 bg-white/80 text-slate-800
            md:hidden
            dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100
          "
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  handleScroll(link.id);
                  setOpen(false);
                }}
                className="py-1 text-left"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium dark:border-slate-700 dark:bg-slate-900"
            >
              {theme === "dark" ? (
                <>
                  <FiSun className="h-3 w-3" />
                  <span>Light mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="h-3 w-3" />
                  <span>Dark mode</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                handleScroll("contact");
                setOpen(false);
              }}
              className="mt-2 rounded-full bg-slate-900 px-4 py-2 text-center text-xs font-semibold text-white dark:bg-violet-600"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
