import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LoginPage from './components/LoginPage';
import Home from './components/Home';

library.add(faLock, faEnvelope);

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