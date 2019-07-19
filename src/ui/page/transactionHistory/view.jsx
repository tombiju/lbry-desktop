// @flow
import React from 'react';
import classnames from 'classnames';
import TransactionList from 'component/transactionList';
import Page from 'component/page';

type Props = {
  fetchMyClaims: () => void,
  fetchTransactions: () => void,
  fetchingTransactions: boolean,
  transactions: Array<{}>,
};

class TransactionHistoryPage extends React.PureComponent<Props> {
  componentDidMount() {
    const { fetchMyClaims, fetchTransactions } = this.props;

    fetchMyClaims();
    fetchTransactions();
  }

  render() {
    const { transactions } = this.props;

    return (
      <Page>
          <TransactionList transactions={transactions} title={__('Transaction History')} />
      </Page>
    );
  }
}

export default TransactionHistoryPage;
