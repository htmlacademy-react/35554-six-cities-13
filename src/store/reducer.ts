import {createReducer} from '@reduxjs/toolkit';
import {changeCity, dropOffer, fetchOffer, fillOffersList, setOffersDataLoadingStatus} from './action';
// import {offers} from '../mocks/offers';
import {DEFAULT_CITY} from '../const';
import {FullOffers, Offer, Offers} from '../types/offer';
import {fullOffers} from '../mocks/full-offers';

const initialState: {
  fullOffers: FullOffers;
  offers: Offers;
  offer: Offer | null;
  favorites: Offers;
  offersNearby: Offers;
  city: string;
  isOffersDataLoading: boolean;
} = {
  fullOffers,
  offers: [],
  offer: null,
  favorites: [],
  offersNearby: [],
  city: DEFAULT_CITY,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = fullOffers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
