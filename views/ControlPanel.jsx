var React = require('react');
var PicSelector = require('./PicSelector');
var DirectoryList = require('./DirectoryList');

class ControlPanel extends React.Component {
  render() {
    return (
      <div>
        {'ControlPanel'}
        <PicSelector></PicSelector>
        <DirectoryList></DirectoryList>
      </div>
    );
  }
}

module.exports = ControlPanel;