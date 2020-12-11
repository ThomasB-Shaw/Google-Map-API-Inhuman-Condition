import logo from './logo.svg';
import './App.css';
import {GoogleMap,
useLoadScript,
Marker,
InfoWindow} from "@react-google-maps/api"
import mapStyles from "./mapStyles"

// process.env.REACT_APP_GOOGLE_MAPS_API_KEY 

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
}
const center = {
  lat: 44.977753,
  lng: -93.265015,
}

const options = {
  styles: mapStyles
}

function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading...";

  return (
    <div className="App">
      <div className="mapAPI">
      <h1>Hello there!!!</h1>
        <div className="map">
          <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={8} 
            center={center} 
            options={options}
            onClick={(event) => {console.log(`Hello ${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)}}
          ></GoogleMap>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
