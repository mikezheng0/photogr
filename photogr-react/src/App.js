import React, { Component } from 'react';
import { MainLayout } from './Pages'
import './App.css';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/" component={MainLayout} />
      </Switch>
    );
  }
}

export default App;
