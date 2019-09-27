import * as React from 'react';

import './LoginForm.scss';
import WrappedInput from '../WrappedInput';
import { get } from '../../utils/helper-functions';

const LoginForm: React.SFC = () => {
  const [ invalidFields, setInvalidFields ] = React.useState(false);
  const [ submitSuccess, setSubmitSuccess ] = React.useState(false);

  const emailInput = React.createRef<HTMLInputElement>();
  const passwordInput = React.createRef<HTMLInputElement>();


  const handleSubmit = () => {
    let email = get(emailInput, 'current.value');
    const password = get(passwordInput, 'current.value');

    if (email !== 'test@test.com' || password !== 'test') {
      setInvalidFields(true);
      return false;
    }
    setInvalidFields(false);
    setSubmitSuccess(true);
  }

  const handleKeyUp = () => {
    if (invalidFields) {
      setInvalidFields(false);
    }
  }

  const handleFocus = () => {
    if (submitSuccess) {
      setSubmitSuccess(false);
      if (emailInput && emailInput.current) {
        emailInput.current.value = '';
      }
      if (passwordInput && passwordInput.current) {
        passwordInput.current.value = '';
      }
    }
  }

  return (
    <div className="login">
      <form className={submitSuccess ? 'success' : ''} autoComplete="off">
        <WrappedInput
          ref={emailInput}
          name="email"
          type="text" 
          onFocus={handleFocus}
          icon="envelope"
          invalid={invalidFields}
          onKeyUp={handleKeyUp}
          autoFocus
        />
        <WrappedInput
          ref={passwordInput}
          name="password"
          type="password"
          icon="lock"
          invalid={invalidFields}
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
        />
        <button onClick={handleSubmit} type="button">
          <span>login</span>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;