import React from 'react';
import { Col } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import PicZone from '../components/PicZone';
import ControlPanel from '../components/ControlPanel';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Col xs={15} md={10} className="left-zone no-padding">
          <PicZone {...this.props} id="pic-zone"/>
        </Col>
        <Col xs={3} md={2} className="right-zone no-padding">
          <ControlPanel {...this.props} id="control-panel"/>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    baseMap: state.defaultReducer.baseMap,
    curIndex: state.defaultReducer.curIndex,
    curDir: state.defaultReducer.curDir,
    picList: state.defaultReducer.picList,
    dirList: state.defaultReducer.dirList
  };
};

export default connect(mapStateToProps)(MainContainer);