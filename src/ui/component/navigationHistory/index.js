import { connect } from 'react-redux';
// import { } from 'redux/selectors/content';
import { doClearContentHistoryUri, selectHistoryPageCount, makeSelectHistoryForPage } from 'lbry-redux';
import UserHistory from './view';

const select = (state, props) => {
  const { search } = props.location;
  const urlParams = new URLSearchParams(search);
  const page = Number(urlParams.get('page')) || 0;

  return {
    page,
    pageCount: selectHistoryPageCount(state),
    historyItems: makeSelectHistoryForPage(page)(state),
  };
};

const perform = dispatch => ({
  clearHistoryUri: uri => dispatch(doClearContentHistoryUri(uri)),
});

export default connect(
  select,
  perform
)(UserHistory);
