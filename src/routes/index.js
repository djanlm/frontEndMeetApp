import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Create_edit from '../pages/Create_edit';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Profile from '../pages/Profile';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/meetups" exact component={Create_edit} isPrivate />
      <Route path="/mymeetups" exact component={Dashboard} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/users" component={Profile} isPrivate />
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />
    </Switch>
  );
}
