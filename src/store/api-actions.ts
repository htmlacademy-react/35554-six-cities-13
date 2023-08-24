import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {FullOffer, Offer, Offers} from '../types/offer';
import {APIRoute, AppRoute} from '../const';
import {redirectToRoute} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {ReviewForm, TReviews} from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchOffer = createAsyncThunk<FullOffer, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<TReviews, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TReviews>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const fetchOffersNearby = createAsyncThunk<Offers, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offersNearby/fetchOffersNearby',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${offerId}${APIRoute.OffersNearby}`);
    return data;
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

export const changeFavoriteStatus = createAsyncThunk<Offer, {offerId: string; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites, changeFavoriteStatus',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorites}/${offerId}/${status}`);

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
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
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const postNewReviewAction = createAsyncThunk<void, {offerId: string; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/postNewReview',
  async ({offerId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<ReviewForm>(`${APIRoute.Reviews}/${offerId}`, {
      comment,
      rating
    });
    return data;
  },
);
