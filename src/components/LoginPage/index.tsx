import React from 'react';
import './LoginPage.scss';
import LoginForm from '../LoginForm';


const LoginPage: React.SFC = () => {
  return (
    <React.Fragment>
      <div className="top-banner">
        <span className="background-text">Auth0</span>
      </div>
      <LoginForm />
    </React.Fragment>
  );
}

export default LoginPage;
