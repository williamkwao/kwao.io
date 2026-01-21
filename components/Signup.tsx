'use client';

import Script from 'next/script';

const Signup = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Script
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="lazyOnload"
      />
      <iframe
        src="https://subscribe-forms.beehiiv.com/77d0d030-dc99-433a-8215-730f020173ee"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        style={{
          width: '560px',
          height: '315px',
          margin: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          maxWidth: '100%',
        }}
      />
    </div>
  );
};

export default Signup;
