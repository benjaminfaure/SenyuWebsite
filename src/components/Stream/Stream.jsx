import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

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
    const meta = {
      title: `Senyu | Stream`,
    };

    return (
      <div id="twitch-embed">
        <DocumentMeta {...meta} />
      </div>
    );
  }
}


export default Stream;
