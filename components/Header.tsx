'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface HeaderProps {
  siteTitle?: string;
}

const Header = ({ siteTitle = '' }: HeaderProps) => (
  <StyledHeader>
    <div>
      <Link href="/">{siteTitle}</Link>
    </div>

    <ul>
      <li>
        <a
          href="https://anchor.fm/saucecontrol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Podcast
        </a>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  </StyledHeader>
);

const StyledHeader = styled.header`
  font-family: var(--font-oxygen), 'Oxygen', sans-serif;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 18px;
  font-size: 19px;
  .title {
    margin: 0px;
    font-family: var(--font-oxygen), 'Oxygen', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0px;
  }
  li {
    text-decoration: none;
    display: inline-block;
    margin: 0px;
    margin-left: 18px;
  }
`;

export default Header;
