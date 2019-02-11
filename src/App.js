import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/Index'
import Game from './components/Game'
import SingleplayerNew from './components/SingleplayerNew'
import SingleplayerPlayerNames from './components/SingleplayerPlayerNames'

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Index} />
      <Route path='/singleplayer/new' exact component={SingleplayerNew} />
      <Route path='/singleplayer/new/:playersCount' exact component={SingleplayerPlayerNames} />
      <Route exact path='/games/:gameId' component={Game} />
    </Switch>
  </Router>
)
