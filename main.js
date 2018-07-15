import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.js'
import appReducer from './reducers/reducers';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

let store = createStore(appReducer);
let rootElement = document.getElementById('app');

render(
   <Provider store = {store}>
      <App />
   </Provider>, rootElement
)
module.hot.accept();