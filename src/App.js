import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackList from './TrackList';
import AddSong from './AddSong';
import VideoPlayer from './VideoPlayer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AddSong />
          <TrackList />
          <VideoPlayer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
