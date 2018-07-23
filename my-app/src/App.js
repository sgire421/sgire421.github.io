/*INSTRUCTIONS:
Copy and paste me into the App.js file that is located in the "src" folder stored in the folder that holds all of your React.js files
*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js'; // Impornting the Spotify Web API library

//Creating new object
const spotifyWebApi = new Spotify();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams(); //Parsing query string for access token
    this.state = {
      loggedIn: params.access_token ? true : false, //Checking if access token exists

      //Initializing data to be stored in JSON format
      nowPlaying: {
        name: " No Info Available",
        image: "",
      }
    };

    // Passing access token to API to make requests
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }

  /********************************************************************************
   * Definition of getHashParams: Obtains parameters from the hash of the URL
   * @return Object
   ********************************************************************************/
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  /********************************************************************************
   * Definition of getCurrentSongInfo: Retrieves data of currently playing track With
   * calls to the Spotify Web API
   ********************************************************************************/
  getCurrentSongInfo() {
   spotifyWebApi.getMyCurrentPlayingTrack().then((response) => {
     this.setState({
       nowPlaying: {
         name: "" + response.item.name,
         image: response.item.album.images[1].url,
       }
     })
   });
  }

  // Creates the html to display
  render() {
    return (
      <div className="App">
        <a className="login-link" href="http://localhost:8000">Login With Spotify</a>
        <div>
          Currently Playing:
          {this.state.nowPlaying.name}
        </div>
        <div>
          <img src={this.state.nowPlaying.image} />
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getCurrentSongInfo()}>
            Check Currently Playing
          </button>
        }
      </div>
    );
  }
}

export default App;
