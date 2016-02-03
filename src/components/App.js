import Panoptes from 'panoptes-client';
import React from 'react';
import { Link } from 'react-router';

import packageJSON from '../../package.json';


export default class App extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  returnSomething(something) {
    // this is only for testing purposes. Check /test/components/App-test.js
    return something;
  }

  login() {
    Panoptes.auth.signInWithOAuthRedirect({
      appId: '24ad5676d5d25c6aa850dc5d5f63ec8c03dbc7ae113b6442b8571fce6c5b974c',
      redirectUri: 'http://localhost:3000/?env=staging',
    });
  }

  logout() {
    Panoptes.auth.signOut();
  }

  render() {
    const version = packageJSON.version;

    return (
      <div>
        <header className="site-header">
          <h1 className="title">React Starterify {version}</h1>
          <Link to="/about" className="link">About</Link>
          <Link to="/poweredby" className="link">Powered by</Link>
        </header>
        <section className="content-section">
          {this.props.children || 'Welcome to React Starterify'}
          <div>
            <button onClick={this.login}>Login</button>
            <button onClick={this.logout}>Logout</button>
          </div>
        </section>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.object,
};
