import React from 'react';
import Timeline from './Timeline';
import Faq from './Faq';
import faqContent from './faqContent';
import timelineContent from './timelineContent';
import { Button, Divider, Typography, Card, CardContent, Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';
import Vocabulary from './Vocabulary';
import vocabContent from './vocabContent';
import BackToTop from '../BackToTop';

const Learn = () => {
    const history = useHistory();

    return (
        <div style={{marginBottom: 40}}>
            <Button 
                startIcon={<HomeIcon />} 
                style={{marginLeft: 10}} 
                onClick={() => history.push('/home')}
            >
                Back to Home Page
            </Button>
            <Grid container justify='center' style={{marginBottom: 30}}>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h3' align='center' id='learn-anchor'>
                                Frequently Asked Questions About Cellular Respiration
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Faq content={faqContent} />
            <Grid container justify='center' style={{marginTop: 40}}>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h4' align='center'>
                                Cellular Respiration Process    
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Timeline content={timelineContent} />
            <Grid container justify='center' style={{marginBottom: 20}}>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h4' align='center'>
                                Vocabulary
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Vocabulary vocabContent={vocabContent} />
            <BackToTop anchor='#learn-anchor' bottomOffset={window.innerWidth <= 768 ? '60px' : '30px'} />
        </div>
    );
}

export default Learn;