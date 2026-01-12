// src/sections/Projects.tsx
"use client";

import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400">
          <span>SELECTED WORK</span>
          <span className="flex h-4 w-4 items-center justify-center">
            <span className="h-2 w-2 rounded-full border border-slate-400 bg-slate-100 dark:border-slate-500 dark:bg-slate-900" />
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Projects
        </h2>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="block"
            >
              <article
                className="
                  group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm
                  transition
                  hover:border-violet-300 hover:bg-violet-50/80
                  dark:border-slate-800 dark:bg-slate-900/80
                  dark:hover:border-violet-500/70 dark:hover:bg-slate-900
                "
              >
                {/* Glow ring on hover */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-3xl
                    opacity-0 transition
                    group-hover:opacity-100
                    group-hover:bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.28),_transparent_55%)]
                  "
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className="
                        text-base font-semibold text-slate-900
                        transition group-hover:text-violet-600
                        dark:text-slate-50 dark:group-hover:text-violet-300
                      "
                    >
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {project.tagline}
                    </p>
                  </div>

                  <span
                    className="
                      rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600
                      dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200
                    "
                  >
                    {project.badge}
                  </span>
                </div>

                <p className="relative mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="relative mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        rounded-full bg-slate-100 px-2 py-0.5
                        dark:bg-slate-800
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Impact stats */}
                <div className="relative mt-4 border-t border-slate-200 pt-3 text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {project.impacts.map((impact) => (
                      <div key={impact.label}>
                        <p className="text-[10px] uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                          {impact.label}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-100">
                          {impact.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
