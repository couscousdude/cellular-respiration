import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        alignItems: 'center',
    }
});

function Navbar(props) {
    const classes = useStyles();

    return(
        <AppBar position='fixed' className={classes.root}>
            <Toolbar>
                <Typography variant='h6' align='center'>
                    Cellular Respiration
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;