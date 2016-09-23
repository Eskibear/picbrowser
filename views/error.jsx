var React = require('react');

class HelloMessage extends React.Component {
  render() {
    return <div>{this.props.error.stack}</div>;
  }
}

module.exports = HelloMessage;