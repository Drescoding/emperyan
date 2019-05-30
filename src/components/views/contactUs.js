import React, { Component } from "react";
import Navigation from '../Navigation.js';

export default class ContactUs extends Component {
  render() {
    return (
      <div >
        <Navigation />
        <h2 className="gridItem">Contact Us</h2>
        {/* <div className="background"> */}
        {/* <div className="content"> */}
        <p className="gridItem">Please fill out the contact form below and we will reply as soon as possible.</p>
        <form className="content" action="https://formspree.io/alexandradresco@me.com" method="POST">
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

        <div className="background">
          <div className="content">
          <h2>Our offices</h2>

            <strong>Address</strong>

            <p>3239  Richland Avenue</p>
            <p>Evart</p>
            <p>Osceola</p>
            <p>Michigan</p>
            <br />
            <strong>Phone</strong>
            <br />
            <a href="tel:+15555551212">555-555-1212</a>
          </div>

         
        </div>
        {/* </div> */}
        {/* </div> */}

        <div className="content">
            <h2>Careers</h2>
            <p>Bladibla get in touch with us bladibla</p>
            We're looking for blablabla a <a href="/">role</a>
          </div>
      </div>
    );
  }
}
