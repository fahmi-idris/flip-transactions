import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ScreenLoading } from 'components/loading';
import Transactions from './modules/transaction';
import TransactionsProvider from './context/TransactionsContext';

const App: React.FC = () => (
  <React.Suspense fallback={<ScreenLoading />}>
    <TransactionsProvider>
      <Switch>
        <Route path="/" component={Transactions} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </TransactionsProvider>
  </React.Suspense>
);

export default App;
