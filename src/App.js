import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SongList from './SongList';
import AddSong from './AddSong';

class App extends Component {
  constructor() {
    super();

    this.addSong = this.addSong.bind(this);

    this.state = {
      songs: []
    };
  }

  addSong(song) {
    const songs = this.state.songs;
    songs.push(song)
    this.setState({songs});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AddSong addSong={this.addSong} />
          <SongList songs={this.state.songs} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
