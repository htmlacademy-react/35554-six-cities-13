import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const dropOffer = createAction('offer/dropOffer');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
