import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Controlledcom = lazy(() => import('../controlledcom'));
const FormDemo = lazy(() => import('../formdemo'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Controlledcom}/>
        <Route path="/about" component={FormDemo}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App