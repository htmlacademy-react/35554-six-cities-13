import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  dropOffer,
  fillOffersList, loadOffer, loadOffersNearby, loadReviews,
  requireAuthorization, setCurrentUser,
  setError,
  setOffersDataLoadingStatus
} from './action';
import {AuthorizationStatus, DEFAULT_CITY} from '../const';
import {Offer, Offers} from '../types/offer';
import {UserData} from '../types/user-data';

const initialState: {
  offers: Offers;
  offer: Offer | null;
  favorites: Offers;
  offersNearby: Offers;
  city: string;
  currentUser: UserData | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
} = {
  offers: [],
  offer: null,
  favorites: [],
  offersNearby: [],
  city: DEFAULT_CITY,
  currentUser: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setCurrentUser, (state, action) => {
      state.currentUser = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
