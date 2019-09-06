import { connect } from 'react-redux';
import { selectRecentHistory } from 'lbry-redux';
import RecentUserHistory from './view';

const select = (state, props) => ({
  history: selectRecentHistory(state),
});

export default connect(
  select,
  null
)(RecentUserHistory);
