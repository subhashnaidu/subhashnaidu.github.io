import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../../styles/layout.css"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PortfolioCard from '../Portfolio/PortfolioCard'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function Portfolio(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <PortfolioCard />
                </Grid>
                <Grid item xs>
                    <PortfolioCard />
                </Grid>
                <Grid item xs>
                    <PortfolioCard />
                </Grid>
            </Grid>
        </div>
        
    );
    
}

Portfolio.propTypes = {
  children: PropTypes.node.isRequired,
}