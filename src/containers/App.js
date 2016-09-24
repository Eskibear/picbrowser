import React from 'react';
import { Col } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import PicZone from '../components/PicZone';
import ControlPanel from '../components/ControlPanel';

class App extends React.Component {
  render() {
    const { curIndex, curDir, picList, dirList } = this.props;
    console.log(this.props);
    return (
      <div>
        <Col xs={15} md={10}>
          <PicZone {...this.props} id="pic-zone"/>
        </Col>
        <Col xs={3} md={2}>
          <ControlPanel {...this.props} id="control-panel"/>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    curIndex: state.defaultReducer.curIndex,
    curDir: state.defaultReducer.curDir,
    picList: state.defaultReducer.picList,
    dirList: state.defaultReducer.dirList
  };
};

export default connect(mapStateToProps)(App);