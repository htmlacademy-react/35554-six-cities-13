import {createAction} from '@reduxjs/toolkit';
import {CityOffer, Offer} from '../types/offer';

export const changeCity = createAction<string>('city/changeCity');

export const fillOffersList = createAction('offers/fillOffersList');

export const fetchOffer = createAction<Offer['id']>('offer/fetchOffer');

export const dropOffer = createAction('offer/dropOffer');
