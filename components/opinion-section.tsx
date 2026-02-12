import Link from "next/link"
import { Quote } from "lucide-react"

const opinions = [
  {
    author: "Carolina Mendez",
    role: "Columnista",
    title: "El futuro de Nueva Palmira se construye desde las aulas",
    excerpt:
      "La educacion sigue siendo la herramienta mas poderosa para transformar nuestra ciudad. Es hora de invertir en nuestros jovenes...",
  },
  {
    author: "Andres Gutierrez",
    role: "Editor",
    title: "El puerto como motor de desarrollo local",
    excerpt:
      "La actividad portuaria sigue siendo el pilar de Nueva Palmira. Necesitamos que sus beneficios lleguen a toda la comunidad...",
  },
  {
    author: "Lucia Ramirez",
    role: "Analista",
    title: "El campo coloniense necesita mas atencion",
    excerpt:
      "Los pequenos productores rurales son la base de nuestra economia departamental. Sin politicas reales de apoyo, el futuro del agro esta en riesgo...",
  },
]

export function OpinionSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-secondary" />
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Opinion
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {opinions.map((op) => (
          <Link href="#" key={op.title} className="group">
            <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
              <Quote className="mb-3 h-6 w-6 text-secondary" />
              <h3 className="font-serif text-lg font-bold leading-snug text-card-foreground group-hover:text-primary transition-colors">
                {op.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {op.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {op.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {op.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{op.role}</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
