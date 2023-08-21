import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DEFAULT_CITY, NameSpace} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  city: DEFAULT_CITY,
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (
      state,
      action: PayloadAction<{message: string | null; delay: number}>) => {
      state.error = action.payload.message;
    },
  },
});

export const {changeCity, setError, clearError} = appProcess.actions;
