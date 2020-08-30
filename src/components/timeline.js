import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import DotIcon from '@material-ui/icons/FiberManualRecord';

import Title from '../components/title'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    margin: '10px',
    background: '#eceff1'
  },
  secondaryTail: {
    backgroundColor: 'theme.palette.secondary.main',
  },
  card: {
    padding: '30px',
    marginBottom: '20px',
  }
}));

export default function MyTimeline() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <Title>Employment History</Title>
        <Timeline align="alternate">

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2019 - Present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <DotIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={1} className={classes.paper}>
                <Typography variant="h6" component="h6">
                  Solutions Engineer | <strong>Deloitte</strong>
                </Typography><Typography>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2019
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <DotIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={1} className={classes.paper}>
                <Typography variant="h6" component="h6">
                  Graduation | <strong>UCF</strong>
                </Typography>B.S. Computer Science<Typography>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2018
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <DotIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={1} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Intern | <strong>ServiceNow</strong>
                </Typography>
                <Typography></Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2017
          </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <DotIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={1} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Undergraduate Research Assistant | <strong>UCF</strong>
                </Typography>
                <Typography></Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </Card>
    </ React.Fragment>
  );
}
