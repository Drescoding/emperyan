import React, { Component } from "react";
import Navigation from '../Navigation.js';

export default class Story extends Component {
  render() {
    return (
      <div id="story">
        <Navigation />
        This is the story page.
      </div>
    );
  }
}
