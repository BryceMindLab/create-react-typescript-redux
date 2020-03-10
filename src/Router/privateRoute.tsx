import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../Lib/Utils/auth';

interface IProps {
  render?: Function,
  path?: string,
}

class PrivateRoute extends Component<IProps, {}> {
  render() {
    const { render, children, ...rest } = this.props;
    const accessToken = getToken();
    return (
      <Route
        {...rest}
        render={(...props) => {
          if (accessToken) {
            if (render) {
              return render(...props);
            }
            return children;
          }
          return (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }}
      />
    );
  }
}
export default PrivateRoute;
