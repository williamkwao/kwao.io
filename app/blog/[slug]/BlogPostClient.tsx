'use client';

import styled from 'styled-components';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import { HTMLContent } from '@/components/Content';
import Signup from '@/components/Signup';
import type { Post } from '@/lib/posts';

interface BlogPostClientProps {
  post: Post;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const formattedDate = post.date
    ? format(new Date(post.date), 'MMMM dd, yyyy')
    : '';

  return (
    <Layout>
      <BlogPostSection className="section">
        <div className="container content">
          <div className="">
            <div className="">
              <div className="header-text">
                <h1 className="title">{post.title}</h1>
                <p className="sub-title">{post.description}</p>
                <p className="time">
                  {formattedDate} · {post.readingTime}
                </p>
              </div>

              {post.featuredimage ? (
                <img
                  src={post.featuredimage}
                  alt={`featured image for post ${post.title}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '0px',
                  }}
                />
              ) : null}
              <HTMLContent content={post.htmlContent} className="html-content" />
            </div>
          </div>
          <Signup />
        </div>
      </BlogPostSection>
    </Layout>
  );
}

const BlogPostSection = styled.section`
  padding-top: 16px;
  padding-bottom: 40px;
  .header-text,
  .html-content {
    max-width: 630px;
    margin: auto;
    margin-top: 42px;
  }

  .header-text {
    margin-top: 14px;
  }
  .title {
    font-size: 30px;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 4px;
  }
  .sub-title {
    color: rgba(0, 0, 0, 0.54);
    font-size: 18px;
    line-height: 24px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .img {
    max-width: 680px !important;
    margin: auto;
  }
  .time {
    font-size: 16px;
  }

  /* Mobile only */
  @media only screen and (max-width: 768px) {
    .html-content img {
      width: calc(100vw);
      position: relative;
      right: 50%;
      left: 50%;
      margin-right: -50vw;
      margin-left: -50vw;
      max-width: unset;
    }
  }
`;
