import React from 'react';
import YouTube from 'react-youtube';
 
class YouTubevid extends React.Component {
  render() {
    const opts = {
      height: '275',
      width: '500',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="7T0eeBxszEY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubevid