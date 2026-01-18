'use client';

import styled from 'styled-components';
import Layout from '@/components/Layout';

export default function ConfirmPage() {
  return (
    <Layout>
      <ConfirmStyles>
        <h1>Just one more thing...</h1>
        <p>
          Thank you for subscribing. Check your inbox and confirm your
          subscription.
        </p>
      </ConfirmStyles>
    </Layout>
  );
}

const ConfirmStyles = styled.div`
  padding-top: 20px;
  max-width: 670px;
  margin: auto;
  font-family: var(--font-oxygen), 'Oxygen', sans-serif !important;
`;
