"use client"

import { useEffect, useState } from "react"
import { Cloud, CloudRain, Sun, CloudSnow, Wind } from "lucide-react"

interface WeatherData {
  temp: number
  condition: string
  description: string
  humidity: number
  windSpeed: number
  icon: string
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "http://api.openweathermap.org/data/2.5/weather?q=Nueva Palmira,UY&appid=57d99c42b1b55993131a44e01e964001&units=metric&lang=es"
        )
        const data = await response.json()

        if (data.cod === 200) {
          setWeather({
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
            icon: data.weather[0].icon,
          })
        }
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
      }
    }

    fetchWeather()
    // Refresh every 10 minutes
    const interval = setInterval(fetchWeather, 600000)
    return () => clearInterval(interval)
  }, [])

  const getWeatherIcon = () => {
    if (!weather) return null

    const iconMap: { [key: string]: React.ReactNode } = {
      "01d": <Sun className="h-5 w-5 text-yellow-400" />,
      "01n": <Sun className="h-5 w-5 text-gray-300" />,
      "02d": <Cloud className="h-5 w-5 text-gray-300" />,
      "02n": <Cloud className="h-5 w-5 text-gray-400" />,
      "03d": <Cloud className="h-5 w-5 text-gray-400" />,
      "03n": <Cloud className="h-5 w-5 text-gray-500" />,
      "04d": <Cloud className="h-5 w-5 text-gray-500" />,
      "04n": <Cloud className="h-5 w-5 text-gray-600" />,
      "09d": <CloudRain className="h-5 w-5 text-blue-400" />,
      "09n": <CloudRain className="h-5 w-5 text-blue-400" />,
      "10d": <CloudRain className="h-5 w-5 text-blue-500" />,
      "10n": <CloudRain className="h-5 w-5 text-blue-500" />,
      "11d": <CloudRain className="h-5 w-5 text-purple-500" />,
      "11n": <CloudRain className="h-5 w-5 text-purple-500" />,
      "13d": <CloudSnow className="h-5 w-5 text-blue-200" />,
      "13n": <CloudSnow className="h-5 w-5 text-blue-300" />,
      "50d": <Wind className="h-5 w-5 text-gray-400" />,
      "50n": <Wind className="h-5 w-5 text-gray-500" />,
    }

    return iconMap[weather.icon] || <Cloud className="h-5 w-5" />
  }

  if (loading || error) return null

  if (!weather) return null

  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors cursor-default">
      <div className="flex items-center gap-1.5">
        {getWeatherIcon()}
        <span className="text-sm font-medium whitespace-nowrap">
          {weather.temp}°C
        </span>
      </div>
      <span className="hidden sm:inline text-xs text-primary-foreground/70 capitalize">
        {weather.description}
      </span>
    </div>
  )
}
