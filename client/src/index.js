import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import Reducers from "./reducers";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';

const store = createStore( Reducers, compose (applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

