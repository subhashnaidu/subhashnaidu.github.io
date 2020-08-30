import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Title from '../components/title'
import SEO from "../components/seo"
import Card from"../components/card"
import TimeLine from "../components/timeline"
import { Typography } from "@material-ui/core"
import Resume from './resume';

const AboutMe = () => (
  <React.Fragment>
    <SEO title="About" />
    <Card>
      <Title>About Me</Title>
      <Typography>
        A Full Stack Engineer currently working with React, Python, JS, Flask, .NET to solve client problems in a scalable and efficient way, while also adhering to the SDLC and Agile methodologies to drive innovation. I take pride in my ability to learn and apply ideas quickly while also being some what of a pixle perfect perfecionist.
      </Typography>
    </Card>
    <TimeLine />
    <Resume />
  </React.Fragment>  
)

export default AboutMe
