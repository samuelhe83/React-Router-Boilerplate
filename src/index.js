import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Dashboard from './Dashboard';
import Homepage from './Homepage';
import About from './About';
import HowToUse from './HowToUse';
import Technical from './Technical';
import FourOhFour from './FourOhFour';

const App = (
  <BrowserRouter>
    <div className="app">
      <Dashboard />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/use" component={HowToUse} />
        <Route path="/technical" component={Technical} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(App, document.getElementById('root'));
