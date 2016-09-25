import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap/lib';
import { switchMap } from '../actions';
import config from '../../config';
import { retrieveDirInfo } from '../utils/retrieve';

class MapSelector extends React.Component {
  render() {
    const { baseMap } = this.props;
    return (
      <div className="map-selector-zone">
        <p>{'Current Map:'}</p>
        <DropdownButton bsStyle="default" title={baseMap.name||'MapSelector'} id="map-selector">
          {config.availableMaps.map((entry, index)=>(
            <MenuItem
              key={`map-${index}`}
              active={baseMap.name===entry.name}
              onClick={() => {retrieveDirInfo(entry, '/');}}
              eventKey={index}>
              {entry.name}
            </MenuItem>
          ))}
        </DropdownButton>
      </div>
    );
  }
}

module.exports = MapSelector;