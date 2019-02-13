import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Navigation from '../Navigation.js';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <Navigation />
        This is the home page.

      </div>

    );
  }
}
