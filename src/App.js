import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackList from './TrackList';
import AddSong from './AddSong';
import VideoPlayer from './VideoPlayer';

class App extends Component {
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
            <AddSong />
            <TrackList />
          </div>
          {this.renderVideo()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
