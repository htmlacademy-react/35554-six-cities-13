import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {UserData} from './user-data';
import {FullOffer, Offers} from './offer';
import {TReviews} from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  currentUser: UserData | null;
};

export type AppProcess = {
  city: string;
  error: string | null;
};

export type DataProcess = {
  offers: Offers;
  offer: FullOffer | null;
  offersNearby: Offers;
  reviews: TReviews;
  favorites: Offers;
  isOffersDataLoading: boolean;
  isOfferLoading: boolean;
  hasError: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
