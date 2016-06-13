import { PropTypes } from 'react';

const LogoutButton = (props) => {
  const classNames = 'btn btn-default navbar-btn navbar-right';
  const logout = props.logout;
  return (
    <button className={classNames} onClick={logout}>Logout {props.user  }</button>
  );
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
}

export { LogoutButton as default }
