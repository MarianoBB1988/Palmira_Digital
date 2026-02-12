import Image from "next/image"
import Link from "next/link"
import { newsData } from "@/lib/news-data"

export function HeroSection() {
  const featured = newsData.find((n) => n.featured)
  const sideStories = newsData.slice(1, 4)

  if (!featured) return null

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main featured story */}
        <div className="lg:col-span-2">
          <Link href="#" className="group block">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="mb-2 inline-block rounded bg-secondary px-2 py-1 text-xs font-bold uppercase text-secondary-foreground">
                  Destacado
                </span>
                <h2 className="font-serif text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl text-balance">
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm text-white/80 md:text-base">
                  {featured.description}
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Side stories */}
        <div className="flex flex-col gap-4">
          {sideStories.map((story) => (
            <SideStory
              key={story.id}
              image={story.image}
              category={story.category}
              title={story.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SideStory({
  image,
  category,
  title,
}: {
  image: string
  category: string
  title: string
}) {
  return (
    <Link href="#" className="group flex gap-3">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xs font-semibold uppercase text-secondary">
          {category}
        </span>
        <h3 className="font-serif text-sm font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  )
}
