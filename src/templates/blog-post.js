import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/content"
import PreviewCompatibleImage from "../components/preview-compatible-image"
import styled from "styled-components"

export const BlogPostTemplate = props => {
  const {
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
    featuredimage,
    readingTime,
    date,
  } = props
  const PostContent = contentComponent || Content
  const FilledHelmet = helmet
  return (
    <BlogPostSection className="section">
      {FilledHelmet || ""}
      <div className="container content">
        <div className="">
          <div className="">
            <div className="header-text">
              <h1 className="title">{title}</h1>
              <p className="sub-title">{description}</p>
              <p className="time">
                {date} · {readingTime}
              </p>
            </div>

            {featuredimage ? (
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image for post ${title}`,
                }}
              />
            ) : null}
            <PostContent content={content} className="html-content" />
            {/*tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
                  ) : null*/}
          </div>
        </div>
      </div>
    </BlogPostSection>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredImage: PropTypes.object,
}

const BlogPostSection = styled.section`
  padding-top: 48px;
  .header-text,
  .html-content {
    max-width: 680px;
    margin: auto;
    margin-top: 42px;
  }
  .title {
    font-size: 30px;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 4px;
  }
  .sub-title {
    color: rgba(0, 0, 0, 0.54);
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .time {
    font-size: 16px;
  }
`

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        readingTime={post.fields.readingTime.text}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              name="og:image"
              content={
                post.frontmatter.featuredimage?.childImageSharp?.fluid?.src
              }
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 630, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
