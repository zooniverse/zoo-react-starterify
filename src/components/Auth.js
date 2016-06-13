import { Component, PropTypes } from 'react';
import firebase from 'firebase';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const initialState = {
  user: null,
};

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState, props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    return (
      firebase.auth().onAuthStateChanged((user) => {
      user
      ? this.setState({
          user: user
        })
      : console.log('User not logged in')
      })
    )
  }

  login() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((data) => {
      this.setState({
        user: data.user
      })
      console.log('Login successful. User: ', data.user.displayName)
    })
    .catch((error) => {
      console.log('Error logging in: ', error)
    });
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.setState({
        user: null
      })
      console.log('Logout successful')
    }, function(error) {
      console.log('Error logging out: ', error)
    });
  }

  render() {
    return (this.state.user)
    ? <LogoutButton user={this.state.user.displayName} logout={this.logout} />
    : <LoginButton login={this.login} />;
  }
}

export default Auth;
