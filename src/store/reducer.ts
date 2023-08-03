import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
