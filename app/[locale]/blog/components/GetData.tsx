export type Post = {
  id?: string;
  slug: string;
  title: string;
  desc?: string;
  excerpt?: string;
  category: string;
  date: string;
};

const API = "https://69a5d20c885dcb6bd6a96563.mockapi.io/posts";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normPost(x: any): Post {
  const rawSlug = String(x?.slug ?? "").trim();
  const rawTitle = String(x?.title ?? "post").trim();

  const slug =
    rawSlug ||
    (x?.id ? `${slugify(rawTitle)}-${String(x.id)}` : slugify(rawTitle)) ||
    "post";

  return {
    id: x?.id ? String(x.id) : undefined,
    slug,
    title: rawTitle || "Untitled",
    desc: x?.desc ? String(x.desc) : undefined,
    excerpt: x?.excerpt ? String(x.excerpt) : undefined,
    category: String(x?.category ?? "General"),
    date: String(x?.date ?? new Date().toISOString().slice(0, 10))
  };
}

export async function getPosts(locale: string): Promise<Post[]> {
  try {
    const res = await fetch(API, { cache: "no-store" });
    if (!res.ok) return [];

    const data = await res.json();
    const list = Array.isArray(data)
      ? data
      : Array.isArray(data?.items)
      ? data.items
      : [];

    const posts = list.map(normPost);

    return JSON.parse(JSON.stringify(posts));
  } catch {
    return [];
  }
}