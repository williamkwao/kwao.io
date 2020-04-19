import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h2 className="title">
        <Link to="/">{siteTitle}</Link>
      </h2>
    </div>

    <ul>
      <li>
        <Link to="/blog">BLOG</Link>
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
    margin-left: 8px;
  }
`

export default Header
