import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LoginPage from './components/LoginPage';
import withAuth from './components/withAuth';
import Home from './components/Home';

library.add(faLock, faEnvelope);

const Routes: React.SFC = () => {
  return (
    <Router>
      <Route exact={true} path='/' component={withAuth(Home)} />
      <Route path='/login' component={LoginPage} />
    </Router>
  );
}

export default Routes;