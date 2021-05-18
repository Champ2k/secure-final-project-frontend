import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

const MapContainer = (props) => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})

    const onMarkerClick = (props, marker, e) =>{
      setSelectedPlace(props)
      setActiveMarker(marker)
      setShowingInfoWindow(true)
    }

    const onClose = props => {
        if (showingInfoWindow) {
          setShowingInfoWindow(false)
          setActiveMarker(null)
        }
    };
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={props.google}
        currentLocation={props.currentLocation}
      >
      <Marker
      onClick={onMarkerClick}
      position={props.currentLocation}
      name={props.placeName}
      />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </CurrentLocation>
    );
  }

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);