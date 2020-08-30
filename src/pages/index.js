import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import PersonPinIcon from '@material-ui/icons/PersonPin';
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BallotIcon from '@material-ui/icons/Ballot';

import Layout from "../components/homeLayout"
import Title from "../components/title"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Fade from 'react-reveal/Fade'
import AboutMe from "./aboutMe";

const useStyles = makeStyles((theme) => ({
  button: {
    background: 'linear-gradient(45deg, #df6680, #e6676b)',
    animation: 'gradient 2s ease infinite',
  }

}));

export default function IndexPage(props) {

  return (
    <Layout>
      <SEO title="Home" />
      <Fade up>
        <Card>
          {/* <Fade right><Title class="typewriter">Hi! My name is Subhash.</Title></Fade> */}
          <div class="typewriter" style={{marginBottom: '25px'}}><Title>Hi! My name is Subhash.</Title></div>
          <Typography>
            <Fade delay={0}>
              Welcome to my online portfolio, where I showcase my projects, skills and intrests!<br />
              
            </Fade>
          </Typography><br />
          <div style={{width:"100%"}}> 
            {/* <Button style={{ marginRight: "5px" }} startIcon={<PersonPinIcon />} variant="outlined" href="/aboutMe/">About Me</Button> */}
            {/* <Button style={{ marginLeft: '5px', float:'right'}} startIcon={<DescriptionIcon />} variant="outlined" href="/resume/">Resume</Button> */}
            {/* <Button style={{ marginRight: "5px" }} startIcon={<BallotIcon />} variant="outlined" href="/blog/">Blog</Button> */}
            {/* <Button style={{ float: 'right'}} startIcon={<DashboardIcon />} variant="outlined" href="/portfolio/">Portfolio</Button> */}
          </div>
        </Card>
      </Fade>

      <Fade delay={3000} up>
        <AboutMe />
        <Divider />
      </Fade>
    </Layout>
  );

}
