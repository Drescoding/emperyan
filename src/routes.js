import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import ContactUs from './components/views/contactUs';
import Fundraising from './components/views/fundraising';
import BusinessConsulting from './components/views/businessConsulting';
import CaseStudies from './components/views/caseStudies';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='fundraising' component={Fundraising} />
    <Route path='case_studies' component={CaseStudies} />
    <Route path='growth_hacking' component={BusinessConsulting} />
    <Route path='contact_us' component={ContactUs} />
    <Route path='*' component={Home} />

  </Route>
);
