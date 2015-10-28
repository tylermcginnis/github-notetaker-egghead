import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router';
import routes from './config/routes';

render((
  <Router>
    {routes}
  </Router>
), document.getElementById('app')); 