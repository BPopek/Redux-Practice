import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './routes/home/Home';

const App = () => (
  <div className="App">
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
