'use client'

import { useEffect } from 'react'

interface GoogleAdSenseProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  fullWidth?: boolean
}

export function GoogleAdSense({
  adSlot,
  adFormat = 'auto',
  fullWidth = false,
}: GoogleAdSenseProps) {
  useEffect(() => {
    // Cargar el script de Google AdSense
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx'
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)

    // Push ads después de cargar el script
    try {
      ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
      ;(window as any).adsbygoogle.push({})
    } catch (err) {
      console.log('AdSense error:', err)
    }
  }, [])

  return (
    <div
      className={`my-6 ${fullWidth ? 'w-full' : 'flex justify-center'}`}
      style={{
        minHeight: adFormat === 'rectangle' ? '300px' : 'auto',
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          minHeight: '100px',
        }}
        data-ad-layout={adFormat}
        data-ad-format={adFormat}
        data-ad-slot={adSlot}
        data-full-width-responsive={fullWidth}
      />
    </div>
  )
}

export default GoogleAdSense
