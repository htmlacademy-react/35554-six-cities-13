import {createAction} from '@reduxjs/toolkit';
import {CityOffer, Offers} from '../types/offer';

export const changeCity = createAction('city/changeCity', (city: CityOffer) => ({payload: city}));

export const fillOffersList = createAction('offer/fillOffersList', (offers: Offers) => ({payload: offers}));
