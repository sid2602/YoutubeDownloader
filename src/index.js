import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyles from './GlobalStyle/GlobalStyle'
import { Provider } from 'react-redux';
import configureStore from './Data/Store.js'


  const store = configureStore();

ReactDOM.render(
  <Provider store ={ store}>
    <GlobalStyles/>
    <App />
  </Provider>,
  document.getElementById('root')
);
