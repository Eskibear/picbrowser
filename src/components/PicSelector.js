import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap/lib';
import { switchPic } from '../actions';

class PicSelector extends React.Component {
  render() {
    const { curIndex, picList, dispatch} = this.props;
    return (
      <div>
        <label>{`${curIndex+1} / ${picList.length}`}</label>
        <DropdownButton bsStyle="default" title={picList[curIndex]||'PicSelector'} id="pic-selector">
          {picList.map((pic, index)=>(
            <MenuItem
              key={`pic-${index}`}
              active={curIndex===index}
              onClick={() => {dispatch(switchPic(index));}}
              eventKey={index}>
              {pic}
            </MenuItem>
          ))}
        </DropdownButton>
      </div>
    );
  }
}

module.exports = PicSelector;