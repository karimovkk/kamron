const API = process.env.NEXT_PUBLIC_API_URL!;

export type Post = {
  id: string;
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt?: string;
  desc?: string;
  content?: string;
  cover?: string;
  locale?: string;
  published?: boolean;
};

export async function getPosts(locale: string): Promise<Post[]> {
  const url1 = `${API}/posts?locale=${locale}&published=true&sortBy=date&order=desc`;
  const res1 = await fetch(url1, { next: { revalidate: 60 } });
  const data1: Post[] = res1.ok ? await res1.json() : [];

  if (data1.length) return data1;

  const url2 = `${API}/posts?published=true&sortBy=date&order=desc`;
  const res2 = await fetch(url2, { next: { revalidate: 60 } });
  if (!res2.ok) return [];
  return res2.json();
}