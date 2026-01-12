"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ROLES = [
  "Product Builder",
  "SwiftUI Developer",
  "AI/ML Engineer",
  "Cloud Architect",
  "Quantitative Finance Researcher",
  "Financial Modeling Analyst",
];

const TYPING_SPEED = 90;
const DELETING_SPEED = 55;
const PAUSE_MS = 5000;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 🔥 NEW: scroll fade state
  const [scrollY, setScrollY] = useState(0);

  // 🔥 NEW: scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_MS);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // 🔥 Fade math (matches premium portfolio feel)
  const fadeStart = 0;
  const fadeEnd = 300;
  const opacity = Math.max(
    0,
    1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)
  );
  const translateY = Math.min(scrollY * 0.25, 80);

  return (
    <section
      id="hero"
      className="relative"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.1s linear, transform 0.1s linear",
      }}
    >
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col items-center px-4 py-12 md:flex-row md:items-center md:gap-12">
        {/* Left */}
        <div className="flex-1">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
            CS @ ARIZONA STATE UNIVERSITY
          </div>

          <h1 className="mt-6 text-4xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            DHRUV
            <br />
            BHATT
          </h1>

          <p className="mt-4 text-lg font-semibold text-violet-600 sm:text-xl dark:text-white">
            {displayText}
            <span className="cursor-blink ml-1 inline-block h-5 w-[2px] align-middle bg-violet-600 dark:bg-white" />
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            Shipping real products across web, AI, and cloud. I love taking ideas
            from scratch to polished experiences that actually get used.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-violet-500"
            >
              View Work ↓
            </a>

            <a
             href="/resume2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-50 dark:hover:bg-slate-900/70"
            >
            Resume
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="mt-10 flex flex-1 flex-col items-center md:mt-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-3xl bg-slate-200 shadow-lg sm:h-72 sm:w-72 dark:bg-slate-800">
            <img
              src="/me.png"
              alt="Dhruv Bhatt"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/Dhruv12310"
              target="_blank"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-slate-300 shadow-md ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:ring-violet-400"
            >
              <FaGithub className="h-4 w-4 text-slate-200 transition group-hover:text-violet-100" />
            </a>

            <a
              href="https://www.linkedin.com/in/dhruv-bhatt-dhr12310/"
              target="_blank"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-slate-800/90 text-slate-300 shadow-md ring-1 ring-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:ring-violet-400"
            >
              <FaLinkedinIn className="h-4 w-4 text-slate-200 transition group-hover:text-violet-100" />
            </a>

            <a
              href="dhruvbhatt2209@gmail.com"
              className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-slate-800/90 text-slate-300 shadow-md ring-1 ring-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:ring-violet-400"
            >
              <HiOutlineMail className="h-4 w-4 text-slate-200 transition group-hover:text-violet-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
