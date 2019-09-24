import * as React from 'react';

import './LoginForm.scss';
import WrappedInput from '../WrappedInput';

const LoginForm: React.SFC = () => {
  return (
    <div className="login">
      <form autoComplete="off">
        <WrappedInput name="email" type="text" autoFocus icon="envelope" />
        <WrappedInput name="password" type="password" icon="lock" />
        <button type="button">
          <span>login</span>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;