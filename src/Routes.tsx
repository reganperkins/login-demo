import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';

const Routes: React.SFC = () => {
  const [ loggedIn, setLoggedIn ] = React.useState(false);
  return (
    <Router>
      { loggedIn
        ? <Route path='/' component={Home} />
        : <Route path='/' component={LoginPage} />
      }
    </Router>
  );
}

export default Routes;