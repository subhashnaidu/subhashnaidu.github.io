/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';

import Fade from 'react-reveal/Fade'

import Header from "./header"
import "../styles/layout.css"

function Layout ({ children, props }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '1000px',
          // maxWidth: props.width ? props.width : '1000px',
          padding: `0 1.0875rem 1.45rem`,
          height: `auto`,
        }}
      >
        <Link to="/"><BackIcon style={{fontSize: '40px'}}/></Link>
        <main>
          <Fade right>
            {children}
          </Fade>
        </main>
        
        <Divider />
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
