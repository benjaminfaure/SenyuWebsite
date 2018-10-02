import React, { Component } from 'react';
import { Page, Document } from 'react-pdf';
/*import { Document } from 'react-pdf/build/entry.webpack';*/
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { withNamespaces, Trans } from 'react-i18next';

import { FaAngleLeft, FaAngleRight, FaCloudDownloadAlt } from 'react-icons/fa';



import './GenericPDFDisplay.css';

class GenericPDFDisplay extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  onClickNext() {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
  }

  onClickPrevious() {
    if (this.state.pageNumber > 1) {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  }

  render() {

    const { t } = this.props;

    const { pageNumber, numPages } = this.state;


    let pager;
    if (this.state.numPages > 1) {
      pager = <div className="generic-pdf-pager">
        <span className="generic-pdf-pager-button" onClick={this.onClickPrevious.bind(this)} ><FaAngleLeft /> </span>
        <span>
          <Trans i18nKey="content.generic.pagination" pageNumber={pageNumber} numPages={numPages}>
            Page {pageNumber} sur {numPages}
          </Trans>
        </span>
        <span className="generic-pdf-pager-button" onClick={this.onClickNext.bind(this)} ><FaAngleRight /> </span>
      </div>;
    }

    return (
      <div className="generic-pdf-viewer">
        <MediaQuery query="(min-width: 1024px)">
          {pager}
          <Document
            file={this.props.filePath}
            className="generic-pdf-display"
            onLoadSuccess={this.onDocumentLoad.bind(this)}>
            <Page pageNumber={pageNumber} />
          </Document>
          {pager}
        </MediaQuery>
        <h2><a href={this.props.filePath} target="_blank" className="generic-pdf-download">{t('content.generic.download')} <FaCloudDownloadAlt /></a></h2>
      </div>
    );
  }
}

GenericPDFDisplay.propTypes = {
  filePath: PropTypes.string
};

export default withNamespaces('translations')(GenericPDFDisplay);
