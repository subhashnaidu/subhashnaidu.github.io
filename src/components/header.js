import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/EmailOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: randomColor,
      marginBottom: `2rem`,
      display: 'flex',
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0)",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 500,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontFamily:"Fugaz One", fontSize:"60px"}}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    
    <div
      style={{
        margin: 'auto',
        display: 'flex'
      }}
    >
      <a style={{margin: '10px'}} href="https://github.com/subhashnaidu"><GitHubIcon style={{fill:'black'}}/></a>
      <a style={{margin: '10px'}} href="https://www.linkedin.com/in/subhash-naidu/"><LinkedInIcon style={{fill:'black'}}/></a>
      <a style={{margin: '10px'}} href="mailto:subhash3497@gmail.com"><MailIcon style={{fill:'black'}}/></a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
