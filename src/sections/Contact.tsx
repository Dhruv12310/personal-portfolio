// src/sections/Contact.tsx

export default function Contact() {
  return (
    <section id="contact" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Rounded section container (this is the big box) */}
        <div className="rounded-[48px] bg-slate-50 p-10 dark:bg-slate-900/90">
          {/* Heading */}
          <div className="text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-white">
            GET IN TOUCH
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Contact
          </h2>

          {/* Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email */}
            <a
              href="dhruvbhatt2209@gmail.com"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 transition duration-300
                         hover:border-violet-300 hover:bg-white hover:shadow-[0_0_40px_rgba(129,140,248,0.35)]
                         dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-violet-400"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-100/40 via-transparent to-sky-100/40 opacity-0 transition group-hover:opacity-100 dark:from-violet-500/10 dark:to-sky-500/10" />

              <div className="relative flex flex-col gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 group-hover:bg-violet-100 dark:bg-violet-900/40 dark:group-hover:bg-violet-900/60">
                  {/* Mail icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 stroke-violet-500 group-hover:stroke-violet-600 dark:stroke-violet-300"
                    fill="none"
                    strokeWidth={1.8}
                  >
                    <rect x="4" y="6" width="16" height="12" rx="2" />
                    <path d="M5 7.5 12 12l7-4.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-50">
                    dhruvbhatt2209@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Dhruv12310"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 transition duration-300
                         hover:border-violet-300 hover:bg-white hover:shadow-[0_0_40px_rgba(129,140,248,0.35)]
                         dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-violet-400"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-100/40 via-transparent to-sky-100/40 opacity-0 transition group-hover:opacity-100 dark:from-violet-500/10 dark:to-sky-500/10" />

              <div className="relative flex flex-col gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 group-hover:bg-violet-100 dark:bg-violet-900/40 dark:group-hover:bg-violet-900/60">
                  {/* GitHub icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-none stroke-violet-500 group-hover:stroke-violet-600 dark:stroke-violet-300"
                    strokeWidth={1.8}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49
                       0-.24-.01-.87-.01-1.7-2.48.55-3.01-1.22-3.01-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63
                       1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-1.98-.23-4.07-1.03-4.07-4.6
                       0-1.02.35-1.85.93-2.5-.09-.23-.4-1.16.09-2.42 0 0 .75-.25 2.46.96A8.18 8.18 0 0 1 12 7.12c.76.01 1.53.1 2.25.3
                       1.7-1.21 2.45-.96 2.45-.96.5 1.26.19 2.19.1 2.42.58.65.93 1.48.93 2.5 0 3.58-2.09 4.37-4.08 4.6.36.32.68.95.68 1.92
                       0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    GitHub
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-50">
                    @Dhruv12310
                  </p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dhruv-bhatt-dhr12310/"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 transition duration-300
                         hover:border-violet-300 hover:bg-white hover:shadow-[0_0_40px_rgba(129,140,248,0.35)]
                         dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-violet-400"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-100/40 via-transparent to-sky-100/40 opacity-0 transition group-hover:opacity-100 dark:from-violet-500/10 dark:to-sky-500/10" />

              <div className="relative flex flex-col gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 group-hover:bg-violet-100 dark:bg-violet-900/40 dark:group-hover:bg-violet-900/60">
                  {/* LinkedIn icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 stroke-violet-500 group-hover:stroke-violet-600 dark:stroke-violet-300"
                    fill="none"
                    strokeWidth={1.8}
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M8 17v-6" />
                    <circle cx="8" cy="8" r="1" />
                    <path d="M12 17v-4.5A2.5 2.5 0 0 1 16.5 15V17" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-50">
                    Dhruv Bhatt
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 transition duration-300
                         hover:border-violet-300 hover:bg-white hover:shadow-[0_0_40px_rgba(129,140,248,0.35)]
                         dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-violet-400"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-100/40 via-transparent to-sky-100/40 opacity-0 transition group-hover:opacity-100 dark:from-violet-500/10 dark:to-sky-500/10" />

              <div className="relative flex flex-col gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-slate-200 dark:bg-slate-800 dark:group-hover:bg-slate-700">
                  {/* Location icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 stroke-slate-500 group-hover:stroke-slate-700 dark:stroke-slate-200"
                    fill="none"
                    strokeWidth={1.8}
                  >
                    <path d="M12 21s6-4.5 6-10a6 6 0 1 0-12 0c0 5.5 6 10 6 10Z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-50">
                    Tempe, Arizona
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end rounded container */}
      </div>
    </section>
  );
}
