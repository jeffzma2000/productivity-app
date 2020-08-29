import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Block from './Block'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        resize: {
            fontSize: 10
        }
    }
});

function TodoList(props){

    const classes = useStyles(props)
    const range = [...Array(props.number).keys()]
    const labels = props.labels
    return(
        <Grid item container xs={12}>
            <Grid item xs={12}>
                <Paper elevation={3}>
                    {labels ? (labels).map((label, i)=><Block name={props.name} label={label} check={!props.checks} index={i}/>):range.map((i)=><Block name={props.name} check={!props.checks} index={i}/>)}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default TodoList