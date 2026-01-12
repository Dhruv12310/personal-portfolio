// src/sections/Skills.tsx

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400">
          TECHNICAL EXPERTISE
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Skills &amp; Technologies
        </h2>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="
                rounded-3xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm
                dark:border-slate-800 dark:bg-slate-900/80
              "
            >
              <h3 className="text-sm font-semibold text-violet-600 dark:text-violet-300">
                {category.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700
                      dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
