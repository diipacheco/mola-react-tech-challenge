import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Profile } from '../pages/Profile';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/profile/:login" component={Profile} />
  </Switch>
);
