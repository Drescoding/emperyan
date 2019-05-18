import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Navigation from '../Navigation.js';
import Map from '../Map.js'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
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
          <Map />
        </div>
        <div className="background">
          <div className="content_black">
            <h1>Consulting</h1>
            <p>Lorem ipsum dolor sit amet, eripuit vituperata in pri. Graeci regione dolorem vel ut, id alia scaevola mea, vel errem graeci ea. At est mundi principes, an dicunt sententiae duo, eros dissentiunt in pro. Has an idque assum recteque, ei mandamus aliquando has, dolor fabulas torquatos eu vis. Hinc dolor eos ex, at similique moderatius has.</p>
            <p>Let us help you make the world a better place.</p>
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
      </div>
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
