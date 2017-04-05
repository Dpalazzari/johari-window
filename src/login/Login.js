import React, { PropTypes as T } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../utils/AuthService';

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    if(localStorage.getItem('profile')){
      return <Redirect to="/" />
    }
    return (
      <div>
        <h2>Login</h2>
        <button onClick={auth.login.bind(this)}>Login</button>
      </div>
    )
  }
}

export default Login;