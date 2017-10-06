import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

// const PLACES_API_KEY = 'AIzaSyBfGtGWzVPT6HzuNkcZKfsChurjVVOYTSw';

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ' ',
      lat: ' ',
      longs: ' '
   }
    this.onChange = (address) => this.setState({ address });
  }

  handleFormSubmit = (event) => {


    event.preventDefault();


    geocodeByAddress(this.state.address)
  .then(results => this.setState( {lat: results[0].geometry.location.lat(), longs: results[0].geometry.location.lng()} ))
  .catch(error => console.error(error))

  console.log(this.state.lat, this.state.longs)
  }


// console.log('latitude: ' + results[0].geometry.location.lat() + ' longitude: ' + results[0].geometry.location.lng() ))

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }




    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type='submit'>Submit</button>

      </form>
      <p>Latitude: {this.state.lat}, Longitude: {this.state.longs}</p>
    </div>
    );
  }

}


export default SimpleForm;
