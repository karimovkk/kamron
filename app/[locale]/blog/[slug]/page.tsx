import { notFound } from "next/navigation"
import { getPostBySlug, getPosts } from "../components/GetData"

export async function generateStaticParams() {
  const posts = await getPosts("uz")

  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = await getPostBySlug(locale, slug)

  if (!post) notFound()

  return (
    <main className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 -z-20 bg-[#0B1220]" />
      <div className="absolute inset-0 -z-10 hero-radial opacity-70" />

      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-white/10 bg-[#07142A]/35 p-8 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-sky-300">
              {post.category}
            </span>
            <span className="text-xs text-slate-400">{post.date}</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-300">
            {post.desc || post.excerpt || "Post content yo‘q"}
          </p>
        </div>
      </div>
    </main>
  )
}