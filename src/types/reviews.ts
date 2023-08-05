import {Host} from './offer';

export type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: Host;
}

export type TReviews = Review[];
