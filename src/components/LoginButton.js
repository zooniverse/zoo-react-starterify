import { Component, PropTypes } from 'react';


export default class LoginButton extends Component {

  render() {
    const login = this.props.login;
    return (
      <button type="submit" onClick={login}>Login</button>
    );
  }

}

LoginButton.propTypes = {
  login: PropTypes.func.isRequired
};
