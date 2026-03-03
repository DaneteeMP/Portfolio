import { ArrowUpRight } from "lucide-react"

const studies = [
  {
    period: "2023 — 2025",
    role: "CFGS Desarrollo de Aplicaciones Web (DAW)",
    company: "Institut Lacetània",
    companyUrl: "#",
    description:
      "Formación especializada en desarrollo full-stack. Aprendizaje de frontend moderno (HTML5, CSS3, JavaScript, Angular, Vue), desarrollo backend con Django, Flask, PHP y Laravel, diseño de bases de datos relacionales y despliegue en entornos Linux con Docker. Trabajo con metodologías ágiles y control de versiones con Git.",
    tags: [
      "JavaScript",
      "Angular",
      "Vue",
      "Django",
      "Laravel",
      "MySQL",
      "Docker",
      "Git",
    ],
  },
  {
    period: "2021 — 2023",
    role: "CFGM Sistemas Microinformáticos y Redes (SMR)",
    company: "Institut Lacetània",
    companyUrl: "#",
    description:
      "Formación en redes, sistemas operativos y mantenimiento de hardware. Configuración de redes LAN/WAN, administración básica de Windows Server y Linux, gestión de servicios DNS/DHCP y fundamentos de seguridad informática.",
    tags: [
      "Networking",
      "Linux",
      "Windows Server",
      "TCP/IP",
      "Hardware",
      "IT Support",
    ],
  },
];

export function Studies() {
  return (
    <section id="studies" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Trayectoria
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Estudios
        </h2>

        <div className="mt-14">
          {studies.map((std, i) => (
            <div
              key={i}
              className="group relative grid gap-4 border-t border-border py-10 transition-colors md:grid-cols-[180px_1fr] md:gap-10"
            >
              {/* Animated purple line on hover */}
              <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-0 bg-primary/60 transition-all duration-500 group-hover:w-full" />

              <p className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
                {std.period}
              </p>
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {std.role}
                  <span className="text-muted-foreground">{" / "}</span>
                  <a
                    href={std.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-70"
                  >
                    {std.company}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {std.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {std.tags.map((tag) => (
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
