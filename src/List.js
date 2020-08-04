import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Block from './Block'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'

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
        <Grid container>
            <Grid item container direction ="column" xs={2}>
                {labels ? labels.map(label => <Input className={classes.root} type="text" value={label} disabled={true} disableUnderline={true}/>) : null}
            </Grid>
            <Grid item xs={10}>
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