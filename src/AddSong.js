import React from 'react';
import YoutubeAutocomplete from 'material-ui-youtube-autocomplete';

class AddSong extends React.Component {
  constructor() {
    super();

    this._onSearchResultsFound = this._onSearchResultsFound.bind(this);
  }

  render() {
    return (
      <div className="youtube-autocomplete">
        <YoutubeAutocomplete
          apiKey="AIzaSyBOq82r79yzV-JevcYnDjSyZL2wjLfrPlI"
          placeHolder="Add a song"
          maxResults="5"
          callback={this._onSearchResultsFound}
        />
      </div>
    );
  }

  _onSearchResultsFound(results) {
    const song = results[0];
    this.props.addSong(song);
  }
}

export default AddSong;
