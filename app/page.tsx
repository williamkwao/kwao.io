import Layout from '@/components/Layout';
import { getAllPosts } from '@/lib/posts';
import HomeContent from '@/components/HomeContent';

export default async function HomePage() {
  const allPosts = await getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <Layout>
      <HomeContent posts={recentPosts} />
    </Layout>
  );
}

