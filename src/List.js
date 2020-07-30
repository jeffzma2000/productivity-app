import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Block from './Block'
import {Typography} from '@material-ui/core'

function TodoList(props){
    const range = [...Array(props.number).keys()]
    const labels = props.labels
    return(
        <Grid container>
            <Grid item container direction ="column" xs={1}>
                {labels ? labels.map(label => <Typography gutterBottom={true}>{label}</Typography>) : null}
            </Grid>
            <Grid item xs={11}>
                <Paper elevation={3}>
                    <Grid container direction="column">
                        {range.map(()=><Block />)}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default TodoList