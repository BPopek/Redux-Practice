import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav/Nav';

import Home from './routes/home/Home';
import Pokemon from './routes/pokemon/Pokemon';

const App = () => (
  <div className="App">
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route path="/:name" component={Pokemon} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
