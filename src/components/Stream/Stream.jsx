import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { translate } from 'react-i18next';

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

    const { t } = this.props;

    const meta = <Helmet>
      <title>Senyu | {t('titles.stream')}</title>
    </Helmet>

    return (
      <div id="twitch-embed">
        {meta}
      </div>
    );
  }
}


export default translate('translations')(Stream);
