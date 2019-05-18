import React, { Component } from "react";
import Navigation from '../Navigation.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default class CaseStudies extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <GridList cellHeight={160} className={styles.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      </div>
    );
  }

}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

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