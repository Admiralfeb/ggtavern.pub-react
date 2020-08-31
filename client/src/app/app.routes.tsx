import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Contact,
  Love,
  Memoriam,
  Games,
  Foods,
  NotFoundComponent,
  AboutAuthor,
} from 'app/components';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/memoriam'>
        <Memoriam />
      </Route>
      <Route path='/food'>
        <Foods />
      </Route>
      <Route path='/games'>
        <Games />
      </Route>
      <Route path='/author'>
        <AboutAuthor />
      </Route>
      <Route path='/dev'>
        <AboutAuthor />
      </Route>
      <Route path='/' exact>
        <Love />
      </Route>
      <Route path='*'>
        <NotFoundComponent />
      </Route>
    </Switch>
  );
};
