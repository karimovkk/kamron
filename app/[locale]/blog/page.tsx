import BlogClient from "./components/BlogClient";
import { getPosts } from "./components/GetData";

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const posts = await getPosts(locale);
  return <BlogClient posts={posts} locale={locale} />;
}