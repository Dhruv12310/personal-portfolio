// src/sections/About.tsx

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16"
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="text-xs font-medium tracking-[0.22em] text-slate-500 dark:text-slate-400">
          ABOUT
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          A bit about me
        </h2>

        {/* Body */}
        <div className="mt-8 flex gap-6">
          {/* Dot */}
          <div className="mt-2 flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-950">
            <div className="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            <p>
              I&apos;m a final-year CS student at Arizona State University, but
              the thing that really describes me isn&apos;t my major—it&apos;s
              that I can&apos;t leave broken systems alone.
            </p>

            <p>
              If I see a process that&apos;s clumsy or confusing, it just sits
              in my head until I&apos;ve sketched a better version of it.
              That&apos;s how most of my projects started: not from a hackathon
              theme or a tutorial, but from watching people around me wrestle
              with tools that clearly weren&apos;t built for them. I like
              sitting with those people, listening to what actually hurts, and
              then slowly turning “I wish we could…” into “wait, this already
              works?”
            </p>

            <p>
              Because of that, I&apos;ve ended up being the bridge person a lot.
              I&apos;m comfortable talking to non-technical folks, translating
              what they really mean into something I can implement, and then
              translating the constraints back in a way that doesn&apos;t sound
              like excuses. Whether I&apos;m leading a student team at work or
              pairing with another developer, I care more about the outcome and
              the relationship than being the smartest person in the room.
            </p>

            <p>
              I&apos;m also pretty honest about where I am right now. This is a
              brutal market for new grads, and I&apos;m not expecting a company
              to take a chance on me just because I like coding. What I{" "}
              <span className="font-semibold">am</span> offering is someone who
              shows up prepared, learns fast, doesn&apos;t get precious about
              their own ideas, and will quietly do the unglamorous work that
              keeps a product moving.
            </p>

            <p>
              Underneath all the projects and buzzwords, that&apos;s the core:
              I like fixing things, I like shipping, and I like leaving people
              better off than they were before they met me. If that sounds like
              the kind of junior engineer you&apos;d actually enjoy working
              with, we&apos;ll probably get along.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
