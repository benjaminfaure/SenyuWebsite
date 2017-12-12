import React, { Component } from 'react';
import { Helmet } from "react-helmet";

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
    const meta = <Helmet>
      <title>Senyu | Stream</title>
    </Helmet>

    return (
      <div id="twitch-embed">
        {meta}
      </div>
    );
  }
}


export default Stream;
