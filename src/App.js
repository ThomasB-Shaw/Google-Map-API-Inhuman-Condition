import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
