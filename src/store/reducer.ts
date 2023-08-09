import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  dropOffer,
  fillOffersList,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus
} from './action';
import {AuthorizationStatus, DEFAULT_CITY} from '../const';
import {Offer, Offers} from '../types/offer';

const initialState: {
  offers: Offers;
  offer: Offer | null;
  favorites: Offers;
  offersNearby: Offers;
  city: string;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
} = {
  offers: [],
  offer: null,
  favorites: [],
  offersNearby: [],
  city: DEFAULT_CITY,
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
    // .addCase(fetchOffer, (state, action) => {
    //   state.offer = fullOffers.find((offer) => offer.id === action.payload) ?? null;
    // })
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
