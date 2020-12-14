import React, { Component } from 'react';
import './App.css';
import {GoogleMap,
useLoadScript,
Marker,
InfoWindow} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "50vh"
}
const center = {
  lat: 44.977753,
  lng: -93.265015,
}

const options = {
  styles: mapStyles
}

function App() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyDOqfm-oP_UKSq5ayaR72V_R-p8W1JJvrY",
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="App">
      <div className="mapAPI">
      <h1>Remain Calm, </h1>
        <div className="map">
          <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={8} 
            center={center} 
            options={options}
            onClick={onMapClick}
          >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
              icon={{
                url: `/icons8-robot-2-64.png`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}

          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>
                  <span role="img" aria-label="ROBOT">
                    🐻
                  </span>{" "}
                  Alert
                </h2>
                <p>Spotted {formatRelative(selected.time, new Date())}</p>
              </div>
            </InfoWindow>
          ) : null}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}

export default App;