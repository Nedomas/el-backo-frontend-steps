import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/Index'
import SingleplayerNew from './components/SingleplayerNew'

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Index} />
      <Route path='/singleplayer/new' exact component={SingleplayerNew} />
    </Switch>
  </Router>
)
