'use client';

import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import styled from 'styled-components';

interface CodeBlockProps {
  children?: string;
  lang?: string;
}

export default function CodeBlock({ children, lang }: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);
  const code = typeof children === 'string' ? children : '';

  useEffect(() => {
    if (!code) return;

    codeToHtml(code, {
      lang: lang || 'text',
      theme: 'github-dark',
    })
      .then(setHtml)
      .catch(() => {
        // Fallback for unsupported languages
        codeToHtml(code, {
          lang: 'text',
          theme: 'github-dark',
        }).then(setHtml);
      });
  }, [code, lang]);

  if (!html) {
    // Show unstyled code while loading
    return (
      <pre>
        <code>{code}</code>
      </pre>
    );
  }

  return <CodeBlockWrapper dangerouslySetInnerHTML={{ __html: html }} />;
}

const CodeBlockWrapper = styled.div`
  margin: 1.5em 0;

  pre {
    padding: 1.25rem;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 0.875rem;
    line-height: 1.6;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas,
      'Liberation Mono', monospace;
    background: none !important;
    padding: 0 !important;
  }
`;
