import React, { Component } from "react";
import Navigation from '../Navigation.js';

export default class Fundraising extends Component {
  render() {
    return (
      <div className="content"onScrollCapture>
        <Navigation />
        This is the fundraising page.
      </div>
    );
  }
}
