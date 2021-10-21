import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Finance, Root } from '../pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/finance" component={Finance} />
    </Switch>
  </BrowserRouter>
);

export default App;
