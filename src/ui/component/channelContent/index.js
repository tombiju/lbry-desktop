import { connect } from 'react-redux';
import { PAGE_SIZE } from 'constants/claim';
import {
  makeSelectClaimIsMine,
  selectLastClaimSearchUris,
  doClaimSearch,
  selectFetchingClaimSearch,
  makeSelectTotalItemsForChannel,
} from 'lbry-redux';
import ChannelPage from './view';

const select = (state, props) => ({
  uris: selectLastClaimSearchUris(state),
  loading: selectFetchingClaimSearch(state),
  channelIsMine: makeSelectClaimIsMine(props.uri)(state),
  totalItems: makeSelectTotalItemsForChannel(props.uri, PAGE_SIZE)(state),
});

const perform = {
  doClaimSearch,
};

export default connect(
  select,
  perform
)(ChannelPage);
