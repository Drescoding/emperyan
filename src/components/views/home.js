import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Navigation from '../Navigation.js';
import Map from '../Map.js'

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <Navigation />
        <div className="centered">
          <p>OUR MISSION</p>
          <h1>Empower.</h1>
          <p>We ensure social enterprises can thrive and prosper by providing
              them a platform and tool kits to achieve their growth strategies.</p>
        </div>
        <div className="content">
          <h1>Fundraising</h1>
          <p>Lorem ipsum dolor sit amet, eripuit vituperata in pri. Graeci regione dolorem vel ut, id alia scaevola mea, vel errem graeci ea. At est mundi principes, an dicunt sententiae duo, eros dissentiunt in pro. Has an idque assum recteque, ei mandamus aliquando has, dolor fabulas torquatos eu vis. Hinc dolor eos ex, at similique moderatius has.</p>
          <p>Let us help you make the world a better place.</p>
        </div>
        <div className="background">
          <div className="content_black">
            <h1>Consulting</h1>
            <p>Lorem ipsum dolor sit amet, eripuit vituperata in pri. Graeci regione dolorem vel ut, id alia scaevola mea, vel errem graeci ea. At est mundi principes, an dicunt sententiae duo, eros dissentiunt in pro. Has an idque assum recteque, ei mandamus aliquando has, dolor fabulas torquatos eu vis. Hinc dolor eos ex, at similique moderatius has.</p>
            <p>Let us help you make the world a better place.</p>
          </div>
        </div>
 
        <Map />
        
      </div>

    );
  }
}
