import React, { Component } from 'react';
import SimpleMap from './components/simple_map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="map">
        <SimpleMap />
      </div>
    );
  }
}


export default App;
