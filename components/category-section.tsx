import Link from "next/link"
import { Clock, TrendingUp, Users, Landmark, Palette, Dumbbell, Sprout, Newspaper } from "lucide-react"
import { newsData } from "@/lib/news-data"

const categoryIcons: Record<string, any> = {
  "Política": Landmark,
  "Deportes": Dumbbell,
  "Cultura": Palette,
  "Economía": TrendingUp,
  "Educación": Users,
  "Ambiente": Sprout,
  "Opinión": Newspaper,
  "Turismo": Landmark,
  "Salud": Users,
}

export function CategorySection() {
  // Agrupar noticias por categoría
  const groupedByCategory: Record<string, typeof newsData> = {}
  newsData.forEach((news) => {
    if (!groupedByCategory[news.category]) {
      groupedByCategory[news.category] = []
    }
    groupedByCategory[news.category].push(news)
  })

  const categoryNews = Object.entries(groupedByCategory)
    .slice(0, 4)
    .map(([category, articles]) => ({
      icon: categoryIcons[category] || Landmark,
      category,
      articles: articles.slice(0, 3).map((art) => ({
        title: art.title,
        time: new Date(art.date).toLocaleDateString("es-UY", {
          day: "numeric",
          month: "short",
        }),
      })),
    }))
  return (
    <section className="bg-muted py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-primary" />
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Por Secciones
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryNews.map((cat) => (
            <div
              key={cat.category}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <cat.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {cat.category}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {cat.articles.map((article) => (
                  <li key={article.title}>
                    <Link
                      href="#"
                      className="group block border-b border-border pb-3 last:border-0 last:pb-0"
                    >
                      <h4 className="text-sm font-medium leading-snug text-card-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{article.time}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
