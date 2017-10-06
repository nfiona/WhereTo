import React, { Component } from 'react';
import SimpleMap from './components/simple_map';
import SimpleForm from './components/search_bar';
import './App.css';


  const lats = 59.95;
  const longs = 30.33
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }
  }




  render() {
    return (
      <section>
        <div>
          <SimpleForm />
        </div>
        <div className="map">
            <SimpleMap  center={{lat: lats, lng: longs}}/>
        </div>
      </section>
    );
  }
}


export default App;
