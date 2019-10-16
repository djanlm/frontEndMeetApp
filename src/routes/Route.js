import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const signed = true; // check if the user is logged

  /** If the user is not loggedin and the page is private, he will be redirected to the signIn page */
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  /** If the user is loggedin and the page is not private, he will be redirected to dashboard page */
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,

  /** When the prop can be more than one type, those types should be inside of this array.
  In this case component prop can be a function or a class */
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
