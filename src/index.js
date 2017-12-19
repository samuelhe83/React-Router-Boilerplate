import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

const App = (
  <BrowserRouter>
    <div className="app" />
  </BrowserRouter>
);

render(App, document.getElementById('root'));
