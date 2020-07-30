import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Header from './Header'
import TodoList from './List'

function App() {
  return (
    <Grid direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item container xs={12} sm={8}>
          <Grid item xs={5} justify="center">
            <Typography variant="h5" color="primary">Today's Priorities</Typography>
            <TodoList number={3}/>
            <Typography variant="h5" color="primary">Task Dump</Typography>
            <TodoList number={10}/>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5} justify="center">
            <Typography variant="h5" color="primary">Times</Typography>
            <TodoList number={20}/>
          </Grid>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
