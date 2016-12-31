import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SongList from './SongList';
import AddSong from './AddSong';
import VideoPlayer from './VideoPlayer';
import base from './base';

class App extends Component {
  constructor() {
    super();
    this.addSong = this.addSong.bind(this);
    this.handleSongEnd = this.handleSongEnd.bind(this);
    this.renderVideo = this.renderVideo.bind(this);
    this.state = {
      songs: []
    };
  }

  componentWillMount() {
    this.ref = base.syncState('songs', {
      context: this,
      state: 'songs',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addSong(song) {
    const songs = this.state.songs;
    songs.push(song)
    this.setState({songs});
  }

  handleSongEnd() {
    let songs = this.state.songs;
    songs.shift()
    this.setState({songs});
  }

  renderVideo(song) {
    const isMobileView = window.outerWidth < 769;
    if(!isMobileView && song){
      return (
        <div className="video-player">
          <VideoPlayer
            videoId={song.id.videoId}
            onEnd={this.handleSongEnd}
          />
        </div>
      )
    }
  }

  render() {
    const currentSong = this.state.songs[0]

    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="app--song-selector">
            <AddSong addSong={this.addSong} />
            <SongList songs={this.state.songs} />
          </div>
          {this.renderVideo(currentSong)}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
