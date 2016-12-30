import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class SongList extends React.Component {
  constructor() {
    super();

    this.renderSong = this.renderSong.bind(this);
  }

  renderSong(song) {
    return(
      <ListItem
        key={song.id.videoId}
        primaryText={song.snippet.title}
        leftAvatar={<Avatar src={song.snippet.thumbnails.default.url} />}
      />
    )
  }

  render() {
    return(
      <List>
        <Subheader>Songs</Subheader>
        {this.props.songs.map(this.renderSong)}
      </List>
    )
  }
}

export default SongList;
