import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDom.render(
  <Header />,
  document.querySelector('header')
);

ReactDom.render(
  <Footer />,
  document.querySelector('footer')
);

