import React from 'react';
import { Image, Button } from 'react-bootstrap';
import path from 'path';
import { AutoAffix } from 'react-overlays';
import { switchPic } from '../actions';

class PicZone extends React.Component {
  render() {
    const { baseMap, curIndex, picList, curDir, dispatch} = this.props;
    let content;
    if(picList && picList.length > 0){
      const relativePath = path.join(curDir, picList[curIndex]);
      content = (
        <div className="wrapper">
          <div className="pic-zone">
            <Image
              src={path.join(baseMap.virtualBase, relativePath)}
              className="bi-responsive"
            />
          </div>
          <div className="on-pic-control">
            <AutoAffix container={this}>
              <div>
                <Button
                  className="control-btn control-btn-prev"
                  onClick={() => {
                    dispatch(switchPic((curIndex+picList.length-1)%picList.length));
                  }}>
                  <span className="glyphicon glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                </Button>
                <Button
                  className="control-btn control-btn-next"
                  onClick={() => {
                    dispatch(switchPic((curIndex+1)%picList.length));
                  }}>
                  <span className="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                </Button>
              </div>
            </AutoAffix>
          </div>
        </div>
      );
    }
    else {
      content = <div className="pic-zone">
        <p>No picture found in this folder.</p>
      </div>;
    }
    return content;
  }
}

PicZone.defaultProps = {
};

module.exports = PicZone;