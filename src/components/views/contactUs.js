import React, { Component } from "react";
import Navigation from '../Navigation.js';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <h1>Contact Us</h1>
        {/* <div className="background"> */}
        {/* <div className="content"> */}
        <form action="https://formspree.io/alexandradresco@me.com" method="POST">
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="_replyto" />
          <label>Website:</label>
          <input type="text" name="website" />
          <label>LinkedIn:</label>
          <input type="text" name="linkedin" />
          <label>Message:</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send" />
          <input type="hidden" name="_next" value="https://wwww.drescoding.co/" />
        </form>
        {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}
