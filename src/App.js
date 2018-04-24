import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Playlist extends Component {
  render() {
    return (
      <h2>This is a playlist</h2>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>

        <Playlist/>
      </div>
    );
  }
}

export default App;
