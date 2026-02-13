import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { ScrollToTop } from '@/components/scroll-to-top'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Palmira Digital - Noticias de Nueva Palmira, Colonia, Uruguay',
  description:
    'Portal de noticias de Nueva Palmira, departamento de Colonia, Uruguay. Informacion local, departamental y nacional actualizada.',
}

export const viewport: Viewport = {
  themeColor: '#2a5a8a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${_inter.variable} ${_merriweather.variable} font-sans antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
