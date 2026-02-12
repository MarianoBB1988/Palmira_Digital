import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { newsData } from "@/lib/news-data"

export function LatestNews() {
  const articles = newsData.slice(0, 6).map((article) => ({
    image: article.image,
    category: article.category,
    title: article.title,
    excerpt: article.description,
    time: new Date(article.date).toLocaleDateString("es-UY", {
      day: "numeric",
      month: "long",
    }),
  }))
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-secondary" />
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Ultimas Noticias
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link href="#" key={article.title} className="group">
            <article className="overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-primary px-2 py-0.5 text-xs font-bold uppercase text-primary-foreground">
                  {article.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold leading-snug text-card-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{article.time}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
