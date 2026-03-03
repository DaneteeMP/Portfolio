import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-semibold text-foreground">
            Dan<span className="text-primary">.</span>
          </span>
          <span className="h-4 w-px bg-border" />
          <p className="text-xs text-muted-foreground">
            {"Dan Maldonado  2026"}
          </p>
        </div>
        <div className="flex items-center gap-3">
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              <social.icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
