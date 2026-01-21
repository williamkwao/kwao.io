'use client';

import { useTina } from 'tinacms/dist/react';
import styled from 'styled-components';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import Signup from '@/components/Signup';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface BlogPostClientProps {
  query: string;
  variables: { relativePath: string };
  data: any;
}

export default function BlogPostClient(props: BlogPostClientProps) {
  // This enables live editing - data updates as you type in the CMS
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post = data.post;
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
                <p className="time">{formattedDate}</p>
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
              <div className="html-content">
                <TinaMarkdown
                  content={post.body}
                  components={{
                    hr: () => <div className="divider">•  •  •</div>,
                    thematic_break: () => <div className="divider">•  •  •</div>,
                  }}
                />
              </div>
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

  .html-content {
    color: rgba(0, 0, 0, 0.84);

    a {
      color: inherit;
    }

    h1, h2, h3, h4, h5 {
      line-height: 1.5;
      font-family: var(--font-oxygen), 'Oxygen', sans-serif;
    }

    h1 {
      font-size: 30px;
      line-height: 38px;
      margin-top: 1.25em;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    p, li {
      line-height: 32px;
      font-family: var(--font-mulish), 'Muli', sans-serif;
    }

    pre {
      background: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      padding: 1.45rem;
      overflow: auto;
    }

    code {
      font-size: 0.85rem;
      background-color: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      padding: 0.2em 0.4em;
    }

    pre code {
      background: none;
      padding: 0;
    }

    hr {
      border: none;
      margin-top: 48px;
      margin-bottom: 48px;
      margin-left: auto;
      margin-right: auto;
      width: 100px;
      height: 1px;
      background-color: #000000;
      display: block;
    }

    .divider {
      text-align: center;
      margin: 48px 0;
      letter-spacing: 0.5em;
      color: #999999;
    }
  }

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
