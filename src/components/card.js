import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { checkPropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex'
    // },

    card: {
        margin: '40px 10px',
        padding: '30px',
    },

  }));
  
  export default function Card(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Paper elevation={2} style={{
          borderRadius: '5px'
        }}>
            <div className={classes.card}>
                {props.children}
            </div>
        </Paper>
      </div>
    );
  }