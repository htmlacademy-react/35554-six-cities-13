import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer';

export const changeCity = createAction<string>('city/changeCity');

export const fillOffersList = createAction<Offers>('offers/fillOffersList');

export const fetchOffer = createAction<Offer['id']>('offer/fetchOffer');

export const dropOffer = createAction('offer/dropOffer');

export const setOffersDataLoadingStatus = createAction<boolean>
('data/setOffersDataLoadingStatus');
