/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import BackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "gatsby"

import Fade from 'react-reveal/Fade'

import Header from "./header"
import "../styles/layout.css"

function homeLayout({ children }) {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

  return (
    <>
      <Header siteTitle="SN" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          height: `auto`,
        }}
      >
        <Fade up>
          <main>{children}</main>
        </Fade>
        {/* <footer>
          © {new Date().getFullYear()}
          , Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

homeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default homeLayout
