import React, { Component } from 'react';
import SimpleMap from './components/simple_map';
import SimpleForm from './components/search_bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <div>
          <SimpleForm />
        </div>
        <div className="map">
            <SimpleMap />
        </div>
      </section>
    );
  }
}


export default App;
