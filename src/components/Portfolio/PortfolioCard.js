import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import { checkPropTypes } from "prop-types"
import { Typography } from "@material-ui/core"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"

import image from "../../images/gatsby-astronaut.png"

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: 'flex'
  // },

  card: {
    margin: "40px 10px",
    padding: "30px",
  },
}))

export default function PortfolioCard(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              
              height="100%"
              width="100%"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {props.link}
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        {/* <div className={classes.card}>
          <Typography>{props.header}</Typography>

          {props.children}
        </div> */}
    </div>
  )
}
