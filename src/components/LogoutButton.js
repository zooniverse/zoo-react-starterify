import { Component, PropTypes } from 'react';


export default class LogoutButton extends Component {

  render() {
    const logout = this.props.logout;
    return (
      <div className="logout-button">
        <span>{this.props.user.login}</span>
        <button type="submit" onClick={logout}>Logout</button>
      </div>
    );
  }

}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
