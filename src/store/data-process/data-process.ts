import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {fetchOffer, fetchOffersAction, fetchOffersNearby, fetchReviews, postNewReviewAction} from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  offer: null,
  offersNearby: [],
  reviews: [],
  isOffersDataLoading: false,
  isOfferLoading: false,
  isReviewPosted: false,
  hasError: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setReviewPostedStatus: (state, action: PayloadAction<boolean>) => {
      state.isReviewPosted = action.payload;
    }
  },
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
      .addCase(postNewReviewAction.fulfilled, (state, action) =>{
        state.reviews = [...state.reviews, action.payload];
        state.isReviewPosted = true;
      });
  }
});

export const {setReviewPostedStatus} = dataProcess.actions;
