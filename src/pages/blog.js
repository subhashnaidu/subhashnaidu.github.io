import React from "react"

import Title from '../components/title'
import Layout from "../components/layout"
import Card from"../components/card"
import { Typography } from "@material-ui/core"
import BlogPage from '../components/Blog/blogPage'

const portfolioPage = () => (
  <Layout>
    <Card style={{color:'black'}} >
        <Title>Blog</Title>
        <h4>Recent Posts</h4>
        <BlogPage></BlogPage>
    </Card>
  </Layout>
)

export default portfolioPage
