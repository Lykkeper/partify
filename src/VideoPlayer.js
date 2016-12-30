import React from 'react';
import Youtube from 'react-youtube';

class VideoPlayer extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return(
      <div>
        <Youtube
          videoId={this.props.videoId}
          opts={opts}
        />
      </div>
    )
  }
}

export default VideoPlayer;
