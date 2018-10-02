import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import { FaCloudDownloadAlt } from 'react-icons/fa';




import './GenericImageDisplay.css';

class GenericImageDisplay extends Component {

  render() {

    const { t } = this.props;

    return (
      <div className="generic-image-viewer">
        <a href={this.props.filePath} target="_blank" rel="noopener noreferrer" className="generic-image-download">
          <img src={this.props.filePath} alt={this.props.altTag} />
        </a>
        <h2><a href={this.props.filePath} target="_blank" rel="noopener noreferrer" className="generic-image-download">{t('content.generic.download')} <FaCloudDownloadAlt /></a></h2>
      </div>
    );
  }
}

GenericImageDisplay.propTypes = {
  filePath: PropTypes.string,
  altTag: PropTypes.string,
};

export default withNamespaces('translations')(GenericImageDisplay);
