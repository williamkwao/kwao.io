import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import client from '@/tina/__generated__/client';
import BlogPostClient from './client';

// Force dynamic rendering until Tina Cloud indexes the schema
export const dynamic = 'force-dynamic';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// generateStaticParams removed temporarily - will be restored once Tina Cloud indexes the schema
// This makes pages render dynamically at request time instead of build time

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const result = await client.queries.post({
      relativePath: `${slug}.md`,
    });

    const post = result.data.post;

    const ogImageUrl = `/api/og?title=${encodeURIComponent(post.title || '')}&description=${encodeURIComponent(post.description || '')}&type=post`;

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title || '',
        description: post.description || '',
        type: 'article',
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title || '',
        description: post.description || '',
        images: [ogImageUrl],
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
