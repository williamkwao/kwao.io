import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./preview-compatible-image"
import styled from "styled-components"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <ArticleCard
              className={`${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
              key={post.id}
            >
              <Link
                className=""
                to={post.fields.slug}
              >
                <div className="inner">
                  <header>
                    <p>{post.frontmatter.date}</p>
                    {post.frontmatter.featuredimage ? (
                      <div className="thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}

                    <h2 className="title">{post.frontmatter.title}</h2>
                  </header>
                  <p>{post.frontmatter.description}</p>
                </div>
              </Link>
            </ArticleCard>
          ))}
      </div>
    )
  }
}

const ArticleCard = styled.article`
  /* padding: 16px; */
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  border-radius: 5px;
  a {
    :visited {
      color: inherit;
    }
    text-decoration: none;
    color: inherit;
  }
  .inner{
      padding: 16px;
  }
  .title{
      line-height: 36px;
      font-size: 28px;
      font-style: normal;
      margin-bottom: 6px;
  } 
  .thumbnail {
    object-fit: cover;
    .img {
      max-height: 180px !important;
    }
    margin-bottom: 16px;
  }
`
BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
