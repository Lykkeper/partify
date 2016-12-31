import React from 'react';
import Youtube from 'react-youtube';

class VideoPlayer extends React.Component {
  render() {
    const width = window.innerWidth * .75;
    const height = width * 0.609375;

    const opts = {
      height: height,
      width: width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return(
      <div>
        <Youtube
          videoId={this.props.videoId}
          opts={opts}
          onEnd={this.props.onEnd}
        />
      </div>
    )
  }
}

export default VideoPlayer;
