import React, { Component } from 'react';

import './Stream.css';

class Stream extends Component {

  componentDidMount() {
    new window.Twitch.Embed("twitch-embed", {
      width: "100%",
      height: "100%",
      channel: "senyutv"
    });
  }

  render() {

    document.title = `Senyu | Stream`;

    return (
      <div id="twitch-embed"></div>
    );
  }
}


export default Stream;
