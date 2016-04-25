import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';

import { oauth } from 'panoptes-client';
import { appId } from './constants/config';
import { createStore } from 'redux';
import { user } from './reducers';
const store = createStore(user);

// Todo: let's find a better way to include Styles,
// currently Styles looks like an unused var to eslint
/* eslint "no-unused-vars": 1 */
import Styles from './styles/main.styl';

window.React = React;

oauth.init(appId)
  .then(function () {
    ReactDOM.render(
      <Provider store={user}>
        <Router>
          <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/poweredby" component={PoweredBy}/>
          </Route>
        </Router>
      </Provider>
      , document.getElementById('root')
    );
});
