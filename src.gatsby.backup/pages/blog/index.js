import React from "react"

import Layout from "../../components/layout"
import BlogRoll from "../../components/blog-roll"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import SEO from "../../components/seo"

const description =
  "I love to write about tech & everything around it. You can blame my parents for my views and opinions, not my current Employer."
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Blogs by William Kwao" description={description} />
        <BlogPage>
          <div className="header">
            <h3>Latest Posts</h3>
            <p>{description}</p>
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
  font-family: "Muli";
  padding-top: 46px;
  .header {
    max-width: 650px;
    margin: auto;
    text-align: left;
    padding: 15px 0px;

    h3 {
      /* margin-bottom: 5px; */
      font-size: 18px;
    }
  }
  .content {
    max-width: 650px;
    margin: auto;
    font-weight: lighter;
  }
`
