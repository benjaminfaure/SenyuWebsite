import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './Stream.scss';

class Stream extends Component {

  componentDidMount() {
    new window.Twitch.Embed("twitch-embed", {
      width: "100%",
      height: "100%",
      channel: "senyutv"
    });
  }

  render() {

    const { t } = this.props;

    document.title = `Senyu | ${ t('titles.stream') }`

    return (
      <div id="twitch-embed">
      </div>
    );
  }
}


export default withTranslation('translations')(Stream);
