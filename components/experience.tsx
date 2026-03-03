import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 -- Presente",
    role: "Senior Full Stack Developer",
    company: "Tech Company",
    companyUrl: "#",
    description:
      "Liderando el desarrollo de la plataforma principal con React y Next.js. Arquitectura de microservicios con Node.js, optimizacion de rendimiento y mentoria del equipo.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    period: "2021 -- 2023",
    role: "Full Stack Developer",
    company: "Startup Inc.",
    companyUrl: "#",
    description:
      "Desarrollo de aplicaciones web completas con Laravel y Angular. Implementacion de APIs RESTful, integraciones con WooCommerce y despliegue con Docker.",
    tags: ["Laravel", "Angular", "TypeScript", "MySQL", "Docker"],
  },
  {
    period: "2019 -- 2021",
    role: "Web Developer",
    company: "Digital Agency",
    companyUrl: "#",
    description:
      "Creacion de sitios web corporativos con WordPress, tiendas online con WooCommerce y optimizacion SEO. Desarrollo frontend con JavaScript y CSS moderno.",
    tags: ["WordPress", "WooCommerce", "JavaScript", "SEO", "CSS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Trayectoria
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Experiencia
        </h2>

        <div className="mt-14">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative grid gap-4 border-t border-border py-10 transition-colors md:grid-cols-[180px_1fr] md:gap-10"
            >
              {/* Animated purple line on hover */}
              <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-0 bg-primary/60 transition-all duration-500 group-hover:w-full" />

              <p className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
                {exp.period}
              </p>
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {exp.role}
                  <span className="text-muted-foreground">{" / "}</span>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-70"
                  >
                    {exp.company}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
