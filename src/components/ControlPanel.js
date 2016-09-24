import React from 'react';
import PicSelector from './PicSelector';
import DirectoryList from './DirectoryList';

class ControlPanel extends React.Component {
  render() {
    return (
      <div>
        <PicSelector {...this.props} />
        <DirectoryList {...this.props} />
      </div>
    );
  }
}

module.exports = ControlPanel;