import React, { Component } from 'react';
import './App.css';
import MainView from './Components/MainView/MainView.js';

class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <div id="header">1</div>
        <MainView id="main-view"/>
        <div id="side-nav">3</div>
      </div>
    );
  }
}

export default App;
