import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {
  changeFavoriteStatus,
  fetchFavorites,
  fetchOffer,
  fetchOffersAction,
  fetchOffersNearby,
  fetchReviews,
  postNewReviewAction
} from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  offer: null,
  offersNearby: [],
  reviews: [],
  favorites: [],
  isOffersDataLoading: false,
  isOfferLoading: false,
  hasError: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
        const updatedOffer = action.payload;
        if (!updatedOffer.isFavorite) {
          state.favorites = state.favorites.filter((offer) => offer.id !== updatedOffer.id);
        }

        state.offers = state.offers.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);
      })
      .addCase(postNewReviewAction.fulfilled, (state, action) =>{
        state.reviews = [...state.reviews, action.payload];
        state.isReviewPosted = true;
      });
  }
});

export const {setReviewPostedStatus} = dataProcess.actions;
