import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>

    <ul>
      <li>
        <a href="https://anchor.fm/saucecontrol" target="_blank" rel="noopener noreferrer">
          Podcast
        </a>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
  font-family: "Oxygen";
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 18px;
  font-size: 19px;
  .title {
    margin: 0px;
    font-family: "Oxygen";
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0px;
  }
  li {
    text-decoration: none;
    display: inline-block;
    margin: 0px;
    margin-left: 18px;
  }
`

export default Header
