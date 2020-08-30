import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Title from "../components/title"
// import Card from "@material-ui/core/Card"

import Card from '../components/card'

const resume = () => (
  <Card style={{width: '100%', padding: '20px', marginTop: '30px'}}>
      <Title>Resume</Title>
      <iframe 
          src="https://docs.google.com/viewer?srcid=1HorBNtdZxiJE_50vdXi2jEVd72vryvL9&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
          width = '100%'
          height= '1200px'
      >
      </iframe>
  </Card>
)

export default resume
