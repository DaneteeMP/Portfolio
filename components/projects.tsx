import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "Calcetines Golosos",
    subtitle: "E-Commerce real en produccion",
    description:
      "Tienda online desarrollada con WordPress y WooCommerce. Implementacion de carrito, filtros de producto, pasarela de pago y optimizacion SEO. Configuracion completa de hosting, dominio y mejoras continuas de rendimiento y experiencia de usuario.",
    tags: ["WordPress", "WooCommerce", "PHP", "SEO", "Web Performance"],
    liveUrl: "https://calcetinesgolosos.com",
    githubUrl: "#",
    image: "/images/calcetinesgolosos.webp",
    color: "from-primary/10 to-accent/20",
  },
  {
    title: "SODA",
    subtitle: "Proyecto Final DAW · Plataforma de Inversiones en Tiempo Real",
    description:
      "Simulación de plataforma de inversiones conectada en tiempo real a datos de mercado de acciones. Arquitectura full-stack con Next.js y TypeScript en el frontend, backend con Node.js y sistema de cacheo con Redis para optimizar consultas. Despliegue containerizado con Docker y orquestado con Kubernetes, incluyendo configuración de entorno productivo, gestión de pods y servicios. Implementación de actualizaciones en tiempo real y enfoque en escalabilidad, rendimiento y arquitectura desacoplada.",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    liveUrl: "https://github.com/DaneteeMP/SODA",
    image: "/images/soda.webp",
    color: "from-accent/20 to-secondary",
  },
  {
    title: "ProjectM",
    subtitle: "Proyecto Final SMR · Plataforma Multi-Vendedor",
    description:
      "Plataforma multi-vendedor desarrollada con WordPress que permitía a los usuarios crear sus propias tiendas para la compraventa, exportación e importación de vehículos y piezas. Desarrollo completo de la infraestructura: configuración de red, segmentación con DMZ, gestión de DNS, reglas de firewall y administración del servidor. Implementación de roles personalizados, Custom Post Types y estructura escalable orientada a múltiples vendedores.",
    tags: ["WordPress", "PHP", "Infraestructura", "DNS", "Firewall"],
    image: "/images/projectm.webp",
    color: "from-secondary to-primary/10",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Trabajo
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Proyectos destacados
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Una seleccion de proyectos que muestran mi versatilidad como desarrollador full stack
        </p>

        <div className="mt-16 space-y-24">
          {projects.map((project, i) => (
            <article
              key={i}
              className="group"
            >
              <div className={`grid items-center gap-8 md:gap-12 ${i % 2 !== 0 ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]"}`}>
                {/* Image */}
                <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className={`overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.color} p-2`}>
                    <div className="overflow-hidden rounded-xl">
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={project.image}
                          alt={`Screenshot de ${project.title}`}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-serif text-sm font-semibold text-primary">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-md shadow-primary/15 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                      >
                        Ver proyecto
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
