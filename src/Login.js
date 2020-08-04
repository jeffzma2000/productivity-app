import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState, useEffect } from 'react';



function Login(){

    const [loggedIn, logIn] = useState(0);
    useEffect(() => {
        fetch('/login').then(res => res.json()).then(data => {
          logIn(data.success);
        });
      }, []);

    return(
        <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Grid item container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Paper style={{ minHeight: '20vh' }}>
                        <form>
                            <Grid container spacing={2} direction="column" alignItems="center" justify="center">
                                <Grid item>
                                    <TextField label="email"></TextField>
                                </Grid>
                                <Grid item>
                                    <TextField label="password"></TextField>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Login</Button>
                                </Grid>
                                {loggedIn}
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Grid>
    );
};

export default Login;