import React from 'react';
import PicSelector from './PicSelector';
import DirectoryList from './DirectoryList';
import MapSelector from './MapSelector';

class ControlPanel extends React.Component {
  render() {
    return (
      <div>
        <MapSelector {...this.props} />
        <PicSelector {...this.props} />
        <DirectoryList {...this.props} />
      </div>
    );
  }
}

module.exports = ControlPanel;