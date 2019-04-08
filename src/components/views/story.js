import React, { Component } from "react";
import Navigation from '../Navigation.js';

export default class Story extends Component {
  render() {
    return (
      <div id="story">
        <Navigation />
        <div class="content">
            <p>Empyrean Trust is the sister company of Elysian Trust, a non-profit with a mission to identify, find, and support individuals in underserved communities with remarkable cognitive gifts and talents and help them to achieve their dreams.</p>

            <p>After years of success in the non-profit sector, our two co-founders, Nathan Bar-Fields and Kjell–Ruben Tverli, recognized an opportunity to make the same positive impact on the world in the for-profit sector that they’d been making with Elysian Trust. They quickly assembled an all-star team of experienced contributors who understood the importance of their mission, and Empyrean Trust was born.</p>

            <p>At Empyrean Trust, our goal is to help companies that help others succeed. We’re a business incubator and accelerator offering a full spectrum of funding, support, and consulting services to companies that have a strong social or generative mission. We are uniquely well-equipped to support owners and founders from demographics that often face structural or economic barriers to upward mobility: women, racial minorities, veterans, those with disabilities, poor rural populations, and LGBT people.</p>

            <p>We would love to help you make a positive impact on the world. Reach out today if you’d like to work with us!</p>
        </div>
      </div>
    );
  }
}
