import React from 'react';
import Panoptes from 'panoptes-client';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this._parseAuthString = this._parseAuthString.bind(this);
    this.completeLogin = this.completeLogin.bind(this);
    this.completeLogin();
  }

  // Deserializes the OAuth string returned by Panoptes
  _parseAuthString(string) {
    const authObject = string
      .substr(1)    // remove leading slash
      .split('&')   // split into 'key=value' strings
      .reduce((previous, pairString) => {
        const keyValueArray = pairString.split('=');
        const result = Object.assign({}, previous);
        result[keyValueArray[0]] = keyValueArray[1];
        return result;
      }, {});

    return authObject;
  }

  completeLogin() {
    const loginParams = this._parseAuthString(this.props.location.pathname);
    Panoptes.auth.completeSignInWithOAuth(loginParams);
    this.props.history.pushState(null, '/');
  }

  render() {
    return null;
  }
}

Login.propTypes = {
  location: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};
