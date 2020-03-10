import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import NotLoggedInRoute from './notLoggedInRoute';

import AuthLayout from '../Components/Layouts/authLayout';
import LoggedLayout from '../Components/Layouts/loggedLayout';

import Home from '../Containers/Home';

interface IProps {
  children: any,
}

const RouterComponent = ({ children }: IProps) => (
  <Router>
    <Switch>
      <PrivateRoute path="/home">
        <LoggedLayout header="Home">
          <Home />
        </LoggedLayout>
      </PrivateRoute>

      <NotLoggedInRoute path="/user">
        <Home />
      </NotLoggedInRoute>

      <NotLoggedInRoute exact path="/login">
        <AuthLayout header="Login">
          <Home />
        </AuthLayout>
      </NotLoggedInRoute>

      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
    {children}
  </Router>
);

export default RouterComponent;
