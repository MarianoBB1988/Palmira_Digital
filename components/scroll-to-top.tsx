"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    // Mostrar botón cuando user scrollea más allá del navbar/encabezado
    const scrollTop = window.scrollY
    
    // Mostrar cuando ha scrolleado más de 300px (altura aproximada del encabezado)
    if (scrollTop > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Volver al encabezado"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}
