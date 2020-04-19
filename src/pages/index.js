import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faMedium,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <HomePage>
      <SEO title="Kwao" />
      <div className="landing">
        <div className="content">
          <div>
            <h2 className="title">
              I’m a Software Engineer, Builder & Minimalist living in the DC
              Metro Area
            </h2>
          </div>
          <div className="logos">
            {social.map((data, idx) => {
              return (
                <div className="row" key={idx}>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={data.logo} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </HomePage>
  </Layout>
)

const social = [
  {
    link: "https://github.com/williamkwao/",
    logo: faGithub,
  },
  {
    link: "https://medium.com/@williamkwao",
    logo: faMedium,
  },
  {
    link: "https://www.linkedin.com/in/wkwao/",
    logo: faLinkedin,
  },

  {
    link: "https://www.instagram.com/therealkwao/",
    logo: faInstagram,
  },
  {
    link: "https://twitter.com/therealkwao",
    logo: faTwitter,
  },
]

const links = {
  githhub: "https://github.com/williamkwao/",
  medium: "https://medium.com/@williamkwao",
  linkedIn: "https://www.linkedin.com/in/wkwao/",
  instagram: "https://www.instagram.com/therealkwao/",
  twitter: "https://twitter.com/therealkwao",
}
const HomePage = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    :visited {
      color: inherit;
    }
  }
  .landing {
    min-height: calc(100vh - 75px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    .content {
      max-width: 700px;
      margin: auto;
    }
  }
  .title {
    font-family: Oxygen;
    font-style: normal;
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.5;
  }
  .logos {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-items: center;
    max-width: 100%;
    flex-flow: row wrap;
    .row {
      min-width: 30%;
      padding: 15px;
      margin: 4px;
      text-align: center;
    }
    svg {
      font-size: 50px;
    }
  }

  @media only screen and (min-width: 600px) {
    .logos {
      max-width: 800px;
      margin: auto;
      .row {
        min-width: unset;
      }
      svg {
        font-size: 40px;
      }
    }
  }
`
export default IndexPage
