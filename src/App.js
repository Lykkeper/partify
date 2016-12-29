import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackList from './TrackList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TrackList />
      </MuiThemeProvider>
    );
  }
}

export default App;
