import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {FullOffer, Offer, Offers} from '../types/offer';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {
  fillOffersList,
  loadOffer, loadOffersNearby, loadReviews, postNewReview,
  redirectToRoute,
  requireAuthorization, setCurrentUser,
  setError, setOfferLoadingStatus,
  setOffersDataLoadingStatus, setReviewPostedStatus
} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {store} from './index';
import {ReviewForm, TReviews} from '../types/reviews';

export const clearErrorAction = createAsyncThunk(
  'offer/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(fillOffersList(data));
  },
);

export const fetchOffer = createAsyncThunk<FullOffer, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(setOfferLoadingStatus(true));
      const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setOfferLoadingStatus(false));
      dispatch(loadOffer(data));
    } catch {
      dispatch(setOfferLoadingStatus(true));
      dispatch(redirectToRoute(AppRoute.Other));
      dispatch(setOfferLoadingStatus(false));
    }
  }
);

export const fetchReviews = createAsyncThunk<TReviews, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<TReviews>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(loadReviews(data));
  }
);

export const fetchOffersNearby = createAsyncThunk<Offers, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offersNearby/fetchOffersNearby',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${offerId}${APIRoute.OffersNearby}`);
    dispatch(loadOffersNearby(data));
  }
);

export const fetchFavorites = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorites);

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setCurrentUser(data));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const postNewReviewAction = createAsyncThunk<void, {offerId: string; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/postNewReview',
  async ({offerId, comment, rating}, {dispatch, getState, extra: api}) => {
    const state = getState();
    const {data} = await api.post<ReviewForm>(`${APIRoute.Reviews}/${offerId}`, {comment, rating});
    dispatch(postNewReview(data));
    dispatch(loadReviews([...state.reviews, data]));
    dispatch(setReviewPostedStatus(true));
  },
);
