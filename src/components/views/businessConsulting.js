import React, { Component } from "react";
import Navigation from '../Navigation.js';
import Grid from '@material-ui/core/Grid';


export default class BusinessConsulting extends Component {
  render() {
    return (
      <div >
        <Navigation />
        <div className="content">
          <div className={styles.root}>
            <h1>Business Planning & Strategy</h1>
            <br />
            <Grid container spacing={16}>
              <Grid className="gridItem" item sm={4} lg={4}>
                <img className="imgIcon" src="https://image.flaticon.com/icons/svg/1665/1665620.svg" alt="rocket" />
                <p>Sustainable business models that transform lives over the long term are key to the success of your company.</p>
              </Grid>
              <Grid className="gridItem" item sm={4} lg={4}>
                <img className="imgIcon" src="https://image.flaticon.com/icons/svg/868/868141.svg" alt="rocket" />
                <p>Sustainable business models that transform lives over the long term are key to the success of your company.</p>
              </Grid>
              <Grid className="gridItem" item sm={4} lg={4}>
                <img className="imgIcon" src="https://image.flaticon.com/icons/svg/1087/1087927.svg" alt="rocket" />
                <p>There are a wide range of business development services Empyrean can offer your firm. Just a few of these are explained below.</p>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="background">
          <div className="content">

            <h1>Product Consulting</h1>

            <p>Whether you’re selling a physical product, a piece of software, or a service, your company lives or dies on the basis of how well your products meet the needs of your customers. How much do you really know about what customers think of your products?
            Our team of experienced product professionals can help you develop feedback mechanisms to gather market data about what clients really think of your products and services, and can give you guidance on tuning your business to ensure you’re making the impact you want on the world.
            Feasibility Studies</p>

            <p>Have a great idea for a business, but don’t know whether it would really work? Sounds like a great candidate for a feasibility study. Let us do the research for you and get back to you with a full report on your industry and product-market fit.
            Our agents will do extensive research in your target industry, find your main competitors, perform a SWOT analysis of your proposed business, and give you a detailed report with all of the information you need to make important decisions about launching your business.
            Start-Up Operations</p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});
