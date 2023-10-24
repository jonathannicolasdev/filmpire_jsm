import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => (
  <>
    <CssBaseline />
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/movie/:id">
          <MovieInformation />
        </Route>
        <Route exact path="/actors/:id">
          <Actors />
        </Route>
        <Route path="/">
          <Movies />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </main>
  </>
);

export default App;
