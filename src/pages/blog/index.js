import React from "react"

import Layout from "../../components/layout"
import BlogRoll from "../../components/blog-roll"
import styled from "styled-components"
import { Helmet } from "react-helmet"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Blog posts" />
        <BlogPage>
          <div className="header">
            <h1>Latest Posts</h1>
          </div>
          <section className="section">
            <div className="content">
              <BlogRoll />
            </div>
          </section>
        </BlogPage>
      </Layout>
    )
  }
}

const BlogPage = styled.div`
  .header {
    text-align: center;
    padding: 15px;
  }
  .content {
    max-width: 650px;
    margin: auto;
  }
`
