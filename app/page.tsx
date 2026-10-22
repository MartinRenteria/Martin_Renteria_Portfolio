import { education, experience, profile, projects, skills } from "@/data/content";

const wrap = "mx-auto w-[min(100%-2.5rem,62rem)]";
const section = `${wrap} border-t border-line py-12 md:py-20`;
const h2 = "mb-8 font-display text-3xl font-bold tracking-tight md:text-4xl";
const link = "text-accent underline underline-offset-4 hover:text-white";
const btn =
  "inline-block rounded-lg border px-5 py-3 font-semibold no-underline transition-colors motion-reduce:transition-none forced-colors:border-[ButtonText]";
const btnGhost = `${btn} border-line text-ink hover:border-accent`;
const btnPrimary = `${btn} border-accent bg-accent text-accent-ink hover:border-white hover:bg-white`;

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-ink"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-3`}>
          <a href="#top" className="font-display text-lg font-bold text-ink no-underline">
            {profile.name}
          </a>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {["experience", "projects", "skills", "contact"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-block py-1 capitalize text-muted hover:text-ink hover:underline">
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <div className="bg-[radial-gradient(60rem_28rem_at_15%_0%,rgb(157_188_255/0.12),transparent)]">
          <section id="top" aria-labelledby="hero-title" className={`${wrap} py-16 md:py-32`}>
            <p className="mb-5 text-muted">{profile.role}</p>
            <h1
              id="hero-title"
              className="max-w-[16ch] text-balance font-display text-5xl font-bold leading-[1.05] tracking-tighter md:text-7xl lg:text-8xl"
            >
              I build web products that work for <span className="text-accent">everyone</span>.
            </h1>
            <p className="mt-7 max-w-[62ch] text-lg text-muted md:text-xl">{profile.summary}</p>
            <p className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={btnPrimary}>See projects</a>
              <a href={`mailto:${profile.email}`} className={btnGhost}>Email me</a>
            </p>
          </section>
        </div>

        <section id="experience" aria-labelledby="experience-title" className={section}>
          <h2 id="experience-title" className={h2}>Experience</h2>
          {experience.map((job) => (
            <article key={job.company}>
              <header className="mb-6 flex flex-wrap items-baseline gap-x-6 gap-y-1">
                <h3 className="font-display text-2xl font-bold">{job.company}</h3>
                <p className="text-sm text-muted">{job.place}, {job.period}</p>
              </header>
              {job.roles.map((role) => (
                <div key={role.title} className="mb-8 border-l-2 border-line pl-6">
                  <h4 className="mb-3 font-display text-lg font-semibold text-accent">{role.title}</h4>
                  <ul className="grid max-w-[68ch] list-disc gap-2.5 pl-5">
                    {role.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </section>

        <section id="projects" aria-labelledby="projects-title" className={section}>
          <h2 id="projects-title" className={h2}>Projects</h2>
          {projects.length === 0 ? (
            <p className="max-w-[60ch] rounded-xl border border-dashed border-line bg-surface p-6 text-muted forced-colors:border-[CanvasText]">
              I am still putting this section together. Check back soon, or{" "}
              <a href={`mailto:${profile.email}`} className={link}>email me</a> if you would like to hear about my work now.
            </p>
          ) : (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/60 motion-reduce:transition-none forced-colors:border-[CanvasText]"
                >
                  <h3 className="mb-2 font-display text-xl font-bold">{p.title}</h3>
                  <p className="text-muted">{p.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${p.title}`}>
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-full border border-line px-3 py-0.5 text-sm">{s}</li>
                    ))}
                  </ul>
                  <p className="mt-4 flex gap-5">
                    {p.href && <a href={p.href} className={link}>Live site<span className="sr-only"> for {p.title}</span></a>}
                    {p.repo && <a href={p.repo} className={link}>Source code<span className="sr-only"> for {p.title}</span></a>}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section id="skills" aria-labelledby="skills-title" className={section}>
          <h2 id="skills-title" className={h2}>Skills</h2>
          <dl className="grid gap-6 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group}>
                <dt className="mb-1 font-display text-lg font-semibold">{g.group}</dt>
                <dd className="text-muted">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mb-4 mt-12 font-display text-xl font-bold">Education and certifications</h3>
          <ul className="grid gap-3.5">
            {education.map((e) => (
              <li key={e.name} className="flex flex-col">
                <span>{e.name}</span>
                <span className="text-sm text-muted">{e.org}, {e.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-title" className={section}>
          <h2 id="contact-title" className={h2}>Contact</h2>
          <p className="max-w-[62ch] text-lg text-muted">
            Open to full-stack, DevOps, and accessibility engineering roles. The fastest way to reach me is email.
          </p>
          <p className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={btnPrimary}>{profile.email}</a>
            <a href={profile.linkedin} className={btnGhost}>LinkedIn<span className="sr-only"> profile</span></a>
          </p>
        </section>
      </main>

      <footer className={`${wrap} border-t border-line pb-12 pt-8 text-sm text-muted`}>
        <p>{profile.name}, {profile.location}</p>
      </footer>
    </>
  );
}
