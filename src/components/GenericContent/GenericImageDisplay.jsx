import React, { Component } from 'react';
import { Page,  Document} from 'react-pdf';
import PropTypes from 'prop-types';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';




import './GenericImageDisplay.css';

class GenericImageDisplay extends Component {

  render() {

    return (
      <div className="generic-image-viewer">
        <a href={this.props.filePath} target="_blank" className="generic-image-download">
        <img src={this.props.filePath} alt={this.props.altTag}/>
        </a>
        <h2><a href={this.props.filePath} target="_blank" className="generic-image-download">Télécharger <FaCloudDownload /></a></h2>
      </div>
    );
  }
}

GenericImageDisplay.propTypes = {
  filePath: PropTypes.string,
  altTag: PropTypes.string,
};

export default GenericImageDisplay;
