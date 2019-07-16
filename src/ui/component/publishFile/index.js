import { connect } from 'react-redux';
import { selectBalance } from 'lbry-redux';
import { selectIsStillEditing, makeSelectPublishFormValue } from 'redux/selectors/publish';
import { doUpdatePublishForm, doClearPublish } from 'redux/actions/publish';
import PublishPage from './view';

const select = state => ({
  name: makeSelectPublishFormValue('name')(state),
  filePath: makeSelectPublishFormValue('filePath')(state),
  isStillEditing: selectIsStillEditing(state),
  balance: selectBalance(state),
});

const perform = dispatch => ({
  updatePublishForm: value => dispatch(doUpdatePublishForm(value)),
  clearPublish: () => dispatch(doClearPublish()),
});

export default connect(
  select,
  perform
)(PublishPage);
