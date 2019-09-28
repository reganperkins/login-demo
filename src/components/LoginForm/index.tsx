import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './LoginForm.scss';
import WrappedInput from '../WrappedInput';
import { get } from '../../utils/helper-functions';


const LoginForm: React.SFC<RouteComponentProps> = (props) => {
  const [ invalidFields, setInvalidFields ] = React.useState(false);
  const [ submitSuccess, setSubmitSuccess ] = React.useState(false);

  const emailInput = React.createRef<HTMLInputElement>();
  const passwordInput = React.createRef<HTMLInputElement>();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let email = get(emailInput, 'current.value');
    const password = get(passwordInput, 'current.value');
    if (!email || !password) {
      setInvalidFields(true);
      setSubmitSuccess(false);
      return false;
    }
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res: any) => {
      if (res.status === 200) {
        setInvalidFields(false);
        setSubmitSuccess(true);
        setTimeout(() => props.history.push('/'), 600);
      } else {
        setInvalidFields(true);
        setSubmitSuccess(false);
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch((err: Error) => {
      console.error(err);
      setInvalidFields(true);
    });
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

export default withRouter(LoginForm);