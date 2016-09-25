import { combineReducers } from 'redux';
import { INITIALIZE, SWITCH_PIC } from './actions';
import config from "../config";


export const DEFAULT_STATE = {
  baseMap: config.defaultMap,
  curIndex: 0,
  curDir: '/',
  picList: [],
  dirList: ['..', '/']
};

function defaultReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case INITIALIZE:
      localStorage.currentState = JSON.stringify(action.obj);
      return Object.assign({}, state,
        action.obj
      );
    case SWITCH_PIC:
      return Object.assign({}, state, {
        curIndex: action.index
      });
    // case SWITCH_MAP:
    //   return Object.assign({}, state, {
    //     baseMap: action.baseMap
    //   });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  defaultReducer
});

export default todoApp;