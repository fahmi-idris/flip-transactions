import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ScreenLoading } from 'components/loading';

const Transactions = React.lazy(() => import(/* webpackChunkName: 'transactions' */ './list'));

const Transaction: React.FC = () => (
  <React.Suspense fallback={<ScreenLoading />}>
    <Switch>
      <Route path="/" component={Transactions} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </React.Suspense>
);

export default Transaction;
