import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Block from './Block'

function TodoList(props){
    const range = [...Array(props.number).keys()]
    return(
        <Paper elevation={3}>
            <Grid container direction="column">
                {range.map(i => <Block />)}
            </Grid>
        </Paper>
    );
};

export default TodoList