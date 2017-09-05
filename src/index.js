import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Dashboard from './Dashboard';
import Homepage from './Homepage';

const App = (
  <BrowserRouter>
    <div className="app">
      <Dashboard />
      <Homepage />
    </div>
  </BrowserRouter>
);

render(App, document.getElementById('root'));
