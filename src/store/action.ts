import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';
import {TReviews} from '../types/reviews';
import {UserData} from '../types/user-data';

export const changeCity = createAction<string>('city/changeCity');

export const fillOffersList = createAction<Offers>('offers/fillOffersList');

export const loadOffer = createAction<Offer['id']>('offer/loadOffer');

export const loadOffersNearby = createAction<Offers>('offersNearby/loadOffersNearby');

export const loadReviews = createAction<TReviews>('reviews/loadReviews');

export const setCurrentUser = createAction<UserData>('user/setCurrentUser');

export const dropOffer = createAction('offer/dropOffer');

export const setOffersDataLoadingStatus = createAction<boolean>
('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>
('user/requireAuthorization');

export const setError = createAction<string | null>('offer/setError');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
