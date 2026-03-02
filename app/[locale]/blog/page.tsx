import BlogClient from "./components/BlogClient";
import { getPosts } from "./components/GetData";

export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = await getPosts(locale);
  return <BlogClient posts={posts} locale={locale} />;
}