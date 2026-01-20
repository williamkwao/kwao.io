import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';
import { getAllPosts } from '@/lib/posts';

const description =
  "I love to write about tech & everything around it. You can blame my parents for my views and opinions, not my current Employer.";

export const metadata: Metadata = {
  title: 'Blog',
  description: description,
  openGraph: {
    title: 'Blog',
    description: description,
    type: 'website',
    images: [
      {
        url: '/api/og?title=Blog&description=Thoughts%20on%20tech%20%26%20everything%20around%20it&type=blog',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog',
    description: description,
    images: ['/api/og?title=Blog&description=Thoughts%20on%20tech%20%26%20everything%20around%20it&type=blog'],
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogPageClient posts={posts} description={description} />;
}
