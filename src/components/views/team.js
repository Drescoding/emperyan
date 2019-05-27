import React, { Component } from "react";
import Navigation from '../Navigation.js';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default class Team extends Component {
  render() {
    return (
      <div>
        <Navigation />


        <div class="content">
          <div className={styles.root}>
            <Grid container spacing={16}>
              <Grid item sm={6} lg={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="nathan"
                    className={styles.media}
                    height="140"
                    image="https://image.flaticon.com/icons/png/512/37/37232.png"
                  />
                  <CardContent>
                    <h2>Nathan Fields</h2>
                    <p>Ex omittam alam expetendis talaham constituam vix, mel porro constituto theophrastus ex. Vidit insolens aliquando pro ad, falli euripidis in usu, duo ad suscipit epicurei vituperata. Ei eum ignota postulant. An choro delenit liberavisse per, ea detracto luptatum </p>
                  </CardContent>
                </CardActionArea>
              </Grid>
              <Grid item sm={6} lg={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="nathan"
                    className={styles.media}
                    height="140"
                    image="https://image.flaticon.com/icons/png/512/37/37232.png"
                  />
                  <CardContent>
                    <h2>Ken Blanchard</h2>
                    <p>Ex omittam alam expetendis talaham constituam vix, mel porro constituto theophrastus ex. Vidit insolens aliquando pro ad, falli euripidis in usu, duo ad suscipit epicurei vituperata. Ei eum ignota postulant. An choro delenit liberavisse per, ea detracto luptatum </p>
                  </CardContent>
                </CardActionArea>
              </Grid>
              <Grid item sm={6} lg={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="nathan"
                    className={styles.media}
                    height="140"
                    image="https://image.flaticon.com/icons/png/512/37/37232.png"
                  />
                  <CardContent>
                    <h2>Pamela Chinawah</h2>
                    <p>Ex omittam expetendis constituam vix, mel porro constituto theophrastus ex. Vidit insolens aliquando pro ad, falli euripidis in usu, duo ad suscipit epicurei vituperata. Ei eum ignota postulant. An choro delenit liberavisse per, ea detracto luptatum </p>
                  </CardContent>
                </CardActionArea>
              </Grid>
              <Grid item sm={6} lg={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="nathan"
                    className={styles.media}
                    height="140"
                    image="https://image.flaticon.com/icons/png/512/37/37232.png"
                  />
                  <CardContent>
                    <h2>Kjell–Ruben Tverli</h2>
                    <p>Ex omittam expetendis constituam vix, mel porro constituto theophrastus ex. Vidit insolens aliquando pro ad, falli euripidis in usu, duo ad suscipit epicurei vituperata. Ei eum ignota postulant. An choro delenit liberavisse per, ea detracto luptatum </p>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grid>
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
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
});
