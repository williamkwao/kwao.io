'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { format } from 'date-fns';
import type { PostSummary } from '@/lib/posts';

interface BlogRollProps {
  posts: PostSummary[];
}

const BlogRoll = ({ posts }: BlogRollProps) => {
  return (
    <div>
      {posts &&
        posts.map((post) => {
          const formattedDate = post.date
            ? format(new Date(post.date), 'MMMM dd, yyyy')
            : '';

          return (
            <ArticleCard
              className={`${post.featuredpost ? 'is-featured' : ''}`}
              key={post.slug}
            >
              <Link className="" href={`/blog/${post.slug}`}>
                <div className="inner">
                  <header>
                    <div className="header-text">
                      <p>
                        {formattedDate} · {post.readingTime}
                      </p>
                    </div>
                    {post.featuredimage ? (
                      <div className="thumbnail">
                        <img
                          src={post.featuredimage}
                          alt={`featured image thumbnail for post ${post.title}`}
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '180px',
                            objectFit: 'cover',
                            borderRadius: '5px',
                          }}
                        />
                      </div>
                    ) : null}

                    <h2 className="title">{post.title}</h2>
                  </header>
                  <p>{post.description}</p>
                </div>
              </Link>
            </ArticleCard>
          );
        })}
    </div>
  );
};

const ArticleCard = styled.article`
  font-family: var(--font-mulish), 'Muli', sans-serif !important;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  border-radius: 5px;
  margin-bottom: 24px;
  a {
    :visited {
      color: inherit;
    }
    text-decoration: none;
    color: inherit;
  }
  .inner {
    padding: 16px;
  }
  .title {
    line-height: 36px;
    font-size: 28px;
    font-style: normal;
    margin-bottom: 6px;
  }
  .thumbnail {
    object-fit: cover;
    .img {
      max-height: 180px !important;
      border-radius: 5px;
    }
    margin-bottom: 16px;
  }

  p {
    color: rgba(0, 0, 0, 0.54);
  }
  .header-text {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    p {
      margin-bottom: 16px;
    }
  }
`;

export default BlogRoll;
