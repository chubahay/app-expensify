
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => { 
 
  function checkAuthenticated (props) {
    if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
    } else {
      return (
          <Component {...props} />
        );
    }
  }
 
  return (
    <Route {...rest} component={(props) => checkAuthenticated(props)} />
  );
};
 
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});
 
export default connect(mapStateToProps)(PublicRoute);