import { PropTypes } from 'react';

const LoginButton = (props) => {
    const classNames = 'btn btn-default navbar-btn navbar-right';
    const login = props.login;
    return (
      <button className={classNames} onClick={login}>Login</button>
    );
}

LoginButton.propTypes = {
  login: PropTypes.func.isRequired
};

export { LoginButton as default }
