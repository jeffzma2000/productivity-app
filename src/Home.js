import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Header from './Header';
import TodoList from './List';
import { useState, useEffect } from 'react';
import ApiCalendar from 'react-google-calendar-api';

if (ApiCalendar.sign) {
  ApiCalendar.listUpcomingEvents(10)
    .then(({result}) => {
      alert(result.items);
    });
};

function Home() {
  const [currentTime, setCurrentTime] = useState(0);

  var am_hours = [...Array(13).keys()].slice(8, 13).map((hour)=> String(hour).concat(':00am'))
  var am_30 = [...Array(13).keys()].slice(8, 13).map((hour)=> String(hour).concat(':30am'))
  var pm_hours = [...Array(12).keys()].slice(1, 9).map((hour)=> String(hour).concat(':00pm'))
  var pm_30 = [...Array(12).keys()].slice(1, 9).map((hour)=> String(hour).concat(':30pm'))
  var hours = am_hours.concat(pm_hours)
  var half_hours = am_30.concat(pm_30)

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Grid direction="column">
      <Grid item>
        <Header time={currentTime}/>
      </Grid>
      <Grid item style={{minHeight: '3vh'}}>
      </Grid>
      <Grid item container>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <Grid item container sm={4} spacing={2} justify="center" direction="column">
            <Grid item xs={12}>
              <Typography variant="h5" color="primary" align="center">Today's Priorities</Typography>
            </Grid>
            <Grid item xs={12}>
              <TodoList number={3} name="priority" labels={['1.', '2.', '3.']} checks={true}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary" align="center">Task Dump</Typography>
            </Grid>
            <Grid item xs={12}>
              <TodoList name="dump" number={10} checks={true}/>
            </Grid>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item container sm={7} justify="center" direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5" color="primary" align="center" >Schedule</Typography>
            </Grid>
            <Grid container direction="row">
              <Grid xs={6}>
                <TodoList number={13} name="scheduleHour" labels={hours} checks={false}/>
              </Grid>
              <Grid xs={6}>
              <Typography variant="h5" color="primary" align="center"></Typography>
                <TodoList number={13} name="scheduleThirty" labels={half_hours} checks={false}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Home;
