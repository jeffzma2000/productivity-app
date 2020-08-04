import React from 'react';
import Grid from '@material-ui/core/Grid'
import { GoogleLogin } from 'react-google-login'


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
                            <GoogleLogin 
                            clientId="431376754384-4e26dd9v5e914jc95olbnq75prvdptuj.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            uxMode='redirect'
                            redirectUri="http://localhost:3000/"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Grid>
    );
};

export default Login;