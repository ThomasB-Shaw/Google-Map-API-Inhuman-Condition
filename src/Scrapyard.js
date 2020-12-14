          // <WrappedMap 
          //   googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="AIzaSyC3WcH5KB9iiL_k5bddO6GtVQ5IGbxkkfY"`}
          //   loadingElement={<div style={{ height: `100%` }} />}
          //   containerElement={<div style={{ height: `400px` }} />}
          //   mapElement={<div style={{ height: `100%` }} />}
          // />

                {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      // ${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}

// function Map () {
//   return (
//     <GoogleMap 
//       defaultZoom={10} 
//       defaultCenter={{lat: 12, lng: 12}}
//       />
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
// import { render } from '@testing-library/react';



// import logo from './logo.svg';
// import './App.css';
// import {GoogleMap,
// useLoadScript,
// Marker,
// InfoWindow} from "@react-google-maps/api"
// import mapStyles from "./mapStyles"

// // process.env.REACT_APP_GOOGLE_MAPS_API_KEY 

// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh"
// }
// const center = {
//   lat: 44.977753,
//   lng: -93.265015,
// }

// const options = {
//   styles: mapStyles
// }

// function App() {

//   const {isLoaded, loadError} = useLoadScript({
//     googleMapsApiKey: "AIzaSyC3WcH5KB9iiL_k5bddO6GtVQ5IGbxkkfY",
//     libraries,
//   });

//   if (loadError) return "Error loading maps";
//   if (!isLoaded) return "Loading Maps";

//   return (
//     <div className="App">
//       <div className="mapAPI">
//       <h1>Hello there!!!</h1>
//         <div className="map">
//           <GoogleMap 
//             mapContainerStyle={mapContainerStyle} 
//             zoom={8} 
//             center={center} 
//             options={options}
//             onClick={(event) => {console.log(event)}}
//           ></GoogleMap>
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;









/////////////////////////////////////////////////////////////



// import logo from './logo.svg';
// import './App.css';
// import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
// import mapStyles from "./mapStyles"

// function Map () {
//   return (
//     <GoogleMap 
//       defaultZoom={10} 
//       defaultCenter={{lat: 12, lng: 12}}
//       defaultOptions={{ styles: mapStyles }}
//       />
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// function App() {
//   return (
//     <div className="App">
//       <div className="mapAPI">
//       <h1>Hello there!!!</h1>
//         <div className="map">
//           <WrappedMap 
//             googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
//             loadingElement={<div style={{ height: `100%` }} />}
//             containerElement={<div style={{ height: `400px` }} />}
//             mapElement={<div style={{ height: `100%` }} />}
//           />
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;



///////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
// import './App.css';
// import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
// import mapStyles from "./mapStyles";

//  function Map () {


//   const [selected, setSelected] = React.useState([])

//   return (
//     <>
//       <GoogleMap 
//         defaultZoom={10} 
//         defaultCenter={{ lat: 44.977753, lng: -93.265015 }}
//         defaultOptions={{ styles: mapStyles }}
//         onClick={(event) => {console.log(`Hello there ${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)}}
//         />
//       <Marker
//         position={{ lat: 44.977753, lng: -93.265015 }}
//         icon={{
//           url: `/icons8-robot-2-64.png`,
//           scaledSize: new window.google.maps.Size(25, 25)
//         }}
//       />
//       <Marker
//         position={{ lat: 45, lng: -93 }}
//         icon={{
//           url: `/icons8-r2-d2.svg`,
//           scaledSize: new window.google.maps.Size(25, 25)
//         }}
//         // onClick={alert(`hello`)}
//       />
//       {/* <InfoWindow>
//         <div>
//           <h2>Robot Identified!</h2>
//         </div>
//       </InfoWindow> */}
//     </>
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));


// class App extends Component {
//   render() {
//     return (
//       <div className='inhumanConditions'>
//         <h1>Remain Calm. If you are not a robot, you have nothing to fear.</h1>
//         <div className="map">
//         <WrappedMap 
//             googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDOqfm-oP_UKSq5ayaR72V_R-p8W1JJvrY`}
//             loadingElement={<div style={{ height: `100%` }} />}
//             containerElement={<div style={{ height: `400px` }} />}
//             mapElement={<div style={{ height: `100%` }} />}
//             onClick={(event) => {console.log(`Hello there ${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)}}
//           />
//         </div>
//       </div>
//     )
//   }
// }

// export default App;