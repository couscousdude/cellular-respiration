import React from 'react';
import { Button, Typography, Link, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    title: {
        fontWeight: '600'
    },
    button: {
        transform: 'translateX(-50%)',
        left: '50%',
        marginTop: '20px'
    }
})

function Home(props) {
    const classes = useStyles();
    let history = useHistory();

    const handleButtonPress = () => {
        history.push('/learn');
    }

    return(
        <div className={classes.container}>
            <Typography align='center' variant='h1' className={classes.title}>
                Cellular Respiration
            </Typography>
            <Typography align='center' variant='h3'>
                By Youwen Wu
            </Typography>
            <Grid justify='center'>
                <Grid item xl={12} xs={12} md={12} sm={12} lg={12}>
                    <Button variant='contained' color='primary' className={classes.button} onClick={handleButtonPress}>
                        Learn   
                    </Button>
                </Grid>
                <Grid item xl={12} xs={12} md={12} sm={12} lg={12}>
                    <Button 
                        variant='outlined' 
                        color='secondary' 
                        className={classes.button} 
                        component={Link}
                        startIcon={<GitHubIcon />}
                        href='https://www.github.com/couscousdude/cellular-respiration'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        Code
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;