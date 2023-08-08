import {createReducer} from '@reduxjs/toolkit';
import {changeCity, dropOffer, fillOffersList, setOffersDataLoadingStatus} from './action';
import {DEFAULT_CITY} from '../const';
import {Offer, Offers} from '../types/offer';

const initialState: {
  offers: Offers;
  offer: Offer | null;
  favorites: Offers;
  offersNearby: Offers;
  city: string;
  isOffersDataLoading: boolean;
} = {
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
    // .addCase(fetchOffer, (state, action) => {
    //   state.offer = fullOffers.find((offer) => offer.id === action.payload) ?? null;
    // })
    .addCase(dropOffer, (state) => {
      state.offer = null;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
