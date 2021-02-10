import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function CustomizedTimeline(props) {
    const { content } = props;
    const classes = useStyles();

    return (
        <Timeline align="alternate">
            { content.map((item, i) => (
                <TimelineItem>
                <TimelineOppositeContent>
                { item.caption
                ? ( <Typography variant="h5">
                        {item.caption}
                    </Typography> ) : null }
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color={item.caption ? 'primary' : 'grey'}>
                    <item.icon />
                </TimelineDot>
                { i !== content.length - 1
                    ? <TimelineConnector /> : null }
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                        {item.title}
                    </Typography>
                    <Typography>{item.body}</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            ))}
        {/* <TimelineItem>
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                10:00 am
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary">
                <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                play video games
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color="secondary">
                <RepeatIcon />
            </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem> */}
        </Timeline>
    );
}

export default CustomizedTimeline;
CustomizedTimeline.propTypes = {
    content: PropTypes.array.isRequired
}