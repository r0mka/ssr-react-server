import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import 'babel-polyfill';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {/* pre react-router config */}
      {/* <Routes /> */}
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
