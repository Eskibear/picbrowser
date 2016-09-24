import React from 'react';
import { Image } from 'react-bootstrap';
import path from 'path';
import { switchPic } from '../actions';

class PicZone extends React.Component {
  render() {
    const { curIndex, picList, curDir, dispatch } = this.props;
    console.log(this.props);
    let content;
    if(picList && picList.length > 0){
      const relativePath = path.join(curDir, picList[curIndex]);
      content = (
        <Image
          src={path.join('storage', relativePath)}
          className="bi-responsive"
          onClick={() => {dispatch(switchPic((curIndex+1)%picList.length));}}
        />
      );
    }
    else {
      content = "No Pics";
    }
    return (
      <div className="pic-zone">
        {content}
      </div>
    );
  }
}

PicZone.defaultProps = {
};

module.exports = PicZone;