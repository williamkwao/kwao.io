import React, { useState } from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import {
  faInstagram,
  faMedium,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"
import ReactModal from "react-modal"
import Signup from "../components/signup/signup"
import { Link } from "gatsby"

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <HomePage>
        <SEO title="William Kwao" />
        <div className="landing">
          <div className="content">
            <div>
              <h2 className="title">William Kwao</h2>
              <p className="text">
                Software Engineer, minimalist & side-project junkie. Currently
                working @ Facebook & hustling on{" "}
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
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={data.logo} />
                    </a>
                  </div>
                )
              })}
            </div>
            <div className="actions">
              <ActionButton
                onClick={() => {
                  setIsModalOpen(true)
                }}
              >
                SUBSCRIBE
              </ActionButton>
              <Link to="/blog">
                <ActionButton>BLOG</ActionButton>
              </Link>
            </div>
          </div>
        </div>
      </HomePage>
      <ReactModal
        isOpen={isModalOpen}
        closeTimeoutMS={500}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'rgba(0,0,0,0.3)'
          },
          content: {
            position: "relative",
            border: "1px solid #ccc",
            right: 0,
            left: 0,
            bottom: 0,
            top: 0,
          },
        }}
      >
        <div className="signup-modal">
          <div style={{ textAlign: "right" }}>
            <ClearButton onClick={() => setIsModalOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </ClearButton>
          </div>
          <Signup />
        </div>
      </ReactModal>
    </Layout>
  )
}

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
  .actions {
    text-align: center;
    margin-top: 23px;
    button {
      margin: 10px;
      margin-top: 0px;
      width: 120px;
    }
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

const ActionButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.8);
  background: transparent;
  border-radius: 8px;
  font-size: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
`

const ClearButton = styled.button`
  background: transparent;
  border: none;
`
export default IndexPage
