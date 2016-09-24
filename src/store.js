
import { createStore } from 'redux';
import todoApp from './reducers';

// use reducers to create Store.
const globalStore = createStore(todoApp);


export default class Store {
  static addReducers(reducers) {
    return globalStore.addReducers(reducers);
  }
  static dispatch(action) {
    return globalStore.dispatch(action);
  }
  static subscribe(listener) {
    return globalStore.subscribe(listener);
  }
  static get store() {
    return globalStore;
  }
}