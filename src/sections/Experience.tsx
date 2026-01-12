// src/sections/Experience.tsx

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-16"
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400">
          WORK HISTORY
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Vertical line */}
          <div className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400/60 via-slate-300/60 to-transparent dark:from-violet-500/80 dark:via-slate-700/80" />

          <div className="space-y-10">
            {experiences.map((item) => (
              <div key={item.id} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-4 top-4 -translate-x-1/2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-950">
                    <div className="h-2 w-2 rounded-full bg-violet-500" />
                  </div>
                </div>

                {/* Date pill */}
                <div className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700 shadow-sm dark:bg-violet-900/40 dark:text-violet-200">
                  {item.timeframeLabel}
                </div>

                {/* Experience card */}
                <article
                  className="
                    group relative mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm
                    transition
                    hover:border-violet-300 hover:bg-violet-50/80
                    dark:border-slate-800 dark:bg-slate-900/80
                    dark:hover:border-violet-500/70 dark:hover:bg-slate-900
                  "
                >
                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-3xl
                      opacity-0 transition
                      group-hover:opacity-100
                      group-hover:bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_transparent_55%)]
                    "
                  />

                  <div className="relative">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                      {item.company}
                    </h3>
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                      <span className="font-medium">{item.role}</span>
                      <span className="mx-1">•</span>
                      <span>{item.location}</span>
                    </div>

                    <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
