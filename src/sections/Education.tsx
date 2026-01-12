// src/sections/Education.tsx

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <div className="text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400">
          EDUCATION
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Academic Background
        </h2>

        {/* Main education card */}
        <article
          className="
            mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm
            dark:border-slate-800 dark:bg-slate-900/90
          "
        >
          {/* Top details (institution + degree + period) */}
          <div className="p-6 pb-4 sm:p-7 sm:pb-4 space-y-4">
            {/* Institution */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Institution
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
                Arizona State University
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Tempe, AZ
              </p>
            </div>

            {/* Degree + Period on the same row */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Degree
                </p>
                <p className="mt-1 text-sm text-slate-800 dark:text-slate-100">
                  B.S. in Computer Science
                </p>
              </div>

              <div className="sm:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Period
                </p>
                <p className="mt-1 text-sm text-slate-800 dark:text-slate-100">
                  Aug 2022 – May 2026
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800" />

          {/* Bottom: coursework + certifications */}
          <div className="p-6 sm:p-7 space-y-4">
            {/* Relevant coursework */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Relevant Coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Artificial Intelligence",
                  "Natural Language Processing",
                  "Linear Algebra",
                  "iOS App Development (SwiftUI)",
                  "Software Engineering",
                  "Cyber Security",
                  "Applied Statistics",
                  ".NET Application Development",
                ].map((course) => (
                  <span
                    key={course}
                    className="
                      inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700
                      dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200
                    "
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications & Honors */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Certifications &amp; Honors
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "AWS Certified Cloud Practitioner",
                  "CFI — Financial Modeling & Valuation Analyst (FMVA)",
                  "ASU Dean's List",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      inline-flex items-center rounded-md border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700
                      dark:border-violet-700 dark:bg-violet-900/40 dark:text-violet-200
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
