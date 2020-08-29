import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

function Header(props) {
    return(
        <AppBar position="static">
            <Toolbar>
                <Grid container justify="space-between" spacing={24}>
                    <Grid item>
                        <Typography>My Schedule</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{props.time}</Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;