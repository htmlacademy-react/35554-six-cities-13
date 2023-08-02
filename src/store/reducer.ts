import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state) => {
      state.offers = offers;
    });
});

export {reducer};
