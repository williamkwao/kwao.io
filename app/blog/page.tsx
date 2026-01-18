import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';
import { getAllPosts } from '@/lib/posts';

const description =
  "I love to write about tech & everything around it. You can blame my parents for my views and opinions, not my current Employer.";

export const metadata: Metadata = {
  title: 'Blogs by William Kwao',
  description: description,
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogPageClient posts={posts} description={description} />;
}
