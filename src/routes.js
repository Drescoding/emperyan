import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import Story from './components/views/story';
import Team from './components/views/team';
import Admin from './components/views/admin';
import Fundraising from './components/views/fundraising';
import Bd from './components/views/bd';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='story' component={Story} />
    <Route path='team' component={Team} />
    <Route path='fundraising' component={Fundraising} />
    <Route path='bd' component={Bd} />
    <Route path='admin' component={Admin} />
    <Route path='*' component={Home} />

  </Route>
);
