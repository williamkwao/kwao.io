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
            <h2 className="title">William Kwao</h2>
            <p className="text">
              Software Enginner, minimalist & side-project junkie. Currently
              working{" "}
              <a
                href="https://www.walmartlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @walmartlabs
              </a>{" "}
              & hustling on{" "}
              <a
                href="https://fedup.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                fedup.co
              </a>
              .
            </p>
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
  font-family: Oxygen;
  .img-div {
    width: 100px;
    text-align: center;
    margin: auto;
    img {
      margin-bottom: 0px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    :visited {
      color: inherit;
    }
  }
  .landing {
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    .content {
      max-width: 600px;
      margin: auto;
    }
  }
  .title {
    font-family: Oxygen;
    font-style: normal;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.5;
  }

  .text {
    font-size: 18px;
    text-align: center;
    line-height: 31px;
    a {
      text-decoration: underline;
    }
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
      padding: 15px;
      text-align: center;
    }
    svg {
      font-size: 35px;
    }
  }
  .call-to-action {
    text-align: center;
    margin-top: 20px;
  }
  @media only screen and (min-width: 600px) {
    .title {
      font-size: 32px;
    }

    .text {
      font-size: 20px;
    }
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
