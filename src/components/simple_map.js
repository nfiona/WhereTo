import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render';
import GoogleMap from 'google-map-react';


// const AnyReactComponent = ({text}) => <div style={{position: 'relative', color: 'red', height: 40, width: 60, top: -20, left: -30,}}>{text}</div>;

const YOUR_API_KEY = 'AIzaSyBIlhpr1-v3flQw-uQ4NYt-gbYLM2vj17g';

class SimpleMap extends Component {
  static defaultProps = {
  center: {},
  zoom: 11
};

  shouldComponentUpdate = shouldPureComponentUpdate;



  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: YOUR_API_KEY}}
        center={this.props.center}
        zoom={this.props.zoom}>
      </GoogleMap>
    );
  }
}

export default SimpleMap;
