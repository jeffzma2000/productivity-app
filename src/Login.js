import React from 'react';
import Grid from '@material-ui/core/Grid'
import { GoogleLogin } from 'react-google-login'
import GoogleBtn from './GoogleBtn'


function Login(props) {
    const responseGoogle = (response) => {
        console.log(response['tokenId']);
      }

    return(
        <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Grid item container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Grid container alignItems="center" justify="center" style={{ minHeight: '20vh' }}>
                        <Grid item>
                            <GoogleBtn />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Grid>
    );
};

export default Login;