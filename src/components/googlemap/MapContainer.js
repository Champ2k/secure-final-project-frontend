import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

import '../../styles/googleMap/mapContainer.css'


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
      <div className="google-map">
      <CurrentLocation
        centerAroundCurrentLocation
        google={props.google}
        currentLocation={props.currentLocation}
        zoom={props.zoom}
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
        </div>
    );
  }

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);