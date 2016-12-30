import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SongList from './SongList';
import AddSong from './AddSong';
import VideoPlayer from './VideoPlayer';

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

  renderVideo() {
    const isMobileView = window.outerWidth < 769;
    if(!isMobileView){
      return <VideoPlayer />;
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{
            display:"flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%"
          }}>
          <div style={{width:"100%", maxWidth:400}}>
            <AddSong addSong={this.addSong} />
            <SongList songs={this.state.songs} />
          </div>
          {this.renderVideo()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
