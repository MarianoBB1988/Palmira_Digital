"use client"

import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-12 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Mail className="h-6 w-6 text-secondary" />
            <h2 className="font-serif text-xl font-bold text-primary-foreground">
              Recibe las noticias en tu correo
            </h2>
          </div>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Suscribete al boletin diario de Palmira Digital y mantente informado
            de todo lo que pasa en nuestra ciudad.
          </p>
        </div>
        <form
          className="flex w-full max-w-md gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="tu@correo.com"
            className="flex-1 rounded-md border-0 bg-white/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            className="shrink-0 rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  )
}
