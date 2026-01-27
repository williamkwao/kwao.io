'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faMedium,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { format } from 'date-fns';
import type { PostSummary } from '@/lib/posts';

const social = [
  {
    link: 'https://github.com/williamkwao/',
    logo: faGithub,
  },
  {
    link: 'https://medium.com/@williamkwao',
    logo: faMedium,
  },
  {
    link: 'https://www.linkedin.com/in/wkwao/',
    logo: faLinkedin,
  },
  {
    link: 'https://www.instagram.com/therealkwao/',
    logo: faInstagram,
  },
  {
    link: 'https://twitter.com/therealkwao',
    logo: faTwitter,
  },
];

interface HomeContentProps {
  posts: PostSummary[];
}

export default function HomeContent({ posts }: HomeContentProps) {
  return (
    <HomePageStyled>
      <div className="landing">
        <div className="content">
          <div>
            <h2 className="title">William Kwao</h2>
            <p className="text">
              Software Engineer, minimalist & hustler. Previously @ Apple, Meta & Walmart.
            </p>
          </div>
          <div className="logos">
            {social.map((data, idx) => {
              return (
                <div className="row" key={idx}>
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={data.logo} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <RecentPostsSection>
        <h3 className="section-title">Recent Posts</h3>
        <div className="posts-list">
          {posts.map((post) => {
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
        </div>
        <div className="view-all">
          <Link href="/blog">View all posts →</Link>
        </div>
      </RecentPostsSection>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  font-family: var(--font-oxygen), 'Oxygen', sans-serif;
  .img-div {
    width: 100px;
    text-align: center;
    margin: auto;
    img {
      margin-bottom: 0px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    :visited {
      color: inherit;
    }
  }
  .landing {
    min-height: auto;
    padding-top: 60px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    .content {
      max-width: 600px;
      margin: auto;
    }
  }
  .title {
    font-family: var(--font-oxygen), 'Oxygen', sans-serif;
    font-style: normal;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.5;
  }

  .text {
    font-size: 18px;
    text-align: center;
    line-height: 31px;
    a {
      text-decoration: underline;
    }
  }
  .logos {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-items: center;
    max-width: 100%;
    flex-flow: row wrap;
    .row {
      padding: 15px;
      text-align: center;
    }
    svg {
      font-size: 35px;
    }
  }
  @media only screen and (min-width: 600px) {
    .title {
      font-size: 32px;
    }

    .text {
      font-size: 20px;
    }
    .logos {
      max-width: 800px;
      margin: auto;
      .row {
        min-width: unset;
      }
      svg {
        font-size: 40px;
      }
    }
  }
`;

const RecentPostsSection = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 60px;

  .section-title {
    font-family: var(--font-oxygen), 'Oxygen', sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 24px;
    color: rgba(0, 0, 0, 0.84);
  }

  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .view-all {
    margin-top: 32px;
    text-align: center;
    
    a {
      font-family: var(--font-oxygen), 'Oxygen', sans-serif;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.7);
      text-decoration: none;
      transition: color 0.2s ease;
      
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
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
    }

    .post-image {
      width: 200px;
      min-width: 200px;
      height: 140px;
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
