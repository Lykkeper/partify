import React from 'react';
import Avatar from 'material-ui/Avatar';
import Youtube from 'react-youtube';

class VideoPlayer extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return(
      <div>
        <Youtube
          videoId="i3Jv9fNPjgk"
          opts={opts}
        />
      </div>
    )
  }
}

export default VideoPlayer;
