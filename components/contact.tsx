"use client"

import { useState, type FormEvent } from "react"
import { Send, Mail, MapPin, Github } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Contacto
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Trabajemos juntos
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
          Siempre abierto a nuevos retos y colaboraciones. Si tienes un proyecto
          en mente o quieres saludar, escribeme.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_300px]">
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-card p-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Send className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-5 font-serif text-xl font-semibold text-foreground">
                Mensaje enviado
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Gracias por contactarme. Te respondere lo antes posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="De que quieres hablar?"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Cuentame sobre tu proyecto..."
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Enviar mensaje
                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                Email
              </div>
              <a
                href="mailto:danmaldonadoperalvo@gmail.com"
                className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                danmaldonadoperalvo@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Github className="h-4 w-4 text-primary" />
                </div>
                GitHub
              </div>
              <a
                href="https://github.com/DaneteeMP"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                github.com/DaneteeMP
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                Ubicacion
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Remoto / Barcelona, España
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-accent/30 p-6">
              <p className="text-sm font-medium text-foreground">Disponibilidad</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Abierto a freelance y posiciones full-time.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Disponible ahora
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
