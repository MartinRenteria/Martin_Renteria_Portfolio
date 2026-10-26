import {
  contact,
  education,
  experience,
  headings,
  hero,
  nav,
  organizations,
  profile,
  projects,
  projectsEmpty,
  skills,
  ui,
} from "@/data/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        {ui.skipLink}
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a href="#top" className="brand">
            {profile.name}
          </a>
          <div className="site-header__controls">
            <nav aria-label={ui.navLabel}>
              <ul className="nav-list">
                {nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <div className="hero-glow">
          <section id="top" aria-labelledby="hero-title" className="hero">
            <p className="hero__role">{profile.role}</p>
            <h1 id="hero-title" className="hero__title">
              {hero.headlineStart}
              <span className="hero__highlight">{hero.headlineHighlight}</span>
              {hero.headlineEnd}
            </h1>
            <p className="hero__summary">{profile.summary}</p>
            <p className="actions">
              <a href="#projects" className="btn btn-primary">{hero.primaryButton}</a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">{hero.secondaryButton}</a>
            </p>
          </section>
        </div>

        <section id="experience" aria-labelledby="experience-title" className="section">
          <h2 id="experience-title" className="section-title">{headings.experience}</h2>
          {experience.map((job) => (
            <article key={job.company}>
              <header className="job__header">
                <h3 className="job__company">{job.company}</h3>
                <p className="job__place">{job.place}</p>
              </header>
              {job.roles.map((role) => (
                <div key={role.title} className="role">
                  <div className="role__header">
                    <h4 className="role__title">{role.title}</h4>
                    <p className="role__period">{role.period}</p>
                  </div>
                  <ul className="role__points">
                    {role.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </section>

        <section id="projects" aria-labelledby="projects-title" className="section">
          <h2 id="projects-title" className="section-title">{headings.projects}</h2>
          {projects.length === 0 ? (
            <p className="empty-note">
              {projectsEmpty.before}
              <a href={`mailto:${profile.email}`} className="text-link">{projectsEmpty.linkText}</a>
              {projectsEmpty.after}
            </p>
          ) : (
            <ul className="project-grid">
              {projects.map((p) => (
                <li key={p.title} className="project-card">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__summary">{p.summary}</p>
                  <ul className="tag-list" aria-label={ui.technologiesUsedIn(p.title)}>
                    {p.stack.map((s) => (
                      <li key={s} className="tag">{s}</li>
                    ))}
                  </ul>
                  <p className="project-card__links">
                    {p.href && (
                      <a href={p.href} className="text-link">
                        {ui.liveSite}<span className="sr-only"> {ui.forProject(p.title)}</span>
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} className="text-link">
                        {ui.sourceCode}<span className="sr-only"> {ui.forProject(p.title)}</span>
                      </a>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section id="skills" aria-labelledby="skills-title" className="section">
          <h2 id="skills-title" className="section-title">{headings.skills}</h2>
          <dl className="skill-grid">
            {skills.map((g) => (
              <div key={g.group}>
                <dt className="skill-group__name">{g.group}</dt>
                <dd className="skill-group__items">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>

          <h3 className="subheading">{headings.education}</h3>
          <ul className="stack-list">
            {education.map((e) => (
              <li key={e.name} className="stack-item">
                <span>{e.name}</span>
                <span className="stack-item__detail">{e.org}</span>
              </li>
            ))}
          </ul>

          <h3 className="subheading">{headings.organizations}</h3>
          <ul className="stack-list">
            {organizations.map((o) => (
              <li key={o.name} className="stack-item stack-item--prose">
                <span>{o.name}</span>
                <span className="stack-item__detail">{o.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="section">
          <h2 id="contact-title" className="section-title">{headings.contact}</h2>
          <p className="contact-intro">{contact.intro}</p>
          <p className="actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
            <a href={profile.linkedin} className="btn btn-ghost">
              {contact.linkedinLabel}<span className="sr-only"> {contact.linkedinHidden}</span>
            </a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>{profile.name}, {profile.location}</p>
      </footer>
    </>
  );
}
