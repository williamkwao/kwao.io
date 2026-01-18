'use client';

import styled from 'styled-components';
import Layout from '@/components/Layout';
import BlogRoll from '@/components/BlogRoll';
import type { PostSummary } from '@/lib/posts';

interface BlogPageClientProps {
  posts: PostSummary[];
  description: string;
}

export default function BlogPageClient({
  posts,
  description,
}: BlogPageClientProps) {
  return (
    <Layout>
      <BlogPageStyled>
        <div className="header">
          <h3>Latest Posts</h3>
          <p>{description}</p>
        </div>
        <section className="section">
          <div className="content">
            <BlogRoll posts={posts} />
          </div>
        </section>
      </BlogPageStyled>
    </Layout>
  );
}

const BlogPageStyled = styled.div`
  font-family: var(--font-mulish), 'Muli', sans-serif;
  padding-top: 46px;
  .header {
    max-width: 650px;
    margin: auto;
    text-align: left;
    padding: 15px 0px;

    h3 {
      font-size: 18px;
    }
  }
  .content {
    max-width: 650px;
    margin: auto;
    font-weight: lighter;
  }
`;
