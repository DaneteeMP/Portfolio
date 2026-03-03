import { Code2, Rocket, Users, Globe } from "lucide-react"

const stats = [
  { value: "4+", label: "Anos de experiencia", icon: Rocket },
  { value: "20+", label: "Proyectos entregados", icon: Code2 },
  { value: "10+", label: "Clientes satisfechos", icon: Users },
  { value: "Full Stack", label: "Especialidad", icon: Globe },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left: título */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Sobre mi
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
              Construyendo el futuro,{" "}
              <span className="text-primary">una linea a la vez</span>
            </h2>
          </div>

          {/* Right: descripción */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Soy <span className="font-semibold text-foreground">Dan Maldonado</span>, un desarrollador
                full stack con experiencia construyendo desde sitios corporativos con
                WordPress y WooCommerce hasta aplicaciones web complejas con React, Angular
                y Next.js.
              </p>
              <p>
                Mi stack abarca todo el espectro: en el frontend trabajo con{" "}
                <span className="font-medium text-foreground">React, Angular, TypeScript y Tailwind</span>;
                en el backend con{" "}
                <span className="font-medium text-foreground">Laravel, Django, Express y Node.js</span>;
                y gestiono bases de datos con MySQL y PostgreSQL.
              </p>
              <p>
                También tengo experiencia con <span className="font-medium text-foreground">Rust</span> para
                proyectos de alto rendimiento, <span className="font-medium text-foreground">Docker</span> para
                contenedorización, y trabajo cómodamente tanto en entornos Windows como Linux.
                Me apasiona el SEO técnico y la optimización de rendimiento web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
