import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import IssuesList from './components/IssuesList';

import firebase from 'firebase';

// Todo: let's find a better way to include Styles,
// currently Styles looks like an unused var to eslint
/* eslint "no-unused-vars": 1 */
import Styles from './styles/main.styl';

import favicon from './images/favicon.ico';

window.React = React;
window.firebase = firebase;

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={IssuesList} />
      <Route path="/about" component={About}/>

    </Route>
  </Router>
  , document.getElementById('root')
);
