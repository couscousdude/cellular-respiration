import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const Vocabulary = (props) => {
    const { vocabContent } = props;
    
    return (
        <Grid container justify='center' spacing={3}>
            { vocabContent.map(item => (
            <Grid item xl={5} lg={5} md={5} sm={8} xs={11}>
                <Card>
                    <CardContent>
                        <Typography variant='h6'>
                            {item.word}
                        </Typography>
                        <Typography variant='body1'>
                            {item.definition}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
    );
}

export default Vocabulary;
Vocabulary.propTypes = {
    vocabContent: PropTypes.array.isRequired
}