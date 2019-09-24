import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './LoginForm.scss';

const LoginForm: React.SFC = () => {
  return (
    <div className="login">
      <form id="login-form" autoComplete="off">
        <span id="email-wrapper">
          <input id="email" type="text" name="email" placeholder=' ' autoComplete="off" autoFocus />
          <label htmlFor="email">email</label>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </span>
        <span id="password-wrapper">
          <input id="password" type="password" name="password" placeholder=' ' />
          <label htmlFor="password">password</label>
          <FontAwesomeIcon icon={faLock} className="icon" />
        </span>
        <button type="submit"><span>login</span></button>
      </form>
    </div>
  );
}

export default LoginForm;