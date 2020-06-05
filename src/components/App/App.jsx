import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CharacterPage from '../../CharacterPage';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>

            <Route
              path="/"
              exact
              render={(routerProps) => <CharacterPage {...routerProps} />}                       
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

