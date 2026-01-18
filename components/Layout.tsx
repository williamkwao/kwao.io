'use client';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header siteTitle="kwao.io" />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.45rem',
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
