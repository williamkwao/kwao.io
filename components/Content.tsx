'use client';

import styled from 'styled-components';

interface ContentProps {
  content: string;
  className?: string;
}

export const HTMLContent = ({ content, className }: ContentProps) => (
  <ContentDiv
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content, className }: ContentProps) => (
  <ContentDiv className={className}>{content}</ContentDiv>
);

export const ContentDiv = styled.div`
  color: rgba(0, 0, 0, 0.84);
  a {
    color: inherit;
    :visited {
      color: inherit;
    }
  }
  *,
  ul,
  li {
    font-family: var(--font-mulish), 'Muli', sans-serif !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.5;
    font-family: var(--font-oxygen), 'Oxygen', sans-serif !important;
    strong {
      font-family: var(--font-oxygen), 'Oxygen', sans-serif !important;
      line-height: 1.5;
    }
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
  li,
  p {
    line-height: 32px;
    font-family: var(--font-mulish), 'Muli', sans-serif !important;
  }

  hr {
    background: transparent;
    margin-top: 40px;
    margin-bottom: 42px;
    font-size: 28px;
    text-align: center;
    font-weight: 300;
    box-sizing: inherit;
    border: none;
    ::before {
      font-style: italic;
      line-height: 1.4;
      font-style: italic;
      letter-spacing: 0.6em;
      content: '...';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
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
`;

export default Content;
