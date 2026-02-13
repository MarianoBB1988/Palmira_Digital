import Link from "next/link"
import Image from "next/image"

const sections = [
  {
    title: "Secciones",
    links: [
      "Nueva Palmira",
      "Colonia",
      "Deportes",
      "Cultura",
      "Economia",
      "Opinion",
    ],
  },
  {
    title: "Empresa",
    links: [
      "Quienes somos",
      "Contacto",
      "Publicidad",
      "Trabaja con nosotros",
    ],
  },
  {
    title: "Legal",
    links: [
      "Politica de privacidad",
      "Terminos de uso",
      "Aviso legal",
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-12 items-center justify-center rounded-lg bg-primary" >
                <span className="font-serif text-xl font-bold text-primary-foreground">
                   <Image src="/logobk.png" alt="Logo" width={100} height={100} style={{padding:'5px'}}/>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight text-foreground">
                  PALMIRA
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                  Digital
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tu fuente confiable de noticias locales, regionales y nacionales.
              Comprometidos con el periodismo veraz e independiente.
            </p>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Palmira Digital. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
