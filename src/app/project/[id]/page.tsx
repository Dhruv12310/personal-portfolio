// src/app/project/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { projectDetailsById } from "@/data/project-details";
import type { ProjectDetails } from "@/data/project-details/types";


export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const card = projects.find((p) => p.id === id);
  const details = projectDetailsById[id];

  if (!card) return notFound();

  // If details aren’t filled yet, we still render a clean page instead of 404
 const safeDetails: ProjectDetails =
  details ?? {
    id: card.id,
    overview: "Details coming soon.",
    challenge: "Details coming soon.",
    solution: "Details coming soon.",
    keyInsight: "",
    keyFeatures: [],
    useCases: [],
    role: "",
    impact: [],
    techStack: card.tech,
    links: [],
  };


  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Back */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <span aria-hidden>←</span>
            All Projects
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-xs tracking-[0.22em] text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300">
            {card.badge.toUpperCase()}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl">
            {card.name}
          </h1>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {card.tagline}
          </p>
          {/* Repo link CTA (shows only if a repo link exists in details) */}
{safeDetails.links?.some((l) => /repo/i.test(l.label)) ? (
  <div className="mt-6 flex justify-center">
    {safeDetails.links
      .filter((l) => /repo/i.test(l.label))
      .slice(0, 1)
      .map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-5 py-3 text-sm font-medium text-slate-800 backdrop-blur transition hover:-translate-y-[1px] hover:border-violet-300 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-100 dark:hover:border-violet-500/50"
        >
          {/* glow */}
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition group-hover:opacity-100 bg-violet-500/20 dark:bg-violet-400/20" />
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition group-hover:opacity-100 shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_0_36px_rgba(139,92,246,0.25)]" />

          Project Repo Link
          <span className="text-slate-500 transition group-hover:text-violet-600 dark:text-slate-400 dark:group-hover:text-violet-300">
            ↗
          </span>
        </a>
      ))}
  </div>
) : null}

        </div>
        

        {/* Impact Stats (from projects.ts) */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {card.impacts.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-slate-200 bg-white/60 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
            >
              <div className="text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400">
                {s.label.toUpperCase()}
              </div>
              <div className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-50">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* System Architecture (optional) */}
        {safeDetails.architecture ? (
          <div className="mt-16">
            <Section title="System Architecture">
              <div className="rounded-3xl border border-slate-200 bg-white/60 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
                <div className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  {safeDetails.architecture.heading}
                </div>
                {safeDetails.architecture.subheading ? (
                  <div className="mt-2 text-slate-600 dark:text-slate-300">
                    {safeDetails.architecture.subheading}
                  </div>
                ) : null}

                <div className="mt-8 grid gap-4 md:grid-cols-4">
                  {safeDetails.architecture.steps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-3xl border border-slate-200 bg-white/60 p-5 text-center backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
                    >
                      <div className="text-base font-semibold text-slate-900 dark:text-slate-50">
                        {step.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {step.subtitle}
                      </div>
                    </div>
                  ))}
                </div>

                {safeDetails.architecture.metrics?.length ? (
                  <div className="mt-8 flex flex-wrap items-center justify-end gap-6 text-sm">
                    {safeDetails.architecture.metrics.map((m) => (
                      <div key={m.label} className="text-slate-600 dark:text-slate-300">
                        <span className="mr-2 text-slate-500 dark:text-slate-400">
                          {m.label}:
                        </span>
                        <span className="font-semibold text-violet-700 dark:text-violet-200">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </Section>
          </div>
        ) : null}

        {/* Performance Data (optional) */}
        {safeDetails.performanceByFeature?.length ? (
          <div className="mt-12">
            <Section title="Performance Data">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Key metrics and performance benchmarks
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white/60 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
                <div className="text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  WEEKLY TIME SAVINGS BY FEATURE
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {safeDetails.performanceByFeature.map((x) => (
                    <div
                      key={x.label}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
                    >
                      <div className="text-slate-700 dark:text-slate-200">{x.label}</div>
                      <div className="font-semibold text-slate-900 dark:text-slate-50">
                        {x.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        ) : null}

        {/* Overview / Challenge / Solution */}
        <div className="mt-16 space-y-10">
          <Section title="Overview">
            <p className="text-slate-600 dark:text-slate-300">
              {safeDetails.overview}
            </p>
          </Section>

          <div className="grid gap-10 md:grid-cols-2">
            <Section title="Challenge">
              <p className="text-slate-600 dark:text-slate-300">
                {safeDetails.challenge}
              </p>
            </Section>

            <Section title="Solution">
              <p className="text-slate-600 dark:text-slate-300">
                {safeDetails.solution}
              </p>
            </Section>
          </div>

          {/* Key Insight (optional) */}
          {safeDetails.keyInsight ? (
            <div className="rounded-3xl border border-violet-200 bg-violet-50/70 p-6 backdrop-blur dark:border-violet-500/30 dark:bg-violet-950/30">
              <div className="text-sm font-semibold text-violet-700 dark:text-violet-200">
                Key Insight
              </div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">
                {safeDetails.keyInsight}
              </div>
            </div>
          ) : null}

          {/* Showcase Image (optional) */}
          {safeDetails.showcaseImage ? (
            <Section title="Product Preview">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
                <Image
                  src={safeDetails.showcaseImage.src}
                  alt={safeDetails.showcaseImage.alt}
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </Section>
          ) : null}

          {/* Key Features + Use Cases */}
          {(safeDetails.keyFeatures?.length || safeDetails.useCases?.length) ? (
            <div className="grid gap-10 md:grid-cols-2">
              {safeDetails.keyFeatures?.length ? (
                <Section title="Key Features">
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    {safeDetails.keyFeatures.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              ) : null}

              {safeDetails.useCases?.length ? (
                <Section title="Use Cases">
                  <ol className="space-y-3 text-slate-600 dark:text-slate-300">
                    {safeDetails.useCases.map((x, idx) => (
                      <li key={x} className="flex gap-4">
                        <span className="min-w-8 text-sm font-semibold text-violet-600 dark:text-violet-300">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ol>
                </Section>
              ) : null}
            </div>
          ) : null}

          {/* Role + Impact */}
          {(safeDetails.role || safeDetails.impact?.length) ? (
            <div className="grid gap-10 md:grid-cols-2">
              {safeDetails.role ? (
                <Section title="Role">
                  <div className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                    {safeDetails.role}
                  </div>
                </Section>
              ) : null}

              {safeDetails.impact?.length ? (
                <Section title="Impact">
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    {safeDetails.impact.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              ) : null}
            </div>
          ) : null}

          {/* Tech Stack (use details techStack if present, else card.tech) */}
          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-3">
              {(safeDetails.techStack?.length ? safeDetails.techStack : card.tech).map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 text-sm text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </Section>

          {/* Links */}
          {safeDetails.links?.length ? (
            <Section title="Links">
              <div className="flex flex-wrap gap-3">
                {safeDetails.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm text-slate-700 backdrop-blur hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/70"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </Section>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400">
        {title.toUpperCase()}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
