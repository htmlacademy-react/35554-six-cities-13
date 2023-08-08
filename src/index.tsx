import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {fullOffers} from './mocks/full-offers';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchOffersAction} from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} fullOffers={fullOffers} reviews={reviews} />
    </Provider>
  </React.StrictMode>
);
