import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import SvgIcon from '@material-ui/core/SvgIcon';

const Marker = ({ text }) => <div>
  <SvgIcon>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.73,
      lng: -73.93
    },
    zoom: 6,
    
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={40.955413}
            lng={-73.337844}
            text="My Marker"
          />

          <Marker
            lat={42.955413}
            lng={-74.337844}
            text="My Marker"
          />

          <Marker
            lat={41.955413}
            lng={-76.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
