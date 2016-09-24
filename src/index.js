import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import App from './containers/App';
import Store from './store';
import { retrieveDirInfo } from './utils/retrieve';


ReactDom.render(
  <Header />,
  document.querySelector('header')
);

retrieveDirInfo('', '.');

ReactDom.render(
  <Provider store={Store.store}>
    <App />
  </Provider>,
  document.getElementById('main-container')
);

ReactDom.render(
  <Footer />,
  document.querySelector('footer')
);

