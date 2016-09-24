import { combineReducers } from 'redux';
import { INITIALIZE, SWITCH_DIR, SWITCH_PIC } from './actions';
import path from 'path';


export const DEFAULT_STATE = {
  curIndex: 0,
  curDir: path.join('.', 'pic'),
  picList: ['Eskibear.jpg', 'yukata.jpg'],
  dirList: ['..', 'pic']
};

function defaultReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case INITIALIZE:
      console.log(action.obj);
      return Object.assign({}, state,
        action.obj
      );
    case SWITCH_PIC:
      return Object.assign({}, state, {
        curIndex: action.index
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  defaultReducer
});

export default todoApp;