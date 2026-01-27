'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { format } from 'date-fns';
import type { PostSummary } from '@/lib/posts';

interface BlogRollProps {
  posts: PostSummary[];
}

const BlogRoll = ({ posts }: BlogRollProps) => {
  return (
    <PostsList>
      {posts &&
        posts.map((post) => {
          const formattedDate = post.date
            ? format(new Date(post.date), 'MMMM dd, yyyy')
            : '';

          return (
            <PostCard key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="post-inner">
                  {post.featuredimage && (
                    <div className="post-image">
                      <img
                        src={post.featuredimage}
                        alt={`${post.title}`}
                      />
                    </div>
                  )}
                  <div className="post-content">
                    <p className="post-meta">
                      {formattedDate} · {post.readingTime}
                    </p>
                    <h4 className="post-title">{post.title}</h4>
                    <p className="post-description">{post.description}</p>
                  </div>
                </div>
              </Link>
            </PostCard>
          );
        })}
    </PostsList>
  );
};

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostCard = styled.article`
  font-family: var(--font-mulish), 'Muli', sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
    transform: translateY(-2px);
  }

  a {
    text-decoration: none;
    color: inherit;
    
    &:visited {
      color: inherit;
    }
  }

  .post-inner {
    display: flex;
    flex-direction: column;
  }

  .post-image {
    width: 100%;
    height: 160px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post-content {
    padding: 16px 20px;
  }

  .post-meta {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 8px;
  }

  .post-title {
    font-family: var(--font-oxygen), 'Oxygen', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.84);
  }

  .post-description {
    font-size: 15px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media only screen and (min-width: 600px) {
    .post-inner {
      flex-direction: row;
      align-items: stretch;
    }

    .post-image {
      width: 200px;
      min-width: 200px;
      height: auto;
      min-height: 140px;
    }

    .post-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .post-title {
      font-size: 18px;
    }

    .post-description {
      font-size: 14px;
    }
  }
`;

export default BlogRoll;
