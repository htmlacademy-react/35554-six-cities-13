import {Host} from './offer';

export type Comment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: Host;
}

export type Comments = Comment[];
