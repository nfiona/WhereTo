import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

// const PLACES_API_KEY = 'AIzaSyBfGtGWzVPT6HzuNkcZKfsChurjVVOYTSw';

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { address: 'San Francisco CA' }
    this.onChange = (address) => this.setState({ address });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    geocodeByAddress('Los Angeles, CA')
  .then(results => console.log('latitude: ' + results[0].geometry.location.lat() + ' longitude: ' + results[0].geometry.location.lng() ))
  .catch(error => console.error(error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type='submit'>Submit</button>
      </form>
    );
  }

}


export default SimpleForm;
