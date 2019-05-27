import React, { Component } from "react";
import Navigation from '../Navigation.js';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


export default class CaseStudies extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="content">
          <Grid container spacing={12} className={styles.gridList}>
            {tileData.map(tile => (
              <Grid className="gridItem" item sm={12} lg={3} key={tile.img} onClick={this.handleClickOpen}>
                <img className="image" src={tile.img} alt={tile.title} />
              </Grid>
            ))}
          </Grid>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Project 1</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ex sint nobis invenire nam. Usu et delectus urbanitas. An munere dignissim sed, quis soluta alienum vim an. An officiis aliquando eum. Est ea offendit suscipit appetere, cum in aeterno ponderum sapientem, ei has quas suscipiantur deterruisset.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>

        </Dialog>
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
  }
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
  },
  {
    img: 'https://graphiste.com/blog/wp-content/uploads/2016/07/startup-3.png',
    title: 'DocDuck',
    description: 'This is what we did for the project',
    cols: 1,
  },
  {
    img: 'https://graphiste.com/blog/wp-content/uploads/2016/07/startup-6.png',
    title: 'DocDuck',
    description: 'This is what we did for the project',
    cols: 1,
  },
  {
    img: 'https://graphiste.com/blog/wp-content/uploads/2016/07/startup-5.png',
    title: 'DocDuck',
    description: 'This is what we did for the project',
    cols: 1,
  },
  {
    img: 'https://graphiste.com/blog/wp-content/uploads/2016/07/startup-7.png',
    title: 'DocDuck',
    description: 'This is what we did for the project',
    cols: 1,
  },
  {
    img: 'https://graphiste.com/blog/wp-content/uploads/2016/07/startup-8.png',
    title: 'DocDuck',
    description: 'This is what we did for the project',
    cols: 1,
  },

]

