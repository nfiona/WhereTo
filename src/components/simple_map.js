import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render';
import GoogleMap from 'google-map-react';

const AnyReactComponent = ({text}) => <div style={{position: 'relative', color: 'red', height: 40, width: 60, top: -20, left: -30,}}>{text}</div>;

const YOUR_API_KEY = 'AIzaSyBIlhpr1-v3flQw-uQ4NYt-gbYLM2vj17g';

class SimpleMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
  };

  static defaultProps = {
    center: [38.89511, -77.03637],
    zoom: 9,
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: YOUR_API_KEY}} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}>
          <AnyReactComponent
            lat={38.89511}
            lng={-77.03637}
            text={'Washington DC'}
           />
      </GoogleMap>
    );
  }
}

export default SimpleMap;
