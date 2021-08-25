import React from 'react';

/* With Index
------------------------------*/
// Connected
import ComponentA from './components/ComponentA';
// Non-connected
import ComponentB from './components/ComponentB';

/* No Index
------------------------------*/
// Connected
import ComponentC from './components/ComponentC/ComponentC';
// Non-connected
import ComponentD from './components/ComponentD/ComponentD';

/* Name all the things!
------------------------------*/
import ComponentE from './components/ComponentE/ComponentE';

const App = () => (
  <div className="App">
    <ComponentA />
    <ComponentB />
    <ComponentC />
    <ComponentD />
    <ComponentE />
  </div>
);

export default App;
