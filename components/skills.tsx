const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "Django", "Express", "Node.js", "Rust", "REST APIs"],
  },
  {
    title: "CMS & E-Commerce",
    skills: ["WordPress", "WooCommerce", "SEO Tecnico"],
  },
  {
    title: "Bases de Datos",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Herramientas",
    skills: ["Docker", "Git", "Linux", "Windows", "CI/CD", "Vercel"],
  },
  {
    title: "Idiomas",
    skills: ["Español: Nativo", "Catalán: Nativo", "Inglés: C1"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Habilidades
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Mi Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Las tecnologias y herramientas con las que trabajo dia a dia
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors group-hover:border-primary/20 group-hover:bg-accent/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
