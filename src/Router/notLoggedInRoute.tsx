import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../Lib/Utils/auth';

interface IProps {
  render?: Function,
  path?: string,
  children?: any,
  exact?: any,
}

class NotLoggedInRoute extends Component<IProps, {}> {
  render() {
    const { render, children, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(...props) => {
          if (!getToken()) {
            if (render) {
              return render(...props);
            }
            return children;
          }
          return (
            <Redirect
              to={{
                pathname: '/home',
              }}
            />
          );
        }}
      />
    )
  }
};

export default NotLoggedInRoute;
