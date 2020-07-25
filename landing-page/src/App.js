import React, { Component } from 'react';
import Main from './Main';
import './App.css';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={() => ( <Main /> )} />
          <Switch>
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;