import {State} from '../../types/state';
import {FullOffer, Offers} from '../../types/offer';
import {NameSpace} from '../../const';
import {TReviews} from '../../types/reviews';

export const getOffers = (state: State): Offers =>
  state[NameSpace.Data].offers;

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.Data].isOffersDataLoading;

export const getOffer = (state: State): FullOffer | null =>
  state[NameSpace.Data].offer;

export const getIsOfferLoading = (state: State): boolean =>
  state[NameSpace.Data].isOfferLoading;

export const getOffersNearby = (state: State): Offers =>
  state[NameSpace.Data].offersNearby;

export const getReviews = (state: State): TReviews =>
  state[NameSpace.Data].reviews;

export const getIsReviewPosted = (state: State): boolean =>
  state[NameSpace.Data].isReviewPosted;

export const getErrorStatus = (state: State): boolean =>
  state[NameSpace.Data].hasError;
