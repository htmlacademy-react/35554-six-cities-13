import {createAction} from '@reduxjs/toolkit';
import {FullOffer, Offer, Offers} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';
import {ReviewForm, TReviews} from '../types/reviews';
import {UserData} from '../types/user-data';

export const changeCity = createAction<string>('city/changeCity');

export const fillOffersList = createAction<Offers>('offers/fillOffersList');

export const loadOffer = createAction<FullOffer>('offer/loadOffer');

export const loadOffersNearby = createAction<Offers>('offersNearby/loadOffersNearby');

export const loadReviews = createAction<TReviews>('reviews/loadReviews');

export const setCurrentUser = createAction<UserData>('user/setCurrentUser');

export const postNewReview = createAction<ReviewForm>('reviews/postNewReview');

export const dropOffer = createAction('offer/dropOffer');

export const setOffersDataLoadingStatus = createAction<boolean>
('data/setOffersDataLoadingStatus');

export const setOfferLoadingStatus = createAction<boolean>
('data/setOfferLoadingStatus');

export const setReviewPostedStatus = createAction<boolean>('data/setReviewPostedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>
('user/requireAuthorization');

export const setError = createAction<string | null>('offer/setError');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
