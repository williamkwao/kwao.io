import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Confirm = () => {
  return (
    <Layout>
      <ConfirmStyles>
        <h1>Just one more thing...</h1>
        <p>
          Thank you for subscribing. Check your inbox and
          confirm your subscription.
        </p>
      </ConfirmStyles>
    </Layout>
  )
}

const ConfirmStyles = styled.div`
  padding-top: 20px;
  max-width: 670px;
  margin: auto;
  font-family: 'Oxygen' !important
`

export default Confirm
