import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

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
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.5;
    font-family: Oxygen !important;
    strong {
      font-family: Oxygen !important;
      line-height: 1.5;

    }
  }
  h1 {
    font-size: 30px;
    line-height: 38px;
    margin-top: 1.25em;
  }
  h2 {
    font-size: 24px;
    margin-bottom:8px;
  }
  li,
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
  /* Enable horizontal scroll on code hi-light  element */
  deckgo-highlight-code{
    --deckgo-highlight-code-white-space: pre;
  }
  
`
