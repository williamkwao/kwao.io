import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { maxWidth: '100%', maxHeight: '100%'}
  const { alt = "", childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className= "img"
        objectFit="cover"
        objectPosition="50% 50%"
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img
        objectFit="contain"
        style={imageStyle}
        fluid={childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={alt}
        className="img"
      />
    )
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt}  className="img"/>

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
