import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap/lib';
import { switchDir } from '../actions';
import path from 'path';
import { retrieveDirInfo } from '../utils/retrieve';

class DirectoryList extends React.Component {
  render() {
    const { curDir, dirList, baseMap } = this.props;
    return (
      <ListGroup>
        <label>{curDir}</label>
        {dirList.map((dir, index)=>(
          <ListGroupItem
            key={`dir-${index}`}
            onClick={() => {retrieveDirInfo(baseMap, path.join(curDir, dir));}}>
            {dir}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
export default DirectoryList;