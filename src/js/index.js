import ES6Promise from 'es6-promise';
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import MainContainer from './containers/MainContainer';
import Store from './store';
import { retrieveDirInfo } from './utils/retrieve';
import config from '../../config';
import { loadSnapshot } from './utils/lsutil';
ES6Promise.polyfill();

ReactDom.render(
  <Header />,
  document.querySelector('header')
);

try {
  const state = loadSnapshot();
  const { virtualBase, realBase, curDir} = state;
  if(virtualBase && realBase && curDir) {
    retrieveDirInfo({virtualBase, realBase}, curDir);
  }
  else {
    retrieveDirInfo(config.defaultMap, '/');
  }
}
catch (err){
  console.error(err);
  console.error(err.stack);
  retrieveDirInfo(config.defaultMap, '/');
}


ReactDom.render(
  <Provider store={Store.store}>
    <MainContainer />
  </Provider>,
  document.getElementById('main-container')
);

ReactDom.render(
  <Footer />,
  document.querySelector('footer')
);

