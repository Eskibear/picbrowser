var React = require('react');
var DefaultLayout = require('./layouts/DefaultLayout');
var PicZone = require('./PicZone');
var ControlPanel = require('./ControlPanel');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

class IndexPage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <Row>
          <Col xs={12} md={8}>
            <PicZone></PicZone>
          </Col>
          <Col xs={6} md={4}>
            <ControlPanel></ControlPanel>
          </Col>
        </Row>
      </DefaultLayout>
    );
  }
}
module.exports = IndexPage;