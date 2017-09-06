import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Dashboard from './Dashboard';
import Homepage from './Homepage';

const FourOhFour = () => <h1>404. The requested URL was not found</h1>;

const App = (
  <BrowserRouter>
    <div className="app">
      <Dashboard />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(App, document.getElementById('root'));
