import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import client from '@/tina/__generated__/client';
import BlogPostClient from './client';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges || [];

  return posts.map((edge) => ({
    slug: edge?.node?._sys.filename || '',
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const result = await client.queries.post({
      relativePath: `${slug}.md`,
    });

    const post = result.data.post;

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title || '',
        description: post.description || '',
        type: 'article',
        images: post.featuredimage ? [post.featuredimage] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title || '',
        description: post.description || '',
        images: post.featuredimage ? [post.featuredimage] : [],
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const result = await client.queries.post({
      relativePath: `${slug}.md`,
    });

    return (
      <BlogPostClient
        query={result.query}
        variables={result.variables}
        data={result.data}
      />
    );
  } catch {
    notFound();
  }
}
