/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Fix for Node 18 compatibility with Gatsby 2 SSR
// The charset meta tag is now handled in src/html.js to prevent querySelector errors
exports.onRenderBody = ({ setHtmlAttributes }) => {
  // Set HTML attributes including lang
  setHtmlAttributes({ lang: 'en' })
}
