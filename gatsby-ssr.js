/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react')

// Fix for Node 18 compatibility with Gatsby 2 SSR
// Ensure charset meta tag is present to prevent querySelector errors
exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  // Set HTML attributes including lang
  setHtmlAttributes({ lang: 'en' })
  
  // Ensure charset meta tag is in head components
  setHeadComponents([
    React.createElement('meta', { key: 'charset', charSet: 'utf-8' }),
  ])
}

// Also ensure charset is present during pre-render
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  
  // Ensure charset meta tag exists
  const hasCharset = headComponents.some(
    component => 
      component && 
      component.type === 'meta' && 
      component.props && 
      component.props.charSet
  )
  
  if (!hasCharset) {
    headComponents.unshift(
      React.createElement('meta', { key: 'charset', charSet: 'utf-8' })
    )
    replaceHeadComponents(headComponents)
  }
}
