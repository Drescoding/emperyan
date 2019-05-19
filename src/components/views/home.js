import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Navigation from '../Navigation.js';
import Map from '../Map.js'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Team from './team.js'
import logo from './logo.png'

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
        <Navigation />
        <div id="backgroundImage">
          <img id="centered_image" src={logo} alt="logo" />
        </div>
        <div className="centered">
          <p>OUR MISSION:</p>
          <h1>Empower.</h1>
          <p>We ensure social enterprises can thrive and prosper by providing
              them a platform and tool kits to achieve their growth strategies.</p>
        </div>

        <div className="content">
          <Grid container spacing={10}>
            <Grid item className="whiteBox" sm={12} lg={12}>
              <h1>Our philosophy</h1>
              <p>Lorem ipsum dolor sit amet, eripuit vituperata in pri. Graeci regione dolorem vel ut, id alia scaevola mea, vel errem graeci ea. At est mundi principes, an dicunt sententiae duo, eros dissentiunt in pro. Has an idque assum recteque, ei mandamus aliquando has, dolor fabulas torquatos eu vis. Hinc dolor eos ex, at similique moderatius has.</p>
              <p>Let us help you make the world a better place.</p>
            </Grid>
            <Grid className="whiteBoxButton" item sm={6} lg={6}>
              <Button color="primary" href="/growth_hacking" size="large">Growth hacking</Button>
            </Grid>
            <Grid className="whiteBoxButton" item sm={6} lg={6}>
              <Button color="primary" size="large" href="/fundraising">Fundraising</Button>
            </Grid>
          </Grid>

          <div className="map">
            <h1>Our Global Reach</h1>
            <Map />
          </div>
        </div>

        <div className="background">
          <div className="content_black">
            <Team />
          </div>
        </div>
        <div className="content">
          <h1>Investments</h1>
          <GridList cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div >
    );
  }
}

const tileData = [

  {
    img: 'https://graphiste.com/blog/wp-content/uploads/2016/07/startup-2.png',
    title: 'Mint',
    description: 'This is what we did for the project',
    cols: 1,
  },
  {
    img: 'https://graphiste.com/blog/wp-content/uploads/2016/07/startup-1.png',
    title: 'DocDuck',
    description: 'This is what we did for the project',
    cols: 1,
  },
  {
    img: 'https://graphiste.com/blog/wp-content/uploads/2016/07/startup-4.png',
    title: 'DocDuck',
    description: 'This is what we did for the project',
    cols: 1,
  }
]

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
