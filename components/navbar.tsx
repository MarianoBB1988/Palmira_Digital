"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"
import { WeatherWidget } from "./weather-widget"

const categories = [
  "Inicio",
  "Nueva Palmira",
  "Colonia",
  "Deportes",
  "Cultura",
  "Economia",
  "Opinion",
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">
              Febrero 12, 2026 | Nueva Palmira, Colonia
            </span>
            <span className="sm:hidden text-xs">Feb 12, 2026</span>
            <WeatherWidget />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
              className="hover:text-secondary transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="bg-card border-b border-border px-4 py-3">
          <div className="mx-auto max-w-7xl">
            <input
              type="text"
              placeholder="Buscar noticias..."
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Main nav */}
      <nav className="bg-card border-b border-border shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-14 items-center justify-center rounded-lg">
              <span className="font-serif text-xl font-bold text-primary-foreground">
                <Image src="/logo.png" alt="Logo" width={100} height={100}/>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-tight text-foreground">
                PALMIRA
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Digital
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="#"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
