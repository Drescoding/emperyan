import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Navigation from '../Navigation.js';
import homeImage from './homeImage.jpg'; 

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <Navigation />
        <div class="container">
        <img src={homeImage} alt='background' id='background'/>
          <div class="centered">
            <p>OUR MISSION</p>
            <h1>Empower.</h1>
            <p>We ensure social enterprises can thrive and prosper by providing 
              them a platform and tool kits to achieve their growth strategies.</p>
          </div>
        </div>
      </div>

    );
  }
}
