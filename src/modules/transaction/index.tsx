import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ScreenLoading } from 'components/loading';

const TransactionList = React.lazy(() => import(/* webpackChunkName: 'transaction-list' */ './transaction-list'));
const TransactionDetail = React.lazy(
  () => import(/* webpackChunkName: 'transactions-detail' */ './transaction-detail'),
);

const Transaction: React.FC = () => (
  <React.Suspense fallback={<ScreenLoading />}>
    <Switch>
      <Route path="/" component={TransactionList} exact />
      <Route path="/:transactionId/transaction" component={TransactionDetail} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </React.Suspense>
);

export default Transaction;
