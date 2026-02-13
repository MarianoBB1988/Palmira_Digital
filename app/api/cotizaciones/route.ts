import { NextResponse } from 'next/server'
import xml2js from 'xml2js'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // WSDL SOAP request para obtener cotizaciones del BCU
    const soapRequest = `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:aws="http://aws.bcucotizaciones.uy/">
   <soapenv:Header/>
   <soapenv:Body>
      <aws:consultarCotizacionesActualizadas/>
   </soapenv:Body>
</soapenv:Envelope>`

    const response = await fetch(
      'https://cotizaciones.bcu.gub.uy/wscotizaciones/servlet/awsbcucotizaciones',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml; charset=UTF-8',
          'SOAPAction': '',
        },
        body: soapRequest,
      }
    )

    const xmlText = await response.text()
    console.log('BCU Response:', xmlText.substring(0, 500))

    const parser = new xml2js.Parser()
    const result = await parser.parseStringPromise(xmlText)

    // Extraer cotizaciones del XML parseado
    const extractCotizaciones = (parsedXml: any) => {
      const currencies: Record<string, any> = {}

      try {
        // Navegar a través de la estructura SOAP
        const envelope = parsedXml['soap:Envelope'] || parsedXml['soapenv:Envelope']
        const body = envelope['soap:Body'] || envelope['soapenv:Body']
        const response =
          body['aws:consultarCotizacionesActualizadasResponse'] ||
          body['aws:consultarCotizacionesResponse'] ||
          Object.values(body)[0]

        if (!response) {
          console.log('No response found in XML')
          return currencies
        }

        const items = response[0]?.return?.[0]?.item || []

        items.forEach((item: any) => {
          const moneda = item.moneda?.[0]
          const compra = parseFloat(item.compra?.[0] || 0)
          const venta = parseFloat(item.venta?.[0] || 0)

          if (moneda && ['USD', 'EUR', 'BRL', 'ARS'].includes(moneda)) {
            currencies[moneda] = { compra, venta }
          }
        })
      } catch (err) {
        console.error('Parse error:', err)
      }

      return currencies
    }

    const cotizaciones = extractCotizaciones(result)

    // Datos de fallback si no hay cotizaciones
    if (Object.keys(cotizaciones).length === 0) {
      return NextResponse.json({
        success: true,
        data: {
          USD: { compra: 43.50, venta: 44.00 },
          EUR: { compra: 47.20, venta: 47.80 },
          BRL: { compra: 8.20, venta: 8.40 },
          ARS: { compra: 0.41, venta: 0.43 },
        },
        timestamp: new Date().toISOString(),
        mock: true,
      })
    }

    return NextResponse.json({
      success: true,
      data: cotizaciones,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error fetching cotizaciones:', error)

    // Retornar datos mock en caso de error
    return NextResponse.json({
      success: true,
      data: {
        USD: { compra: 43.50, venta: 44.00 },
        EUR: { compra: 47.20, venta: 47.80 },
        BRL: { compra: 8.20, venta: 8.40 },
        ARS: { compra: 0.41, venta: 0.43 },
      },
      timestamp: new Date().toISOString(),
      mock: true,
    })
  }
}
