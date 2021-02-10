import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function Faq(props) {
    const { content } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid justify='center' container spacing={3}>
                { content.map(question => (
                    <Grid item xl={5} lg={5} md={7} sm={12} xs={12} >
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography className={classes.heading}>{question.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {question.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Faq;
Faq.propTypes = {
    content: PropTypes.array.isRequired
}