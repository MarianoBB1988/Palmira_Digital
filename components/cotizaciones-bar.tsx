"use client"

import { useEffect, useState } from "react"

interface Cotizacion {
  compra: number
  venta: number
}

interface CotizacionesData {
  USD: Cotizacion
  EUR: Cotizacion
  BRL: Cotizacion
  ARS: Cotizacion
}

export function CotizacionesBar() {
  const [cotizaciones, setCotizaciones] = useState<CotizacionesData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCotizaciones = async () => {
      try {
        const response = await fetch("/api/cotizaciones")
        const data = await response.json()

        if (data.success && data.data) {
          setCotizaciones(data.data)
        }
        setLoading(false)
      } catch (err) {
        console.error("Error fetching cotizaciones:", err)
        setLoading(false)
      }
    }

    fetchCotizaciones()
    // Refresh every 5 minutes
    const interval = setInterval(fetchCotizaciones, 300000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="text-xs text-muted-foreground">Cargando cotizaciones...</div>
        </div>
      </div>
    )
  }

  if (!cotizaciones) return null

  const CotizacionItem = ({
    moneda,
    data,
  }: {
    moneda: string
    data: Cotizacion
  }) => {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 border-r border-border last:border-r-0">
        <span className="font-bold text-sm text-foreground w-10">{moneda}</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">C:</span>
            <span className="text-sm font-semibold tabular-nums">
              {data.compra.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">V:</span>
            <span className="text-sm font-semibold tabular-nums">
              {data.venta.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto text-xs text-muted-foreground">
            <span className="font-semibold whitespace-nowrap">Cotizaciones BCU:</span>
            <div className="flex">
              {Object.entries(cotizaciones).map(([moneda, data]) => (
                <CotizacionItem key={moneda} moneda={moneda} data={data} />
              ))}
            </div>
          </div>
          <div className="text-xs text-muted-foreground whitespace-nowrap ml-4">
            Compra (C) | Venta (V) - Actualizado en tiempo real
          </div>
        </div>
      </div>
    </div>
  )
}
