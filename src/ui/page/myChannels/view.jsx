// @flow

import React, { useEffect } from 'react';
import Page from 'component/page';
import Button from 'component/button';
import ClaimList from 'component/claimList';

type Props = {
  uris: Array<string>,
  fetching: boolean,
  fetchChannelListMine: () => void,
};

export default function MyChannelsPage(props: Props) {
  const { fetching, uris, fetchChannelListMine } = props;
  const uriLength = uris.length;
  useEffect(() => {
    fetchChannelListMine();
  }, [uriLength]);

  return (
    <Page notContained>
      {(uris && uris.length) || fetching ? (
        <div className="card">
          <ClaimList
            header={<h1>{__('Your Channels')}</h1>}
            loading={fetching}
            persistedStorageKey="claim-list-channels"
            uris={uris}
            defaultSort
            headerAltControls={<Button button="link" label={__('No channels? Publish!')} navigate="/$/publish" />}
          />
        </div>
      ) : (
        <div className="main--empty">
          <section className="card card--section">
            <header className="card__header">
              <h2 className="card__title">{__('It looks like you have no channels on LBRY yet.')}</h2>
            </header>

            <div className="card__content">
              <div className="card__actions card__actions--center">
                <Button button="primary" navigate="/$/publish" label={__('Publish something new')} />
              </div>
            </div>
          </section>
        </div>
      )}
    </Page>
  );
}
