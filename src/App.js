import React, { Component } from 'react';
// import LightContainer from './LightContainer';
import CounterContainer from './CounterContainer';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LightContainer /> */}
        <CounterContainer />
      </div>
    );
  }
}

export default App;
