import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import Contact from './components/views/contact';
import Photos from './components/views/photos';
import Facilities from './components/views/facilities';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='photos' component={Photos} />
    <Route path='facilities' component={Facilities} />
    <Route path='*' component={Home} />

  </Route>
);
