import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import client from '@/tina/__generated__/client';
import BlogPostClient from './client';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static pages for all blog posts at build time
export async function generateStaticParams() {
  const posts = await client.queries.postConnection();
  return (
    posts.data.postConnection.edges?.map((edge) => ({
      slug: edge?.node?._sys.filename,
    })) || []
  );
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
