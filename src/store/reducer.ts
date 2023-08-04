import {createReducer} from '@reduxjs/toolkit';
import {changeCity, dropOffer, fetchOffer, fillOffersList} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY} from '../const';
import {FullOffers, Offer, Offers} from '../types/offer';
import {fullOffers} from '../mocks/full-offers';

const initialState: {
  fullOffers: FullOffers;
  offers: Offers;
  offer: Offer | null;
  city: string;
} = {
  fullOffers,
  offers,
  offer: null,
  city: DEFAULT_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = fullOffers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
    });
});

export {reducer};
