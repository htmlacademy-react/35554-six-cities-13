import {Host} from './offer';

export type ReviewForm = {
  comment: string;
  rating: number;
}

export type Review = ReviewForm & {
  id: string;
  date: string;
  user: Host;
}

export type TReviews = Review[];
