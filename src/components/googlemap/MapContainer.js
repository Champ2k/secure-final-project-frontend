import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

// async function hostailDetail(placeId) {
async function hostailDetail() {
    return fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJgUbEo8cfqokR5lP9_Wh_DaM&key=', {
        method: 'GET',
        mode: 'cors',
        headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              }
    })
        .then(data => data.json())
}
console.log("fetch", hostailDetail())



export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
        placeId: "ChIJrTLr-GyuEmsRBfy61i59si0",
      };

      // componentDidMount() {
      //   var requestOptions = {
      //     method: 'GET',
      //     redirect: 'follow',
      //     mode: 'cors',
      //     headers: {
      //       "Access-Control-Allow-Origin" : "*",
      //       "Content-type": "application/json; charset=UTF-8"
      //     }
      //   };
        
      //   fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJgUbEo8cfqokR5lP9_Wh_DaM&key=", requestOptions)
      //     .then(response => response.json())
      //     .then(result => console.log(11111,result))
      //     .catch(error => console.log('error', error));
      // }

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);

// Using apiKey that user are logged in

// export default GoogleApiWrapper(
//     (props) => ({
//       apiKey: props.apiKey
//     }
//   ))(MapContainer)
