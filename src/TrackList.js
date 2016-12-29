import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class TrackList extends React.Component {
  render() {
    return(
      <List>
        <Subheader>Tracks</Subheader>
        <ListItem
          primaryText="Awesome Song"
          leftAvatar={<Avatar src="http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg" />}
        />
        <ListItem
          primaryText="Awesome Song"
          leftAvatar={<Avatar src="http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg" />}
        />
        <ListItem
          primaryText="Awesome Song"
          leftAvatar={<Avatar src="http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg" />}
        />
        <ListItem
          primaryText="Awesome Song"
          leftAvatar={<Avatar src="http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg" />}
        />
      </List>
    )
  }
}

export default TrackList;
