import React from "react"
import { Link } from "gatsby"

import Title from '../components/title'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from"../components/card"
import Portfolio from "../components/Portfolio/portfolio"
import { Typography } from "@material-ui/core"

const portfolioPage = () => (
  <Layout>
    <Card style={{color:'black'}} >
      <Title>Portfolio</Title>
      <Portfolio />
    </Card>
  </Layout>
)

export default portfolioPage
