import * as dayjs from 'dayjs';
import {Offer, Offers, TSorting} from '../types/offer';
import {Review} from '../types/reviews';

const DateFormat = {
  DATE_SHORT: 'MMMM YYYY',
  DATE_FULL: 'YYYY-MM-DD',
};

export const getRefineDate = (date: string) => date && dayjs(date).format(DateFormat.DATE_SHORT);
export const getRefineFullDate = (date: string) => date && dayjs(date).format(DateFormat.DATE_FULL);

export const getRating = (rating: number) => Math.floor(rating) * 20;

export const sortByDay = (a: Review, b: Review) => {
  if (dayjs(b.date).isAfter(dayjs(a.date))) {
    return 1;
  }
  if (dayjs(b.date) === dayjs(a.date)) {
    return 0;
  }
  if (dayjs(b.date).isBefore(dayjs(a.date))) {
    return -1;
  }
};

const sortByPriceLowHigh = (a: Offer, b: Offer) => a.price - b.price;
const sortByPriceHighLow = (a: Offer, b: Offer) => b.price - a.price;
const sortByRating = (a: Offer, b: Offer) => b.rating - a.rating;

export const sorting: Record<TSorting, (offers: Offers) => Offers> = {
  Popular: (offers: Offers) => offers.slice(),
  PriseLowHigh: (offers: Offers) => offers.slice().sort(sortByPriceLowHigh),
  PriceHighLow: (offers: Offers) => offers.slice().sort(sortByPriceHighLow),
  TopRatedFirst: (offers: Offers) => offers.slice().sort(sortByRating),
};

export const getRandomElement = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

export const getFavoriteOffersByCity = (favorites: Offers) =>
  favorites.reduce<{ [key: string]: Offers }>((acc, offer) => {
    const city = offer.city.name;
    if (!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});
