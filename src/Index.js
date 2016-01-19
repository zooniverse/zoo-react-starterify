import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';

// Todo: let's find a better way to include Styles,
// currently Styles looks like an unused var to eslint
/* eslint "no-unused-vars": 1 */
import Styles from './styles/main.styl';

window.React = React;

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/poweredby" component={PoweredBy}/>
    </Route>
  </Router>
  , document.getElementById('root')
);
