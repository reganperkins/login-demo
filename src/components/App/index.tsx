import React from 'react';
import './App.scss';
import LoginForm from '../LoginForm';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="top-banner">
        <span className="background-text">Auth0</span>
      </div>
      <LoginForm />
    </React.Fragment>
  );
}

export default App;
