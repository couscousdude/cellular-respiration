import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        color: 'black',
    }
});

const Footer = (props) => {
    const { children } = props;
    const classes = useStyles();

    return(
        <div className={classes.footer}>
            <footer>
                <Divider />
                    { children 
                        ? children
                        : <div style={{height:'30px'}}></div> }
            </footer>
        </div>
    );
}

export default Footer;