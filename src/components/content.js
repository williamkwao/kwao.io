import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export const HTMLContent = ({ content, className }) => (
  <ContentDiv
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const Content = ({ content, className }) => (
  <ContentDiv className={className}>{content}</ContentDiv>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes
export default Content

const ContentDiv = styled.div`
  color: rgba(0, 0, 0, 0.84);
  a {
    color: inherit;
    :visited {
      color: inherit;
    }
  }
  *,
  ul,
  li {
    font-family: "Muli" !important;
  }
  h1 {
    font-size: 36px;
    line-height: 38px;
    margin-top: 1.25em;
  }
  p {
    line-height: 32px;
    font-family: "Muli" !important;
  }

  hr {
    background: transparent;
    margin-top: 40px;
    margin-bottom: 42px;
    font-size: 28px;
    text-align: center;
    font-weight: 300;
    box-sizing: inherit;
    border: none;
    ::before {
      font-style: italic;
      line-height: 1.4;
      font-style: italic;
      letter-spacing: 0.6em;
      content: "...";
      display: inline-block;
      vertical-align: middle;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 600px) {
     p{
       font-size: 21px;
       line-height: 33px;
     }
  }
`
