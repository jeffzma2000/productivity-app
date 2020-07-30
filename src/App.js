import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Header from './Header'
import TodoList from './List'

function App() {
  var hours = [...Array(12).keys()].map((hour)=> String(hour).concat(''))
  return (
    <Grid direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item container xs={12} sm={8}>
          <Grid item xs={5} justify="center">
            <Typography variant="h5" color="primary" align="center">Today's Priorities</Typography>
            <TodoList number={3} labels={[1, 2, 3]}/>
            <Typography variant="h5" color="primary" align="center">Task Dump</Typography>
            <TodoList number={10}/>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5} justify="center">
            <Grid container direction="row">
              <Grid xs={6}>
                <Typography variant="h5" color="primary" align="center">:00</Typography>
                <TodoList number={12} labels={hours}/>
              </Grid>
              <Grid xs={6}>
              <Typography variant="h5" color="primary" align="center">:30</Typography>
                <TodoList number={12}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
