import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string';


class Playlist extends Component {
  render() {
    return (
      <div className='playlist'>
        <div className="title">
          <h2>Title</h2>
        </div>
        <div className="songs">
          <ul>
            <li>song1</li>
            <li>song2</li>
            <li>song3</li>
          </ul>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state ={
      serverData :{}
    }
  }
  componentDidMount(){
    let parsed = queryString.parse(window.location.search)
    let the_access_token = parsed.access_token;
    
    fetch('https://api.spotify.com/v1/me', 
    {headers:{'Authorization': 'Bearer ' + the_access_token}})
    .then(response => response.json())
    .then(data => console.log(data))

   
  }
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
