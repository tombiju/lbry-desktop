import { connect } from 'react-redux';

import { doFetchChannelListMine, selectFetchingMyChannels, selectMyChannelUris } from 'lbry-redux';
import { doCheckPendingPublishes } from 'redux/actions/publish';

import MyChannelsPage from './view';

const select = state => ({
  uris: selectMyChannelUris(state),
  fetching: selectFetchingMyChannels(state),
});

const perform = dispatch => ({
  checkPendingPublishes: () => dispatch(doCheckPendingPublishes()),
  fetchChannelListMine: () => dispatch(doFetchChannelListMine()),
});

export default connect(
  select,
  perform
)(MyChannelsPage);
