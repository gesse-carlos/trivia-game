import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/trivia-game" component={ Login } />
        <Route path="/trivia-game/settings" component={ Settings } />
        <Route exact path="/trivia-game/feedback" component={ Feedback } />
        <Route exact path="/trivia-game/game" component={ Game } />
      </Switch>
    </div>
  );
}
