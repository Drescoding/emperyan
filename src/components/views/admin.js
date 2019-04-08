import React, { Component } from "react";
import Navigation from '../Navigation.js';

export default class Admin extends Component {
  render() {
    return (
      <div id="admin">
        <Navigation />
        <p>Administrative and Accounting support are two of the top needs of early-stage founders. We will help you set up your business to run efficiently, a critical factor in your firm’s success.  We will also help you choose contract vendors that are the right fit for your unique needs.</p>
        <p>Empyrean can help you directly with both your administrative and accounting needs, thanks to our on-staff directory of trusted and experienced accounting and personal assistant contractors.</p>
        <p>Contact us today for a free consultation and to learn more about these services!</p>
      </div>
    );
  }
}
