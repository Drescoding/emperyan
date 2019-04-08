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
          <div class="centered">
            <p>OUR MISSION</p>
            <h1>Empower.</h1>
            <p>We ensure social enterprises can thrive and prosper by providing 
              them a platform and tool kits to achieve their growth strategies.</p>
          </div>
          <div class="content">
              <h1>Introducing Empyrean Trust</h1>
              <p>At Empyrean Trust, we want to help companies that help others succeed.
                  We’re a business incubator and accelerator offering a full spectrum of funding,
                  support, and consulting services to companies that have a strong social or generative
                  mission. We are uniquely well-equipped to support owners and founders from demographics
                  that often face structural or economic barriers to upward mobility: women, racial minorities,
                  veterans, those with disabilities, poor rural populations, and LGBT people.
              </p>
              <p>Let us help you make the world a better place.</p>
          </div>
      </div>

    );
  }
}
