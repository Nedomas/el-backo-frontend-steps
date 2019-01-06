import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/Index'

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Index} />
    </Switch>
  </Router>
)