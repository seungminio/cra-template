import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Finance from '../pages/Finance';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/finance" component={Finance} />
    </Switch>
  </BrowserRouter>
);

export default App;
