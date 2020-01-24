import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Host from './components/Host'
import Join from './components/Join'

import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact>{Home}</Route>
      <Route path='/host' exact>{Host}</Route>
      <Route path='/join' exact>{Join}</Route>
    </Switch>
  </Router>
)

export default App;
