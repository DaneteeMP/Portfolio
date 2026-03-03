import { Github, Linkedin, Mail, ArrowDown, Terminal } from "lucide-react"

const techFloating = [
  "React", "Next.js", "TypeScript", "Laravel", "Django",
  "Node.js", "Docker", "PostgreSQL", "Rust", "Angular",
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 mt-[2%]">
      {/* Decorative pastel shapes */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-accent/40 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[250px] w-[250px] rounded-full bg-secondary blur-[80px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm text-muted-foreground">Disponible para proyectos</span>
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <span className="block text-balance">
                {"Hola, soy"}
              </span>
              <span className="relative mt-1 inline-block text-primary">
                Dan Maldonado
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 8C52 2 102 2 150 6C198 10 248 5 298 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Desarrollador Full Stack</span> que transforma ideas
              en experiencias digitales. Desde WordPress hasta Rust, construyo soluciones que conectan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Ver proyectos
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/DaneteeMP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[
                { href: "https://github.com/DaneteeMP", label: "GitHub", icon: Github },
                { href: "https://www.linkedin.com/in/dan-maldonado-peralvo/", label: "LinkedIn", icon: Linkedin },
                { href: "mailto:danmaldonadoperalvo@gmail.com", label: "Email", icon: Mail },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary hover:shadow-md hover:-translate-y-0.5"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: floating tech cloud */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center" aria-hidden="true">
            <div className="relative h-[420px] w-[420px]">
              {/* Center icon */}
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-card shadow-xl shadow-primary/10">
                <Terminal className="h-8 w-8 text-primary" />
              </div>
              {/* Orbiting tech tags */}
              {techFloating.map((tech, i) => {
                const angle = (i / techFloating.length) * 2 * Math.PI - Math.PI / 2
                const radius = 155 + (i % 2 === 0 ? 0 : 25)
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                return (
                  <span
                    key={tech}
                    className="absolute left-1/2 top-1/2 rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {tech}
                  </span>
                )
              })}
              {/* Decorative ring */}
              <div className="absolute inset-8 rounded-full border border-dashed border-primary/15" />
              <div className="absolute inset-20 rounded-full border border-dashed border-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
