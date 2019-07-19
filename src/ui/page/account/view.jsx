import React from 'react';
import classnames from 'classnames';
import RewardSummary from 'component/rewardSummary';
import RewardTotal from 'component/rewardTotal';
import Page from 'component/page';
import UserEmail from 'component/userEmail';
import InvitePage from 'page/invite';

const WalletPage = () => (
  <Page>
      <div className="columns">
        <UserEmail />
        <div>
          <RewardSummary />
          <RewardTotal />
        </div>
      </div>
      <InvitePage />
  </Page>
);

export default WalletPage;
