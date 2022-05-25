
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
 
import Header from '../components/Header';
 
const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => { 
 
  function checkAuthenticated (props) {
    if (isAuthenticated) {
      return (
        <div>
          <Header />
          <Component {...props} />
        </div>
        );
 
    } else {
      return <Redirect to="/" />;
    }
  }
 
  return (
    <Route {...rest} component={(props) => checkAuthenticated(props)} />
  );
};
 
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});
 
export default connect(mapStateToProps)(PrivateRoute);